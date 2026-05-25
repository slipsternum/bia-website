import { Redis } from "@upstash/redis";
import { put } from "@vercel/blob";
import { Project } from "@/app/Projects/data/types";

const redis = Redis.fromEnv();

const INDEX_KEY = "projects:index";
const projectKey = (slug: string) => `project:${slug}`;

export async function getProjects(): Promise<Project[]> {
  try {
    const slugs = await redis.lrange<string>(INDEX_KEY, 0, -1);
    if (!slugs || slugs.length === 0) return [];

    const keys = slugs.map(projectKey);
    const results = await redis.mget<(Project | null)[]>(...keys);
    return results.filter((p): p is Project => p !== null);
  } catch {
    return [];
  }
}

export async function getProject(slug: string): Promise<Project | null> {
  try {
    return await redis.get<Project>(projectKey(slug));
  } catch {
    return null;
  }
}

export async function saveProject(project: Project): Promise<void> {
  const slugs = await redis.lrange<string>(INDEX_KEY, 0, -1);
  const exists = slugs.includes(project.slug);

  const pipeline = redis.pipeline();
  pipeline.set(projectKey(project.slug), project);
  if (!exists) {
    pipeline.rpush(INDEX_KEY, project.slug);
  }
  await pipeline.exec();
}

export async function deleteProjectBySlug(slug: string): Promise<boolean> {
  const removed = await redis.lrem(INDEX_KEY, 0, slug);
  if (removed === 0) return false;
  await redis.del(projectKey(slug));
  return true;
}

export async function uploadImage(file: File): Promise<string> {
  const timestamp = Date.now();
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const pathname = `images/projects/${timestamp}-${safeName}`;
  const blob = await put(pathname, file, {
    access: "public",
    addRandomSuffix: false,
  });
  return blob.url;
}

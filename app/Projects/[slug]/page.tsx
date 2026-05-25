import { notFound } from "next/navigation";
import styles from "./ProjectDetail.module.css";
import { getProject } from "@/app/lib/projects";
import ProjectDetailContent from "./ProjectDetailContent";

export const revalidate = 3600;

interface Props {
  params: { slug: string };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = params;
  const project = await getProject(slug);

  if (!project) notFound();

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <ProjectDetailContent project={project} />
      </div>
    </main>
  );
}

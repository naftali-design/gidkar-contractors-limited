"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProjectsPreview from "@/components/sections/projects-preview";

function ProjectsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <ProjectsPreview initialCategory={category ?? undefined} />
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}

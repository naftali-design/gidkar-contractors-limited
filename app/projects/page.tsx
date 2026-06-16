"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ProjectsContent() {
  const searchParams = useSearchParams();

  return (
    <div>
      <h1>Projects Page</h1>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
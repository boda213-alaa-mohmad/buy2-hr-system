"use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
import EmptyState from "@/features/Mytasks/components/EmptyState";

export default function MyTasksPage() {
  // const router = useRouter();
  // حالة مؤقتة للتأكد من شغل الـ Empty State
  // const [tasks] = useState([]);

  return (
    // <main style={{ padding: "24px", width: "100%" }}>
    //   {tasks.length === 0 ? (
    //     <EmptyState />
    //   ) : (
    //     <div></div>
    //   )}
    // </main>
    <>
    <EmptyState />   
    </>
  );
}

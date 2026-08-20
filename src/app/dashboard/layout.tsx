import Header from "@/Components/Layouts/header/Header";
import SideBar from "@/Components/Layouts/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: "24px", width: "100%" }}>
      <SideBar />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginRight: "50px",
        }}
      >
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}

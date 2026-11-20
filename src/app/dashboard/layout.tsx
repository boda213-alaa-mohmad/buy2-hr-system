import Header from "@/Components/Layouts/header/Header";
import SideBar from "@/Components/Layouts/sidebar/Sidebar";
import TicketProvider from "@/context/ticketProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TicketProvider>
      <div
        style={{
          display: "flex",
          gap: "24px",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <SideBar />

        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            marginRight: "50px",
          }}
        >
          <Header />

          <main style={{ width: "100%" }}>{children}</main>
        </div>
      </div>
    </TicketProvider>
  );
}

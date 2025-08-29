import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />

      <main className="w-full px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;

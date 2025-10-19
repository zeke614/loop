import { Outlet } from "react-router-dom";
import Header from "./header/header.tsx";
import Footer from "./footer.tsx";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

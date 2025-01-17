import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {
  return (
    <>
      <div data-bs-theme="dark">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

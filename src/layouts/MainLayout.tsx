import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Books from "../pages/books";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Outlet />
        <Books />
      </div>
    </div>
  );
}

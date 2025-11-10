// import "./App.css";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import { Outlet } from "react-router";

function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;

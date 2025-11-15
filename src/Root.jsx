// import "./App.css";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

function Root() {
  return (
    <>
      <div className="bg-gray-100 w-full lg:w-[80%] mx-auto">
        <ToastContainer />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Root;

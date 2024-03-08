/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import "./App.css";
import Router from "react-easy-router";
import { useLocation } from "react-router-dom";
import tennerRoutes from "./routes/route";
import Signin from "./components/signinpage/Signin";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
// import { UpdateStore, setStore } from "./StoreContext";
function App() {
  const { pathname } = useLocation();
  console.log("🚀 ~ App ~ pathname:", pathname);
  const nav = useNavigate();
  // Function can resolve/reject or return true/false
  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return { success: true, role: "user" };
    } else {
      console.log("got here ?");
      if(pathname === "/login"){

        nav("/login");
      }
      else if(pathname === "/"){
        nav("/login");
      }
      else if(pathname === "/singup"){

        nav("/singup");
      }
      else if(pathname === "/forget"){

        nav("/forget");
      }
      else if(pathname !== "/forget" || pathname !== "/singup" || pathname !== "/login" || pathname !== "/" ){

        nav("/login");
      }
      return false;
    }
  };

  useEffect(() => {
    // const userData = Store();
    // localStorage.setItem("user", JSON.stringify(userData));
    // const consoleuserData = localStorage.getItem("user");
    // console.log(
    //   "🚀 ~ checkAuth ~ consoleuserData:",
    //   JSON.parse(consoleuserData)
    // );
    checkAuth();
  }, [pathname]);
  {
    pathname !== "/" && pathname !== "/login" && <Signin />;
  }

  return (
    <>
      <ToastContainer />
      <Router routes={tennerRoutes} isAuthenticated={checkAuth} />
    </>
  );
}

export default App;

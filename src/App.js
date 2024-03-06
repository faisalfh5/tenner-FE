/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import "./App.css";
import Router from "react-easy-router";
import { useLocation } from "react-router-dom";
import tennerRoutes from "./routes/route";
import Signin from "./components/signinpage/Signin";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// import { UpdateStore, setStore } from "./StoreContext";
function App() {
  const { pathname } = useLocation();

  // Function can resolve/reject or return true/false
  const checkAuth = () => {
    const token = localStorage.getItem("token");

    if (token) {
      return { success: true, role: "user" };
    } else {
      return false;
    }
  };

  // const addUser = () => {
  //   const user = localStorage.getItem("user");
  //   setStore((prevState) => ({
  //     ...prevState,
  //     loggedIn: true,
  //     user: user ? JSON.parse(user) : {}, // Parse user data if it exists
  //   }));
  // };

  useEffect(() => {
    // addUser();
  }, [pathname]);
  {
    pathname !== "/" && pathname !== "/login" ? <Signin /> : "";
  }

  return (
    <>
      <ToastContainer />
      <Router routes={tennerRoutes} isAuthenticated={checkAuth} />
    </>
  );
}

export default App;

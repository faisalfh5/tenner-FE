import Reel from "../components/Reel";
import Map from "../components/Map";
import Emailcheck from "../components/emailcheck/Emailcheck";
import Home from "../components/home/Home";
import Term from "../components/popups/Term";
import Event from "../components/popups/Event";
import Avatar from "../components/popups/Avatar";
import Forget from "../components/forget/Forget";
import Signin from "../components/signinpage/Signin";
import Links from "../components/common/Links";
import Mainpage from "../components/mainpage/Main";
import Signup from "../components/signuppage/Signup";

const tennerRoutes = [
  {
    path: "/",
    navigate: "/main",
  },
  {
    path: "/login",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forget",
    element: <Forget />,
  },
  {
    path: "/reel",
    element: <Reel />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/emailcheck",
    element: <Emailcheck />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/term",
    element: <Term />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/avatar",
    element: <Avatar />,
  },
  {
    path: "/links",
    element: <Links />,
  },
  {
    path: "/main",
    element: <Mainpage />,
  },
];

export default tennerRoutes;

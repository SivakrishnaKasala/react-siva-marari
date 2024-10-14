import MyTest from "./views/admin/mytests/MyTest";
import Practice from "./views/admin/practice/Practice";
import Prepare from "./views/admin/prepare/Prepare";

//icons
import { FaBookOpen } from "react-icons/fa";
import { LuDumbbell } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { FaUniversity } from "react-icons/fa";
import Institutions from "./views/admin/institutions/Institutions";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import SettingsPage from "./views/admin/settings/SettingsPage";
import Cart from "./pages/cart/Cart";
import SelectTest from "./pages/checkout/SelectTest";
import DeliveryTest from "./pages/checkout/DeliveryTest";

export const routes = [
  {
    path: "home",
    name: "MY TESTS",
    icon: <FaBookOpen />,
    component: <MyTest />,
    layout: "/admin",
    isMenuItem: true,
  },
  {
    path: "practice",
    name: "PRACTICE",
    icon: <LuDumbbell />,
    component: <Practice />,
    layout: "/admin",
    isMenuItem: true,
  },
  {
    path: "prepare",
    name: "TEST INFO",
    icon: <CgNotes />,
    component: <Prepare />,
    layout: "/admin",
    isMenuItem: true,
  },
  {
    path: "accepting_institutions",
    name: "INSTITUTIONS",
    icon: <FaUniversity />,
    component: <Institutions />,
    layout: "/admin",
    isMenuItem: true,
  },
  {
    path: "login",
    name: "Login",
    component: <Login />,
    layout: "/auth",
    isMenuItem: false,
  },
  {
    path: "register",
    name: "Register",
    component: <Register />,
    layout: "/auth",
    isMenuItem: false,
  },
  {
    path: "settings",
    name: "Settings",
    component: <SettingsPage />,
    layout: "/admin",
    isMenuItem: false,
  },
  {
    path: "cart",
    name: "Cart",
    component: <Cart />,
    layout: "/admin",
    isMenuItem: false,
  },
  {
    path: "checkout",
    name: "Checkout",
    isSubEle: true,
    layout: "/admin",
    isMenuItem: false,
    item: [
      {
        path: "select",
        name: "Select",
        layout: "/checkout",
        component: <SelectTest />,
      },
      {
        path: "delivery",
        name: "Delivery",
        layout: "/checkout",
        component: <DeliveryTest />,
      },
    ],
  },
];

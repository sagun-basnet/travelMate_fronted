import "./App.css";
import PageError from "./img/404.svg";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import SinglePackage from "./components/package/SinglePackage";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/globle/Navbar";
import Footer from "./components/globle/Footer";
import Package from "./pages/Package";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Guide from "./pages/Guide";

import Dashboard from "./scenes/dashboard"
import DashboardG from "./scenes/dashnoardG"
import Team from "./scenes/team"
import ManageGuide from "./scenes/guide"
import AddGuide from "./scenes/addGuide"
import Calender from "./scenes/calender"
import Faq from "./scenes/faq"
import Bar from "./scenes/bar"
import Pie from "./scenes/pie"
import Line from "./scenes/line"
import Geography from "./scenes/geography";
import AddPackage from "./scenes/addPackage";
import ManagePackage from "./scenes/package";
import ManageBooking from "./scenes/booking";
import EsewaPayment from "./components/package/EsewaPayment";
import ThankYouPage from "./components/package/ThankYouPage";
import AfterBooking from "./components/package/AfterBooking";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/package",
        element: <Package />,
      },
      {
        path: "/package/thankyou",
        element: <ThankYouPage />,
      },
      {
        path: "/package/afterBooking",
        element: <AfterBooking />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "*",
        element: (
          <div
            style={{
              height: "calc(100vh - 5rem)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={PageError} alt="" style={{ height: "100%" }} />
          </div>
        ),
      },
    ],
  },

  {
    path: "/admin/dashboard",
    element: <Admin />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/admin/dashboard/users",
        element: <Team/>
      },
      {
        path: "/admin/dashboard/guide",
        element: <ManageGuide/>
      },
      {
        path: "/admin/dashboard/addGuide",
        element: <AddGuide/>
      },
      {
        path: "/admin/dashboard/addPackage",
        element: <AddPackage/>
      },
      {
        path: "/admin/dashboard/manageBooking",
        element: <ManageBooking/>
      },
      {
        path: "/admin/dashboard/managePackage",
        element: <ManagePackage/>
      },
      {
        path: "/admin/dashboard/calender",
        element: <Calender/>
      },
      {
        path: "/admin/dashboard/faq",
        element: <Faq />
      },
      {
        path: "/admin/dashboard/bar",
        element: <Bar />
      },
      {
        path: "/admin/dashboard/pie",
        element: <Pie />
      },
      {
        path: "/admin/dashboard/line",
        element: <Line />
      },
      {
        path: "/admin/dashboard/geography",
        element: <Geography />
      },
    ]
  },
  {
    path: "/guide/dashboard",
    element: <Guide />,
    children: [
      {
        path: "/guide/dashboard",
        element: <DashboardG/>
      },
      {
        path: "/guide/dashboard/users",
        element: <Team/>
      },
      {
        path: "/guide/dashboard/guide",
        element: <ManageGuide/>
      },
      {
        path: "/guide/dashboard/calender",
        element: <Calender/>
      },
      {
        path: "/guide/dashboard/faq",
        element: <Faq />
      },
      {
        path: "/guide/dashboard/bar",
        element: <Bar />
      },
      {
        path: "/guide/dashboard/pie",
        element: <Pie />
      },
      {
        path: "/guide/dashboard/line",
        element: <Line />
      },
      {
        path: "/guide/dashboard/geography",
        element: <Geography />
      },
      {
        path: "/guide/dashboard/addPackage",
        element: <AddPackage />
      },
    ]
  },
  {
    path: "/package/:id",
    element: <SinglePackage />,
  },
  {
    path: "/package/esewa/payment",
    element: <EsewaPayment/>
  },
]);

function App() {


  return (
        <div className="App">
          <RouterProvider router={router} />
        </div>

  );
}

export default App;

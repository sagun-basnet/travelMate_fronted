import "./App.css";
// import ScrollToTop from "./components/ScrollToTop";
import PageError from "./img/404.svg";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet,
} from "react-router-dom";
import SinglePackage from "./components/package/SinglePackage";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/globle/Navbar";
import Footer from "./components/globle/Footer";
import Package from "./pages/Package";
// import Feedback from "./pages/Feedback";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Guide from "./pages/Guide";

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
  },
  {
    path: "/guide/dashboard",
    element: <Guide />,
  },
  {
    path: "/package/:id",
    element: <SinglePackage />,
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

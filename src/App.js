import "./App.css";
import PageError from './img/404.svg';
import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/globle/Navbar";
import Footer from "./components/globle/Footer";
import Package from "./pages/Package";
import Feedback from "./pages/Feedback";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {AnimatePresence} from 'framer-motion'

const USER_TYPES = {
  PUBLIC: "Public User",
  NORMAL_USER: "Normal User",
  GUIDER: "Guid User",
  ADMIN_USER: "Admin User",
};

const CURRENT_USER_TYPE = USER_TYPES.PUBLIC;

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Navbar/>
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          exact
          path="/"
          element={
            <PublicElement>
              <Home />
            </PublicElement>
          }
        />
        {/* <Route exact path="/home" element={<Home />} /> */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/package" element={<Package />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/admin/dashboard" element={<Admin />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route
          exact
          path="*"
          element={
            <div style={{height: "calc(100vh - 5rem)", display: "flex", justifyContent:"center", alignItems:"center"}}>
              <img src={PageError} alt=""  style={{height: "100%"}}/>
            </div>
          }
        />
      </Routes>
      </AnimatePresence>
      <Footer />
      {/* </BrowserRouter> */}
    </div>
  );
}

function PublicElement({ children }) {
  return <>{children}</>;
}

export default App;

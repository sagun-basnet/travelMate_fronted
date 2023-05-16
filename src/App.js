import './App.css';
import {
  // BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from './components/globle/Navbar';
import Footer from './components/globle/Footer';
// import Package from './pages/Package';
import Feedback from './pages/Feedback';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Admin from './pages/Admin';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Navbar color={{color: 'red'}}/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact" element={<Contact/>} />
            {/* <Route exact path="/package" element={<Package/>} /> */}
            <Route exact path="/feedback" element={<Feedback/>} />
            {/* <Route exact path="/admin" element={<Admin/>} /> */}
            {/* <Route exact path="/login" element={<Login/>} /> */}
            {/* <Route exact path="/signup" element={<Signup/>} /> */}
          </Routes>
        <Footer/>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;

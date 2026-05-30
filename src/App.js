import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Router components import kiya
import Header from "./Components/Landing/Header";
import Home from "./Components/Landing/Home";
import Services from "./Components/Landing/Services";
import Contact from "./Components/Landing/Contact";
import About from "./Components/Landing/About";
import Footer from "./Components/Landing/Footer";



// Note: Agar aapko baaki pages ke components (About, Services) baad me banane hain, 
// toh aap unhe yahan import karke alag <Route> me daal sakte hain.

function App() {
  return (
    <Router>
      <div className="App">
        {/* Top Navbar Section - Ye har page par upar hi rahega */}
        <Header />

        {/* Main Routing System */}
        <Routes>
          {/* Main Home Page Root Path (/) */}
          <Route path="/" element={<Home />} />
          
          {/* Placeholder Routes (Baaki pages ke liye jab aap unka content banaenge) */}
          <Route path="/About" element={<About/>} />
          <Route path="/Services" element={< Services/>} />
          <Route path="/Contact" element={< Contact/>} />
          <Route path="/login" element={<Home />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
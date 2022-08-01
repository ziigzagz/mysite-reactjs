import React from "react";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import Cover from "./components/cover";
import Footer from "./components/footer";
import About from "./components/about";
function Main() {
  return (
    <>
 {/* 
 create at => 30-07-2022
 CHECK-LIST
 [/] cover
 [] profile
 [] education
 [] project
 [] certificate
 [] skill
 [] contact
 [] footer
 */}
      <div className="overlay">
        <Navbar />
        <Cover />
        <Profile />
        <Footer />
        <About />
      </div>
    </>
  );
}

export default Main;

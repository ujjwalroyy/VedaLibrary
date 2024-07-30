
import React, { useContext } from "react";
import { Appcontext } from "../components/context/AppContext";
import SearchPage from "./pages/SearchPage";
import SearchBar from "./pages/SearchBar";
import bg from "./assets/bg1.mp4"
import "./spinner.css";
import "./Home.css"; // Add a CSS file for the Home component
import Navbar from "./Navbar";

function Home() {
  const { loading } = useContext(Appcontext);
  return (
    <div className="home-container">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="custom-loader"></div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col">
            <div className="w-[550px] mt-2">
              {/* <SearchBar /> */}
            </div>
            <SearchPage />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
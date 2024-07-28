import React, { useContext } from "react";
import { Appcontext } from "../components/context/AppContext";
import SearchPage from "./pages/SearchPage";
import SearchBar from "./pages/SearchBar";
import "./spinner.css";
function Home() {
  const { loading } = useContext(Appcontext);
  return (
    <div className="w-full h-full">
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="custom-loader"></div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col">
          <div className="w-[550px] mt-2">
            <SearchBar />
          </div>
          <SearchPage />
        </div>
      )}
    </div>
  );
}

export default Home;



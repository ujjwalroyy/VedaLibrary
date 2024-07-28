import React, { useContext, useEffect, useState } from "react";
import "../spinner.css";
import { Appcontext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function ChapterPage() {
  const { chapter, chapternum, loading, setloading, setversenum } = useContext(Appcontext);
  const [verse, setverse] = useState([]);
  const [summary, setsummary] = useState();
  const navigate = useNavigate();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "88f136e4f3msh38c30997a2db131p1c7083jsnad62f3e849ea",
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  };

  async function fetchVerse() {
    if (!chapternum || chapternum <= 0) {
      console.error("Invalid chapter number:", chapternum);
      return; 
    }
    
    setloading(true);
    console.log(`Fetching verses for chapter ${chapternum}`);
    
    try {
      const chapterSummary = chapter.find((obj) => obj?.chapter_number === chapternum);
      if (chapterSummary) {
        setsummary(chapterSummary?.chapter_summary);
      } else {
        console.warn(`No chapter summary found for chapter number ${chapternum}`);
      }
      
      console.log(`API URL: https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapternum}/verses/`);
      
      const res = await fetch(
        `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapternum}/verses/`,
        options
      );
      console.log(`Response status: ${res.status}`);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setverse(data);
    } catch (e) {
      console.error("Error in fetching:", e.message);
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    fetchVerse();
  }, [chapternum]);

  function clickHandler(event) {
    setversenum(event.currentTarget.id);
    navigate("/verse");
  }

  return (
    <center>
      <div className="w-full h-100 flex flex-col justify-center items-center mt-10 ">
        {loading ? (
          <div className="w-full h-100">
            <div className="custom-loader"></div>
          </div>
        ) : (
          <div className="">
            <div className="w-[800px] mb-7 bg-yellow-400 font-text p-2 rounded-xl shadow-lg">
              {summary}
            </div>

            {Array.isArray(verse) &&
              verse.map((data) => (
                <div key={data?.verse_number} onClick={clickHandler} id={data?.verse_number}>
                  <div className="bg-yellow-400 w-[450px] text-center rounded-md gap-3 mb-3 cursor-pointer hover:scale-100">
                    <p className="text-2xl text-white">Verse {data?.verse_number}</p>
                    <hr />
                    <p className="mt-1">{data?.text}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </center>
  );
}

export default ChapterPage;

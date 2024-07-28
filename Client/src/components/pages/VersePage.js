import React, { useContext, useEffect, useState } from "react";
import { Appcontext } from "../context/AppContext";

function VersePage() {
  const { chapternum, versenum, loading, setloading } = useContext(Appcontext);
  const [versee, setversee] = useState({});
  const [translation, settranslation] = useState([]);
  
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "88f136e4f3msh38c30997a2db131p1c7083jsnad62f3e849ea",
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  };

  async function fetchVerse() {
    setloading(true);
    try {
      const res = await fetch(
        `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapternum}/verses/${versenum}/`,
        options
      );
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setversee(data);
      settranslation(data?.translations || []);
    } catch (e) {
      console.error("Error in fetching verse:", e.message);
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    fetchVerse();
  }, [chapternum, versenum]); 

  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-yellow-400 mt-4 w-[1000px] shadow-md rounded-xl">
        <div className="text-2xl gap-1 p-2 flex flex-col justify-center">
          <center>
            <h1 className="mb-2 font-mono font-semibold">
              Chapter {chapternum}, Verse {versee?.verse_number}
            </h1>
            <p className="text-slate-700">{versee?.text}</p>
          </center>
        </div>
        <center>
          <h2 className="text-2xl font-mono font-bold mb-2">Translations</h2>
        </center>
        <div>
          {translation.map((data) => (
            <center key={data.id}>
              <div className="pb-4">
                <p className="font-semibold text-xl font-mono">
                  {data?.language.charAt(0).toUpperCase() + data?.language.slice(1)}
                </p>
                <p className="font-text">{data.description}</p>
                <p>{data.author_name}</p>
              </div>
            </center>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VersePage;

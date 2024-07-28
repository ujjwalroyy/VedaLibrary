import { createContext, useState, useEffect } from "react";
export const Appcontext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setloading] = useState(false);
  const [chapter, setchapter] = useState([]);
  const [verse, setVerse] = useState([]);
  const [versenum, setversenum] = useState();
  const [chapternum, setchapternum] = useState(1);
  const [url, seturl] = useState(
    "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?limit=18"
  );
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "88f136e4f3msh38c30997a2db131p1c7083jsnad62f3e849ea",
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  };

  async function fetchSholk() {
    setloading(true);
    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setchapter(data);
    } catch (e) {
      console.error("Error in fetching:", e.message);
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    fetchSholk();
  }, []);

  const value = {
    loading,
    setloading,
    chapter,
    chapternum,
    setchapter,
    setchapternum,
    seturl,
    url,
    verse,
    setVerse,
    versenum,
    setversenum,
    options
  };

  return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>;
}

import React, { useContext } from "react";
import { Appcontext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const { chapter, setchapternum } = useContext(Appcontext);
  const navigate = useNavigate();

  function clickHandler(event) {
    const chapterNumber = parseInt(event.currentTarget.id, 10);
    if (chapterNumber > 0) {
      setchapternum(chapterNumber);
      navigate("/chapter");
    } else {
      console.error("Invalid chapter number clicked:", chapterNumber);
    }
  }

  return (
    <div className="w-full h-100 flex flex-col justify-center items-center mt-5 cursor-pointer ">
      <h1 className="text-4xl mb-5 text-orange-500 font-bold font-header ">Chapters</h1>
      {chapter.map((data, index) => (
        <div
          key={index}
          onClick={clickHandler}
          id={index + 1}
          className="bg-yellow-400 w-[450px] flex flex-col justify-center items-center rounded-md gap-1 mb-3 p-2"
        >
          <p className="text-slate-700 text-2xl font-semibold">{index + 1}.{data?.name}</p>
          <p className="font-head text-slate-500 text-2xl mt-2">{data?.name_meaning}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchPage;

import React, { useContext, useRef, useState } from "react";
import { Appcontext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import vid from "../assets/bg.mp4"
import logo from '../assets/krishna.png'
import logo1 from '../assets/krishna-mirror.png'


function SearchPage() {
  const { chapter, setchapternum } = useContext(Appcontext);
  const navigate = useNavigate();

  const clickHandler = (event) => {
    const chapterNumber = parseInt(event.currentTarget.id, 10);
    if (chapterNumber > 0) {
      setchapternum(chapterNumber);
      navigate("/chapter");
    } else {
      console.error("Invalid chapter number clicked:", chapterNumber);
    }
  };
  const [playingIndex, setPlayingIndex] = useState(null);
  const videoRefs = useRef([]); 
  const setVideoRef = (element, index) => {
    videoRefs.current[index] = element;
  };
  const handleVideoClick = (index) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      if (playingIndex === index) {
        videoElement.pause();
        setPlayingIndex(null);
      } else {
        videoRefs.current.forEach((video, i) => {
          if (i !== index && video) {
            video.pause();
          }
        });
        videoElement.play();
        setPlayingIndex(index);
      }
    }
  };

  const midIndex = Math.ceil(chapter.length / 2);
  const leftItems = chapter.slice(0, midIndex);
  const rightItems = chapter.slice(midIndex);

  return (
    <div className="flex w-full h-auto">
      <div className="w-1/2 flex flex-col justify-start items-start p-5">
      
        <img className='navbar-logo ml-20 mb-5' src={logo} alt="Logo" width={100} />
        
        {leftItems.map((data, index) => (
          <div
            key={data.id || index}
            onClick={clickHandler}
            id={index + 1}
            className="bg-yellow-400 z-10 w-[450px] flex flex-col justify-center items-center rounded-md gap-1 mb-3 p-2 cursor-pointer"
          >
            <p className="text-slate-700 text-2xl font-semibold">
              {index + 1}. {data?.name}
            </p>
            <p className="text-slate-500 text-sm mt-2">{data?.name_meaning}</p>
          </div>
        ))}
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center p-8 space-y-5 mt-20">
        <div className="w-full h-auto relative">
          <video
            ref={(el) => setVideoRef(el, 0)}
            className="w-full h-full object-cover cursor-pointer"
            muted
            loop
            onClick={() => handleVideoClick(0)}
          >
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full h-auto relative">
          <video
            ref={(el) => setVideoRef(el, 1)}
            className="w-full h-full object-cover cursor-pointer"
            muted
            loop
            onClick={() => handleVideoClick(1)}
          >
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full h-auto relative">
          <video
            ref={(el) => setVideoRef(el, 2)}
            className="w-full h-full object-cover cursor-pointer"
            muted
            loop
            onClick={() => handleVideoClick(2)}
          >
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full h-auto relative">
          <video
            ref={(el) => setVideoRef(el, 3)}
            className="w-full h-full object-cover cursor-pointer"
            muted
            loop
            onClick={() => handleVideoClick(3)}
          >
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        
      </div>
  

      <div className="w-1/2 flex flex-col justify-start items-end p-5">
      <img className='navbar-logo mr-20 mb-5' src={logo1} alt="Logo" width={100} />
        {rightItems.map((data, index) => (
          <div
            key={data.id || index}
            onClick={clickHandler}
            id={index + midIndex + 1}  // Adjust the id to continue serial numbering
            className="bg-yellow-400 z-10 w-[450px] flex flex-col justify-center items-center rounded-md gap-1 mb-3 p-2 cursor-pointer"
          >
            <p className="text-slate-700 text-2xl font-semibold">
              {index + midIndex + 1}. {data?.name}
            </p>
            <p className="text-slate-500 text-sm mt-2">{data?.name_meaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
// import React, { useEffect } from "react";
// import Plx from "react-plx";
import { useEffect, useState } from "react";
// import YouTube from "react-youtube";
import skullImg from "../assets/images/img/skull1.png";
import pirateVideo from "../assets/videos/PiratesOfTheCaribbeanCrowScene Short.mp4"

import "./Video.scss";

function Video() {
const [displaySkull, setDisplaySkull] = useState(true);
const [hideAll, setHideAll] = useState(false);


useEffect(() => {

  const timer = setTimeout(() => {
    setDisplaySkull(false);
    setHideAll(true);
  }, 8000);

  return ()=> {
        clearTimeout(timer);
    };
  

}, [])

  return (
        <>
        <div className="videoContainer">
          <div className={`skullContainer ${displaySkull ? "fade-out" : hideAll ? "hide" : "" }`}>
            <img className="skullImg" src={skullImg} alt="skull" />

            </div>
            {/* <div className="youtubeContent">
              <YouTube videoId="4tOchcXZmfg" />
            </div> */}
            <div className="videoIntro">
              <video className="pirateVid" src={pirateVideo} controls autoPlay />
            </div>
          </div>
        </>
    );
}
export default Video;

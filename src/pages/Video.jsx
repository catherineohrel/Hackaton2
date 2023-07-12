import { useEffect, useState, useRef } from "react";
import skullImg from "../assets/images/img/skull1.png";
import pirateVideo from "../assets/videos/PiratesOfTheCaribbeanCrowScene Short.mp4"

import "./Video.scss";

function Video() {
const [displaySkull, setDisplaySkull] = useState(true);
const [hideAll, setHideAll] = useState(false);
const [videoPlay, setVideoPlay] = useState(false);
const videoRef = useRef(null);

useEffect(() => {

  const timer = setTimeout(() => {
    setDisplaySkull(false);
    setHideAll(true);
    setVideoPlay(true);
  }, 8000);

  return ()=> {
        clearTimeout(timer);
    };
}, []);

useEffect(() => {
  if (videoPlay) {
    videoRef.current.play();
  }
}, [videoPlay]);

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
              <video className="pirateVid" ref={videoRef} src={pirateVideo} controls muted={true} />
            </div>
          </div>
        </>
    );
}
export default Video;

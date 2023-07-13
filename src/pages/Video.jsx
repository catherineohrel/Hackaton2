import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import skullImg from "../assets/images/img/skull1.png";
import skullBttnImg from "../assets/images/img/skullButton.png";
import pirateVideo from "../assets/videos/PiratesOfTheCaribbeanCrowScene Short.mp4";

import "./Video.scss";

function Video() {
  const [displaySkull, setDisplaySkull] = useState(true);
  const [hideAll, setHideAll] = useState(false);
  const [videoPlay, setVideoPlay] = useState(false);

  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplaySkull(false);
      setHideAll(true);
      setVideoPlay(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (videoPlay) {
      videoRef.current.play();
    }
  }, [videoPlay]);

  const handleClick = () => {
    navigate("../dialogs");
  };

  return (
    <>
      <div className="videoPage">
        <div className="videoContainer">
          <div
            className={`skullContainer ${
              displaySkull ? "fade-out" : hideAll ? "hide" : ""
            }`}
          >
            <img className="skullImg" src={skullImg} alt="skull" />
          </div>
          <div className="videoIntro">
            {videoPlay && (
              <video
                className="pirateVid"
                ref={videoRef}
                src={pirateVideo}
                controls
                muted={true}
              />
            )}
          </div>
        </div>
        <div className="nextBttn">
          {videoPlay && (
            <button type="button" className="skullBttn" onClick={handleClick}>
              <img
                className="skullBttnImg"
                src={skullBttnImg}
                alt="small skull"
              />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
export default Video;

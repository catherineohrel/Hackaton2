// import React, { useEffect } from "react";
// import Plx from "react-plx";
import { useEffect, useState } from "react";
import skullImg from "../assets/images/img/skull1.png";

import "./Video.scss";

function Video() {
//   const [hidden, setHidden] = useState(false);
  
//   useEffect(() => {
//     const fadeOutTimer = setTimeout(() => {
//       setHidden(true);
//     }, 3000);

//   return ()=> {
//     clearTimeout(fadeOutTimer);
//   };
// }, []);
const [displaySkull, setDisplaySkull] = useState(true);
const [hideAll, setHideAll] = useState(false);


useEffect(() => {

  const timer = setTimeout(() => {
    setDisplaySkull(false);
    setHideAll(true);
  }, 3000);

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
            <div className="youtubeContent">
            <iframe className="videoPirate" src="https://www.youtube.com/embed/4tOchcXZmfg?autoplay=1" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </>
    );
}
export default Video;



// --------------------------------------------------
// SECOND TRY

// return (
//   <div className="videoContainer">
//     <Plx className="skullContainer"
//     parallaxData={[
//       {
//         start: 0,
//         end: 700,
//         easing: "ease-in",
//         properties: [
//           {
//             startValue: 1,
//             endValue: 1.6,
//             property: "scale"
//           }
//         ]
//       }
//     ]}
//     >
//       <img className="skullImg" src={skullImg} alt="skull" />
//     </Plx>
//     <Plx className="videoContent"
//     parallaxData={[
//       {
//         start: 0,
//         end: 800,
//         properties: [
//           {
//             startValue: 1,
//             endValue: 1.18,
//             property: "scale"
//           }
//         ]
//       }
//     ]}
//     >
//       <iframe className="videoPirate" src="https://www.youtube.com/embed/4tOchcXZmfg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//     </Plx>
//   </div>
// )




// --------------------------------------------------
// FIRST TRY

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const content = document.querySelector('.videoContent');
//       if (content) {
//         content.computedStyleMap.transform = `translateY(${scrollTop}px)`;
//       }
//     };
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
  
//     return (
//     <>
//     <div className="videoContainer">
//       <div className="skullContainer">
//         <img className="skullImg" src={skullImg} alt="skull" />
//         <div className="videoContent">
//           <iframe width="560" height="315" src="https://www.youtube.com/embed/4tOchcXZmfg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//         </div>
//       </div>
//     </div>
//     </>
// );

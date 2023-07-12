import { useState } from "react";

import pirate from "../assets/images/img/pirate4.png"
// import JS_1 from "../assets/images/JS_1.png"
// import JS_2 from "../assets/images/JS_2.png"
// import JS_3 from "../assets/images/JS_3.png"
// import JS_4 from "../assets/images/JS_4.png"
// import JS_5 from "../assets/images/JS_5.png"

import "./Dialogs.scss";

function Dialogs() {
  const [jackSparrowIndex, setJackSparrowIndex] = useState(1);

  const handleNextClick = () => {
    setJackSparrowIndex(
      jackSparrowIndex <=5 ? 
      jackSparrowIndex+1
       : 
    setJackSparrowIndex(1)
      );
    console.log(jackSparrowIndex);
  };

  return (
  <>
  <div className="dialogsGlobal">
    <div className="dialogs">
      <img src={pirate} alt="pirate devant un ordinateur" />
      <div className="jackSparrowSay">
        <img src={`src/assets/images/JS_${jackSparrowIndex}.png`} alt="Jack Sparrow say to us...:'(" />
        {/* <img src={{url: JS_1}} alt="Jack Sparrow say to us...:'(" /> */}
        {/* <img src={JS_5} alt="Jack Sparrow say to us...:'(" /> */}
      </div>
      <div className="center">
        <div className="clickScreen">
          <input type="button"/>click me bitch !
        </div>
        <div className="headOfPirate">bloob</div>
      </div>
      <div className="dialogScreen">
        <button onClick={handleNextClick}>Next !!</button>
      </div>
    </div>
  </div>
  </>
  );
}

export default Dialogs;

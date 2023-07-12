import { useEffect, useState } from "react";
import "./Dialogs.scss";
import DialogBubble from "../components/General/dialogBubble";
import pirate from "../assets/images/img/pirate4.png";
// import JS_1 from "../assets/images/JS_1.png";

function Dialogs() {
  const speechJack = [
    "Hey my friend ! I don’k know if i’m drunk or not, but i met people from turfu... !",
    "I know... but we are talking in a box and you answer me...!",
    "On the desktop they have placed an animated table, if you press it apparently you have access to hidden treasures and the position of our rivals! ",
    "Ok yes, they have at home  what they call citrate de betaine and doliprane... even the names are weird !! ",
    "They says it’s sattelittes or a shit like that i don’t care, but try it !",
    "Ok big boy, so you wanna click in this fucking paint ?",
  ];

  const speechGuest = [
    "The aperitif was hard yesterday but still...",
    "It’s right... Oh fuck my head is so heavy.. ",
    "What the hell, yes i’m front of. I understand nothing... It’s like you speak to me of kolbak ! Can you ask them if they have a hangover potion ?",
    "Please bring me back some, i have to try",
    "yeah yeah...",
  ];

  const [tabSpeechJack, setTabSpeechJack] = useState([]);
  const [tabSpeechGuest, setTabSpeechGuest] = useState([]);

  useEffect(() => {
    setTabSpeechJack(speechJack);
    setTabSpeechGuest(speechGuest);
  }, []);

  return (
    <>
      <div className="dialogsGlobal">
        <img src={pirate} alt="pirate devant un ordinateur" />
        <div className="dialogs">
          <div className="jackSparrowSay">
            <DialogBubble text={tabSpeechJack} />
          </div>
          <div className="center">
            <div className="clickScreen">
              <input type="button" />
              click me bitch !
            </div>
            <div className="headOfPirate">bloob</div>
          </div>
          <div className="dialogScreen">
            <button>Next !!</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dialogs;

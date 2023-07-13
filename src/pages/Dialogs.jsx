import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dialogs.scss";
import DialogBubble from "../components/General/dialogBubble";
import pirate from "../assets/images/pirate4.png";
import JS_0 from "../assets/images/JS_1.png";
import JS_1 from "../assets/images/JS_2.png";
import JS_2 from "../assets/images/JS_3.png";
import JS_3 from "../assets/images/JS_4.png";
import JS_4 from "../assets/images/JS_5.png";

function Dialogs() {
  const speechJack = [
    "Hey my friend ! I don’k know if i’m drunk or not, but i met people from turfu... !",
    "I know... but we are talking in a box and you answer me...!",
    "On the desktop they have placed an animated table, if you press it apparently you have access to hidden treasures and the position of our rivals! ",
    "They says it’s sattelittes or a shit like that i don’t care, but try it !",
    "Apparently they have at home something called citrate de betaine, doliprane... even the names are weird !! ",
    "Ok big boy, so you wanna click in this fucking paint ?",
  ];

  const speechGuest = [
    "The aperitif was hard yesterday but still...",
    "It’s right... Oh fuck my head is so heavy.. ",
    "No wayyyy",
    "What the hell, satellites my ass. I’m front of. I understand nothing... It’s like i'm behin a kolbak... Can you ask them if they have a hangover potion ?",
    "Please bring me back some, i have to try",
    "yeah yeah...",
  ];

  const [tabSpeechJack, setTabSpeechJack] = useState([]);
  const [tabSpeechGuest, setTabSpeechGuest] = useState([]);
  const [indexMessageGuest, setIndexMessageGuest] = useState(-1);
  const [indexMessageJack, setIndexMessageJack] = useState(0);
  const [start, setStart] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [displayJack, setDisplayJack] = useState(true);
  const [displayGuest, setDisplayGuest] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    setTabSpeechJack(speechJack);
    setTabSpeechGuest(speechGuest);

    const timer = setTimeout(() => {
      setStart(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const setMessagesJack = () => {
    setIndexMessageJack((index) => {
      if (index + 1 >= tabSpeechJack.length - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  };

  const setMessagesGuest = () => {
    setIndexMessageGuest((index) => {
      if (index + 1 > tabSpeechGuest.length - 1) {
        setStart(false);
        return index;
      } else {
        console.log("tab length: " + tabSpeechGuest.length);
        console.log(index + 1);
        return index + 1;
      }
    });
  };

  const handleNav = () => {
    nav("../map");
  };

  const handleMessage = () => {
    console.log(toggle);
    console.log("start : " + start);
    setToggle(!toggle);

    if (start) {
      if (toggle && indexMessageGuest !== tabSpeechGuest.length - 1) {
        setDisplayJack(true);
        setDisplayGuest(false);
        setMessagesJack();
      } else {
        setDisplayGuest(true);
        setDisplayJack(false);
        setMessagesGuest();
      }
    }
  };

  return (
    <div className="dialogsGlobal">
      <img
        className="bg-dialog"
        src={pirate}
        alt="pirate devant un ordinateur"
      />
      <div className="dialogs">
        <div className="jackSparrowSay">
          {displayJack && (
            <DialogBubble text={tabSpeechJack[indexMessageJack]} />
          )}
          <div className="wrap-img-jack">
            <img
              src={`src/assets/images/JS_${indexMessageJack}.png`}
              alt="Jack Sparrow say to us...:'("
            />
          </div>
        </div>

        <div className="center">
          <div className="clickScreen">
            {!start && (
              <button
                onClick={handleNav}
                className="btn-ecran zoomin"
                type="button"
              >
                click me bitch !
              </button>
            )}
          </div>
          <div className="headOfPirate"></div>
        </div>

        <div className="dialogScreen">
          <div className="GuestSay">
            {displayGuest && (
              <DialogBubble text={tabSpeechGuest[indexMessageGuest]} />
            )}
          </div>
          <button onClick={handleMessage}>Next !!</button>
        </div>
      </div>
    </div>
  );
}
export default Dialogs;

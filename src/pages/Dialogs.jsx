import "./Dialogs.scss";
import pirate from "../assets/images/pirate4.png"
import JS_1 from "../assets/images/JS_1.png"

function Dialogs() {
  return (
  <>
  <div className="dialogsGlobal">
    <div className="dialogs">
      <img src={pirate} alt="pirate devant un ordinateur" />
      <div className="jackSparrowSay">
        <img src={JS_1} alt="Jack Sparrow say to us...:'(" />
      </div>
      <div className="center">
        <div className="clickScreen">
          <input type="button"/>click me bitch !
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

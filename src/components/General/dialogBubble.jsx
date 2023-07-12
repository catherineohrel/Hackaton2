import "./dialogBubble.scss";

function DialogBubble({ text }) {
  return (
    <div className="wrap-bubble">
      <div className="speech right">{text}</div>
    </div>
  );
}

export default DialogBubble;

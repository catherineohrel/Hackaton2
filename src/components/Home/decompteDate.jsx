import "./decompteDate.scss";
import PropTypes from "prop-types";

function Decompte({ date }) {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return (
    <div className="wrap-decompte">
      <div className="decompte-content">
        <span className="box d1">{day[0]}</span>
        <span className="box d2">{day[1]}</span>
        <span className="space"> - </span>
        <span className="box M1">{month[0]}</span>
        <span className="box M2">{month[1]}</span>
        <span className="space"> - </span>
        <span className="box Y1">{year[0]}</span>
        <span className="box Y2">{year[1]}</span>
        <span className="box Y3">{year[2]}</span>
        <span className="box Y4">{year[3]}</span>
      </div>
    </div>
  );
}

Decompte.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Decompte;

import "./Home.scss";
import Decompte from "../components/Home/decompteDate";

function Home() {
  return (
    <>
      <section className="home-content">
        <span className="title"> ARE YOU READY ? </span>
        <span className="destination"> DESTINATION : PORT ROYAL </span>
        <div className="date">
          <span className="date-title">DATE SELECTED</span>
          <div className="date-comp-container">
            <Decompte />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

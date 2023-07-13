import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import Decompte from "../components/Home/decompteDate";
import car from "../assets/images/objects/car.png";
import fumee from "../assets/images/objects/fumee.png";
import styled from "styled-components";

import "./Home.scss";

function Home() {
  const year = 1756;
  const month = 0; // Janvier (les mois commencent à partir de 0)
  const day = 17;

  const carBackRef = useRef(null);
  const nav = useNavigate();

  const [date, setDate] = useState(new Date());
  const [intervalId, setIntervalId] = useState(null);
  const [datePast] = useState(new Date(year, month, day));
  const [diff, setDiff] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [totDiff, setTotDiff] = useState(0);
  const [posX, setPosX] = useState(0);
  const [Accel, setAccel] = useState(1);
  const [carBackWidth, setCarBackWidth] = useState(0);
  const [affichFumee, setAffichFumee] = useState(false);
  const [affichFin, setAffichFin] = useState(false);

  /* GESTION CLICS */
  const handleMove = () => {
    const id = setInterval(decreaseDate, 20);
    setIntervalId(id);
    setAffichFumee(true);
  };

  const handleRelease = () => {
    clearInterval(intervalId); // Arrête l'intervalle
    setIntervalId(null);
    setAccel(1);
    setAffichFumee(false);
  };

  /* FONCTION DECREASE */
  const decreaseDate = () => {
    setAccel((prevAccel) => {
      prevAccel = prevAccel + 20;
      setDate((prevDate) => {
        const newDate = new Date(prevDate);
        newDate.setDate(prevDate.getDate() - prevAccel);
        if (newDate > datePast) {
          return newDate;
        } else {
          return datePast;
        }
      });
      return prevAccel;
    });
  };

  /* QUAND DECREASE, CALCUL DIFF */
  useEffect(() => {
    setDiff((prev) => {
      const diffDate =
        (date.getFullYear() - datePast.getFullYear()) * 12 +
        (date.getMonth() - datePast.getMonth());

      if (diffDate > 0) {
        console.log(diffDate);
        console.log(screenWidth);
        console.log(totDiff);
        setPosX((prevPos) => {
          const position = screenWidth - carBackWidth;
          console.log(
            "position : " +
              position +
              "prevPos " +
              prevPos +
              "carback" +
              carBackWidth
          );
          if (prevPos < position) {
            return (-diffDate * screenWidth) / totDiff + screenWidth;
          } else {
            return prevPos;
          }
        });
        return diffDate;
      } else {
        setAffichFin(true);
        const timeoutId = setTimeout(() => {
          // nav("./video");
        }, 1200);

        return () => {
          clearTimeout(timeoutId);
        };
      }
    });
  }, [date]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });

    const diff =
      (date.getFullYear() - datePast.getFullYear()) * 12 +
      (date.getMonth() - datePast.getMonth());
    setTotDiff(diff);
    setScreenWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
      });
    };
  }, []);

  useLayoutEffect(() => {
    if (carBackRef.current) {
      const { width } = carBackRef.current.getBoundingClientRect();
      setCarBackWidth(width);
    }
  }, [screenWidth, date]);

  return (
    <>
      {affichFin && <div className="circle active"></div>}
      <section className="home-content">
        <div className="container-glitch">
          <p className="glitch">
            <span aria-hidden="true">ARE YOU READY ?</span>
            ARE YOU READY ?<span aria-hidden="true">ARE YOU READY ?</span>
          </p>
        </div>
        <div className="text-content">
          <div className="dest-text">
            <span className="destination"> DESTINATION : </span>
            <span className="port">PORT ROYAL</span>
          </div>
          <div className="date">
            <div className="date-text">
              <span className="date-title">DATE ARRIVAL : </span>
              <span className="dt">17-01-1756</span>
            </div>

            <div className="date-comp-container">
              <Decompte date={date} />
            </div>
          </div>

          <div className="home-button">
            <button
              type="button"
              id="btn-start"
              className="start-button"
              onMouseDown={handleMove}
              onMouseUp={handleRelease}
            >
              {" "}
              PRESS THIS FUCK'IN ACCELERATOR
            </button>
          </div>
        </div>

        <div className="wrap-anim-car">
          <CarBack posX={posX} ref={carBackRef}>
            {affichFumee && (
              <div className="wrap-fumee">
                <img className="fumee" src={fumee} alt="fumee" />
              </div>
            )}
            <div className="wrap-car">
              <img className="car" src={car} alt="car" />
            </div>
          </CarBack>
        </div>
      </section>
    </>
  );
}

const CarBack = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
  display: flex;
  flex-direction: row;
  z-index: 1;
  left: ${(props) => props.posX}px;

  @media screen and (max-width: 845px) {
    width: 35%;
  }

  @media screen and (width > 845px) {
    width: 20%;
  }
`;

export default Home;

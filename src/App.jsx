import { Routes, Route } from "react-router-dom";
/* Components */
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Dialogs from "./pages/Dialogs";
import Nav from "./components/General/nav";
import Video from "./pages/Video";

import Map from "./pages/map";
/* SCSS */
import "./App.scss";

function App() {
  return (
    <>
      <nav className="wrap-navbar">
        <Nav />
      </nav>
      <div className="blur"></div>
      <section className="wrap-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Introduction />} />
          <Route path="/dialogs" element={<Dialogs />} />
          <Route path="/video" element={<Video />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </section>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* Components */
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Dialogs from "./pages/Dialogs";
import Nav from "./components/General/nav";

/* SCSS */
import "./App.scss";

function App() {
  return (
    <>
      {/* <nav className="navbar">
        <Nav />
      </nav> */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Introduction />} />
          <Route path="/dialogs" element={<Dialogs />} />
        </Routes>
      </section>
    </>
  );
}

export default App;

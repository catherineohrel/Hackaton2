import { Routes, Route } from "react-router-dom";
/* Components */
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Dialogs from "./pages/Dialogs";
/* SCSS */
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Introduction />} />
        <Route path="/dialogs" element={<Dialogs />} />
      </Routes>
    </>
  );
}

export default App;

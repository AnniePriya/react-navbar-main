import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Dance1, Dance2, Dance3, Dance4, CommunityForums } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dance1 />} />
        <Route path="/about" element={<Dance2 />} />
        <Route path="/services" element={<Dance3 />} />
        <Route path="/contact" element={<Dance4 />} />
        <Route path="/contact" element={<CommunityForums />} />
      </Routes>
    </div>
  );
}

export default App;

// App.jsx
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Dance1, Dance2, Dance3, Dance4, CommunityForums } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/Dance1" element={<Dance1 />} />
        <Route path="/Dance2" element={<Dance2 />} />
        <Route path="/Dance3" element={<Dance3 />} />
        <Route path="/Dance4" element={<Dance4 />} />
        <Route path="/CommunityForums" element={<CommunityForums />} />
      </Routes>
    </div>
  );
}

export default App;

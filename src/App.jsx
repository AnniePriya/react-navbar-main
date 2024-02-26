import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Dance1, Dance2, Dance3, Dance4, CommunityForums, AboutUs, Contactus, Sitemap, TellAFriend } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/dance1" element={<Dance1 />} />
        <Route path="/dance2" element={<Dance2 />} />
        <Route path="/dance3" element={<Dance3 />} />
        <Route path="/dance4" element={<Dance4 />} />
        <Route path="/communityforums" element={<CommunityForums />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/tellafriend" element={<TellAFriend />} />
      </Routes>
    </div>
  );
}

export default App;

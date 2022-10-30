import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import config from "data/config";
import pathURLs from "data/pageURLs";
import Home from "pages/Home/Home";

function App() {
  useEffect(() => {
    Aos.init({ duration: 300});
  }, []);
  console.log("FRONTEND IS LIVE 👍");
  return (
    <BrowserRouter>
      <title>{config.name}</title>
      <Routes>
        <Route path={pathURLs.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

// CUSTOM COMPONENTS
import Main from "pages/Main";

function App() {
  useEffect(() => {
    Aos.init({ duration: 750, once: true });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

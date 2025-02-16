import React, { useState } from "react";

import TopAlert from "./Components/TopAlert.jsx";
import Header from "./Components/Header.jsx";
import AsideNavBar from "./Components/AsideNavBar.jsx";
import Overlay from "./Components/Overlay.jsx";

function App() {
  const [isAsideVisible, setIsAsideVisible] = useState(false);
    const handleClick = () => {
      let body = document.querySelector("body");
      isAsideVisible ? body.classList.remove("added-overlay") : body.classList.add("added-overlay");
      setIsAsideVisible(!isAsideVisible);
    };

  return (
    <>
      <TopAlert />
      <Header clickOverLeftNav={handleClick} />
      { isAsideVisible &&  <AsideNavBar clickOverLeftNav={handleClick} /> }
      { isAsideVisible &&  <Overlay clickOverLeftNav={handleClick} /> }
    </>
  );
}

export default App;

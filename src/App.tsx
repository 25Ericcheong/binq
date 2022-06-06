import "./app.scss";

import React, { useState } from "react";

import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { LeftSideBar } from "./left-side-bar/LeftSideBar";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <div id="app">
      <Header menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <body>
        <section>
          <LeftSideBar sliderIndex={sliderIndex} />
        </section>
        <section id="owner">
          <p>BY ERIC CHEONG KAI KIT</p>
        </section>
      </body>
      <section id="footer">
        <Footer sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} />
      </section>
    </div>
  );
}

export default App;

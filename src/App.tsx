import "./app.scss";

import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { LeftSideBar } from "./left-side-bar/LeftSideBar";
import { useState } from "react";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <div id="app">
      <section id="header">
        <Header menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      </section>
      <body>
        <section id="side-bars">
          <div>
            <LeftSideBar sliderIndex={sliderIndex} />
          </div>
          <div id="owner">
            <p>BY ERIC CHEONG KAI KIT</p>
          </div>
        </section>
      </body>
      <section id="footer">
        <Footer sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} />
      </section>
    </div>
  );
}

export default App;

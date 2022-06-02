import "./app.scss";

import React, { useState } from "react";

import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <div id="app">
      <Header menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <section id="footer">
        <Footer sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} />
      </section>
    </div>
  );
}

export default App;

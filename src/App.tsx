import "./app.scss";

import React, { useState } from "react";

import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <div>
      <Header menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <Footer sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} />
    </div>
  );
}

export default App;

import "./app.scss";

import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { LeftSideBar } from "./left-side-bar/LeftSideBar";
import { useState } from "react";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  const data = [
      "/assets/image/1-kyoto-fushimi-inari.jpg",
      "/assets/image/2-tokyo-alley.jpg", "/assets/image/3-sensoji-temple.jpg", "/assets/image/4-osaka-castle.jpg", "/assets/image/5-himeji-castle.jpg"
  ]

  function renderImages() {
    return data.map((path, imageRenderIndex) => { return <img src={path} id="image-positioning" alt="These are used as background decorations" className={sliderIndex === imageRenderIndex ? 'show-image' : 'hide-image'} />
    })
  }

  return (
    <div id="app">
      {renderImages()}
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

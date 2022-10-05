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

  const imgToRender = data[sliderIndex]
  const imgNextToRender = data[sliderIndex + 1]

  const backgroundStyling = {
    // backgroundImage: `url(${imagePath})`,
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // width: '100vw',
    // height: '100vh',
  }

  return (
    <div id="app" style={backgroundStyling}>
      <img src={data[0]} id="image-positioning" alt="Supposed to render in current background" className={sliderIndex === 0 ? 'show-image' : 'hide-image'} />
      <img src={data[1]} id="image-positioning" alt="Will be rendered as next background" className={sliderIndex === 1 ? 'show-image' : 'hide-image'} />
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

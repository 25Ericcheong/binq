import "./app.scss";

import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { LeftSideBar } from "./left-side-bar/LeftSideBar";
import { useState } from "react";

function App() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  const data = [
    {
      "imagePath": "/assets/image/1-kyoto-fushimi-inari.jpg"
    },
    {
      "imagePath": "/assets/image/2-tokyo-alley.jpg"
    },
    {
      "imagePath": "/assets/image/3-sensoji-temple.jpg"
    },
    {
      "imagePath": "/assets/image/4-osaka-castle.jpg"
    },
    {
      "imagePath": "/assets/image/5-himeji-castle.jpg"
    },
  ]

  const { imagePath } = data[sliderIndex]
  const backgroundStyling = {
    // backgroundImage: `url(${imagePath})`,
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // width: '100vw',
    // height: '100vh',
  }

  return (
    <div id="app" style={backgroundStyling}>
      <img src={imagePath} id="image-positioning" alt="Supposed to render Kyoto Fushimi Inari" />
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

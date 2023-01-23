import "./App.scss";

import { BackgroundImages } from "./BackgroundImages/BackgroundImages";
import { Body } from "./Body/Body";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { STYLE_IMAGE } from "./Constants";
import { Sidebar } from "./Sidebar/Sidebar";
import { useState } from "react";

export interface ImagePositionDetails {
  index: number;
  currentPositionClass: string;
}

function App() {
  const initialImagePositions = [
    {
      index: 0,
      currentPositionClass: STYLE_IMAGE.toShow.image,
    },
    {
      index: 1,
      currentPositionClass: STYLE_IMAGE.toAnimate.hideToDown,
    },
    {
      index: 2,
      currentPositionClass: STYLE_IMAGE.toAnimate.hideToDown,
    },
    {
      index: 3,
      currentPositionClass: STYLE_IMAGE.toAnimate.hideToDown,
    },
  ];

  const [imageIndex, setImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(0);
  const [imagePositions, setImagePositions] = useState<ImagePositionDetails[]>(
    initialImagePositions
  );

  return (
    <div id="app">
      <BackgroundImages
        imageSelectedIndex={imageIndex}
        prevSelectedImageIndex={prevImageIndex}
        imagePositions={imagePositions}
        setImagePositions={setImagePositions}
        setPrevImageIndex={setPrevImageIndex}
      />
      <div id="content">
        <Header />
        <body className="order-body">
          <section className="order-body-main">
            <div className="order-sidebar mark medium-spacing">
              <Sidebar imageIndex={imageIndex} setImageIndex={setImageIndex} />
            </div>
            <div className="order-body-part mark">
              <Body />
              <Footer imageIndex={imageIndex} />
            </div>
          </section>
        </body>
      </div>
    </div>
  );
}

export default App;

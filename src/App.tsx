import "./App.scss";

import { STYLE, STYLE_IMAGE } from "./Constants";

import { BackgroundImages } from "./BackgounrdImages/BackgroundImages";
import { Header } from "./Header/Header";
import IMAGE_DATA from "./Data.json";
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

  function renderBody() {
    function renderSidebar() {
      const sideButtons = IMAGE_DATA.map((img, index) => {
        const isSelected = index === imageIndex;
        const style = !isSelected ? STYLE.notSelected : STYLE.selected;

        return (
          <p
            className={style ?? undefined}
            onClick={() => setImageIndex(index)}
          >
            {img.buttonText}
          </p>
        );
      });

      return <aside>{sideButtons}</aside>;
    }

    function renderContent() {
      return (
        <div className="order-body-part-content">
          <h1>Not just known for its Technological Advancement</h1>
        </div>
      );
    }

    function renderFooter() {
      return (
        <footer className="order-body-part-footer mark medium-spacing">
          {renderCardFooters()}
        </footer>
      );
    }

    return (
      <body className="order-body">
        <section className="order-body-main">
          <div className="order-sidebar mark medium-spacing">
            {renderSidebar()}
          </div>
          <div className="order-body-part mark">
            {renderContent()}
            {renderFooter()}
          </div>
        </section>
      </body>
    );
  }

  function renderCardFooters() {
    return IMAGE_DATA.map((img, index) => {
      const isSelected = index === imageIndex;
      const selectedStyle = !isSelected ? STYLE.notSelected : STYLE.selected;
      const footerStyle = `card-footer ${selectedStyle}`;

      return (
        <div className={footerStyle} key={index}>
          <div className="card-image-part-footer">
            <img src={img.path} alt={img.alt} />
          </div>
          <div className="card-caption-part-footer">
            <h3>{img.cardHeader}</h3>
            <p>{img.cardCaption}</p>
          </div>
        </div>
      );
    });
  }

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
        {renderBody()}
      </div>
    </div>
  );
}

export default App;

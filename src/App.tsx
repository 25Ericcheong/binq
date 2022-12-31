import "./App.scss";

import produce from "immer";
import { useState } from "react";

interface ImagePositionDetails {
  index: number;
  currentPositionClass: string;
}

function App() {
  const imageFullSizeClass = "image-fullsize";
  const showImageClass = "image-show";
  const showImageFromUpClass = "image-show-from-up";
  const showImageFromDownClass = "image-show-from-down";
  const hideImageUpClass = "image-hide-up";
  const hideImageDownClass = "image-hide-down";

  const initialImagePositions = [
    {
      index: 0,
      currentPositionClass: showImageClass,
    },
    {
      index: 1,
      currentPositionClass: hideImageDownClass,
    },
    {
      index: 2,
      currentPositionClass: hideImageDownClass,
    },
    {
      index: 3,
      currentPositionClass: hideImageDownClass,
    },
  ];

  const imageData = [
    {
      path: "/assets/image/1-mount-fuji.jpg",
      alt: "Mount Fuji is missing here",
      cardHeader: "Mount Fuji",
      cardCaption:
        "An active sacred stratovolcano which is why it is a popular tourist destination",
      buttonText: "MT. FUJI",
    },
    {
      path: "/assets/image/2-beach-tori-izu.jpg",
      alt: "Warm beach Tori has to be here",
      cardHeader: "Tori Beach",
      cardCaption:
        "In addition to being a beach with multiple water sports available, it also comes with a beautiful coastline",
      buttonText: "TORI",
    },
    {
      path: "/assets/image/3-fukuoka-river.jpg",
      alt: "Perhaps a misplaced Fukuoka river scenery here",
      cardHeader: "Fukuoka River",
      cardCaption:
        "A multi-funcitonal practical river - used for recreational activities that comes with parks and greenspaces",
      buttonText: "MT. FUJI",
    },
    {
      path: "/assets/image/4-kyoto-torii-gate.jpg",
      alt: "Possible missing Kyoto Torii gate here",
      cardHeader: "Kyoto Torii Gate",
      cardCaption:
        "Usually found at the entrace to a Shinto shrine, the Torri Gate carries significant spiritual meaning",
      buttonText: "KYOTO",
    },
  ];

  // const [menuClicked, setMenuClicked] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(0);
  const [imagePositions, setImagePositions] = useState<ImagePositionDetails[]>(
    initialImagePositions
  );

  function renderHeader() {
    return (
      <header className="medium-spacing order-header mark">
        <section>
          <p>ERIC CHEONG KAI KIT</p>
        </section>
        <section className="quarter-width order-row-between">
          <p>PLACES</p>
          <p>MAP</p>
          <a
            href="https://github.com/25Ericcheong/japan-slideshow"
            target="_blank"
            rel="noreferrer"
          >
            SOURCE CODE
          </a>
        </section>
      </header>
    );
  }

  function renderBody() {
    function renderSidebar() {
      const sideButtons = imageData.map((img, index) => {
        const isSelected = index === imageIndex;
        const style = !isSelected ? "not-selected" : "selected";

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
    return imageData.map((img, index) => {
      const isSelected = index === imageIndex;
      const selectedStyle = !isSelected ? "not-selected" : "selected";
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

  function determineImgVisbility(imageDataIndex: number): string {
    if (imageIndex === imageDataIndex) {
      const selectedImagePosition =
        imagePositions[imageIndex].currentPositionClass;

      if (selectedImagePosition === hideImageDownClass) {
        return showImageFromDownClass;
      }

      if (selectedImagePosition === hideImageUpClass) {
        return showImageFromUpClass;
      }

      return showImageClass;
    }
    return imageIndex > imageDataIndex ? hideImageUpClass : hideImageDownClass;
  }

  function updateImagePosition(imageDataIndex: number): void {
    // this should only occur on first render
    if (prevImageIndex === imageIndex) {
      return;
    }

    const hideImageUpOrDownClass =
      imageIndex > imageDataIndex ? hideImageUpClass : hideImageDownClass;

    const updatedImagePositions = produce(imagePositions, (draft) => {
      draft[prevImageIndex].currentPositionClass = hideImageUpOrDownClass;
    });
    setImagePositions(updatedImagePositions);
    setPrevImageIndex(imageIndex);
  }

  function renderBackgroundImages() {
    console.log("new ===========");
    return imageData.map((img, imageDataIndex) => {
      const imageVisbility = determineImgVisbility(imageDataIndex);
      updateImagePosition(imageDataIndex);
      const style = `${imageFullSizeClass} ${imageVisbility}`;

      console.log(imagePositions);

      return (
        <img
          className={style}
          key={imageDataIndex}
          src={img.path}
          alt={img.alt}
        />
      );
    });
  }

  return (
    <div id="app">
      {renderBackgroundImages()}
      <div id="content">
        {renderHeader()}
        {renderBody()}
      </div>
    </div>
  );
}

export default App;

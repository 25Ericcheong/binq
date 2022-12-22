import "./App.scss";

import { useState } from "react";

function App() {
  // const [menuClicked, setMenuClicked] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const imageData = [
    {
      path: "/assets/image/1-mount-fuji.jpg",
      alt: "Mount Fuji is missing here",
    },
    {
      path: "/assets/image/2-beach-tori-izu.jpg",
      alt: "Warm beach Tori has to be here",
    },
    {
      path: "/assets/image/3-fukuoka-river.jpg",
      alt: "Perhaps a misplaced Fukuoka river here",
    },
    {
      path: "/assets/image/4-kyoto-torii-gate.jpg",
      alt: "Possible missing Kyoto Torii gate here",
    },
  ];

  const showImageClass = "image-show";
  const imageFullSizeClass = "image-fullsize";
  const hideImageUpClass = "image-hide-up";
  const hideImageDownClass = "image-hide-down";

  function renderHeader() {
    return (
      <header className="medium-spacing order-header mark">
        <section>
          <p>ERIC CHEONG KAI KIT</p>
        </section>
        <section className="quarter-width order-row-between">
          <p>PLACES</p>
          <p>MAP</p>
          <p>SOURCE CODE</p>
        </section>
      </header>
    );
  }

  function renderBody() {
    function renderSidebar() {
      return (
        <aside>
          <p onClick={() => setImageIndex(0)}>MT. FUJI</p>
          <p onClick={() => setImageIndex(1)}>TORI</p>
          <p onClick={() => setImageIndex(2)}>FUKUOKA</p>
          <p onClick={() => setImageIndex(3)}>KYOTO</p>
        </aside>
      );
    }

    function renderContent() {
      return (
        <body className="order-body-part-content">
          <h1>Not just known for its Technological Advancement</h1>
        </body>
      );
    }

    function renderFooter() {
      return (
        <footer className="order-body-part-footer mark">
          <p>Temporary footer content</p>
        </footer>
      );
    }

    return (
      <body className="order-body">
        <section className="order-body-main">
          <div className="order-sidebar mark small-spacing">
            {renderSidebar()}
          </div>
          <div className="order-body-part small-spacing-no-right mark">
            {renderContent()}
            {renderFooter()}
          </div>
        </section>
      </body>
    );
  }

  function determineImgVisbility(index: number): string {
    if (imageIndex === index) {
      return showImageClass;
    }
    return imageIndex > index ? hideImageDownClass : hideImageUpClass;
  }

  function renderBackgroundImages() {
    return imageData.map((img, index) => {
      const imageVisbility = determineImgVisbility(index);
      const style = `${imageFullSizeClass} ${imageVisbility}`;

      return <img className={style} src={img.path} alt={img.alt} />;
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

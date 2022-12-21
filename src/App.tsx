import "./App.scss";

import { useState } from "react";

function App() {
  // const [menuClicked, setMenuClicked] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const imagePaths = [
    "/assets/image/1-mount-fuji.jpg",
    "/assets/image/2-beach-tori-izu.jpg",
    "/assets/image/3-fukuoka-river.jpg",
    "/assets/image/4-kyoto-torii-gate.jpg",
  ];

  // function renderImages() {
  //   return data.map((path, imageRenderIndex) => { return <img src={path} id="image-positioning" alt="Missing data should be rendered here in the background" className={sliderIndex === imageRenderIndex ? 'show-image' : 'hide-image'} />
  //   })
  // }

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
          <p onClick={() => setImageIndex(2)}>KYOTO</p>
        </aside>
      );
    }

    function renderContent() {
      return (
        <body className="order-body-part-content">
          <h1>The Colorful Streets & Alleyways of Japan</h1>
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

  const imagepath2 = `${imagePaths[3]}`;
  const imagepath1 = `${imagePaths[1]}`;
  const imagePath0 = `${imagePaths[0]}`;

  return (
    <div id="app">
      <img
        className="image-fullsize image-show"
        src={imagepath2}
        alt="City lanscape, temple or alleyways of Japan!"
      />
      <img
        className="image-fullsize image-hide-down"
        src={imagepath1}
        alt="City lanscape, temple or alleyways of Japan!"
      />
      <img
        className="image-fullsize image-hide-up"
        src={imagePath0}
        alt="City lanscape, temple or alleyways of Japan!"
      />
      <div id="content">
        {renderHeader()}
        {renderBody()}
      </div>
    </div>
  );
}

export default App;

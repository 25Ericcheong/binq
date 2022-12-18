import "./App.scss";

import { useState } from "react";

function App() {
  // const [menuClicked, setMenuClicked] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const imagePaths = [
    "/assets/image/1-tokyo-skytree.jpg",
    "/assets/image/2-tokyo-alley.jpg",
    "/assets/image/3-shibuya-crossing.jpg",
    "/assets/image/4-tokyo-bridge.jpg",
    "/assets/image/5-tokyo-city.jpg",
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
          <p onClick={() => setImageIndex(0)}>OSAKA</p>
          <p onClick={() => setImageIndex(1)}>TOKYO BRIDGE</p>
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
          <div className="order-body-part small-spacing mark">
            {renderContent()}
            {renderFooter()}
          </div>
        </section>
      </body>
    );
  }

  const imageBackground = {
    backgroundImage: `url(${imagePaths[imageIndex]})`,
  };

  return (
    <div id="app" className="image-background">
      {renderHeader()}
      {renderBody()}
    </div>
  );
}

export default App;

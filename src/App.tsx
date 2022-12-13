import "./app.scss";

function App() {
  // const [menuClicked, setMenuClicked] = useState(false);
  // const [sliderIndex, setSliderIndex] = useState(0);

  // const data = [
  //     "/assets/image/1-tokyo-skytree.jpg",
  //     "/assets/image/2-tokyo-alley.jpg", "/assets/image/3-shibuya-crossing.jpg", "/assets/image/4-tokyo-bridge.jpg", "/assets/image/5-tokyo-city.jpg"
  // ]

  // function renderImages() {
  //   return data.map((path, imageRenderIndex) => { return <img src={path} id="image-positioning" alt="Missing data should be rendered here in the background" className={sliderIndex === imageRenderIndex ? 'show-image' : 'hide-image'} />
  //   })
  // }

  function renderHeader() {
    return <header className="medium-spacing order-header">
      <section>
        <p>
          ERIC CHEONG KAI KIT
        </p>
      </section>
      <section className="quarter-width order-row">
        <p>
          PLACES
        </p>
        <p>
          MAP
        </p>
        <p>
          SOURCE CODE
        </p>
      </section>
    </header>
  }

  return (
    <div id="app">
      {renderHeader()}
      {/* {renderImages()} */}
      <body>
      </body>
    </div>
  );
}

export default App;

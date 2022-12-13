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
    return <header className="medium-spacing order-header mark">
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

  function renderBody() {

    function renderSidebar() {
      return <aside className="order-sidebar mark small-spacing">
        <p>
          JAPAN
        </p>
      </aside>
    }

    function renderContent() {
      return <header>
        <h1>The streets and alleways of Japan</h1>
      </header>
    }

    function renderFooter() {
      return <footer>
        <p>Temporary footer content</p>
      </footer>
    }

    return <body className="order-body">
      {renderSidebar()}
      <section className="order-body-part small-spacing mark">
        {renderContent()}
        {renderFooter()}
      </section>
    </body>
  }

  return (
    <div id="app">
      {renderHeader()}
      {renderBody()}
      <body>
      </body>
    </div>
  );
}

export default App;

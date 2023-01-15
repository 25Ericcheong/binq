import "../App.scss";

export const Header = () => {
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
};

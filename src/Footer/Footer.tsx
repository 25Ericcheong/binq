import "../App.scss";
import "./Footer.scss";

import IMAGE_DATA from "../Data.json";
import { STYLE } from "../Constants";

interface Props {
  imageIndex: number;
}

export const Footer = ({ imageIndex }: Props) => {
  function renderCards() {
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

  function renderButton() {
    return (
      <button
        id="button-footer"
        onClick={() => {
          console.log("something");
        }}
      >
        <div id="caption">
          <p>HIDE</p>
        </div>
      </button>
    );
  }

  return (
    <footer className="order-body-part-footer mark medium-spacing">
      {renderButton()}
      {renderCards()}
    </footer>
  );
};

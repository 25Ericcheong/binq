import "../App.scss";
import "./Footer.scss";

import { HiOutlineArrowCircleRight } from "react-icons/hi";
import IMAGE_DATA from "../Data.json";
import { IconContext } from "react-icons/lib/esm/iconContext";
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
      <IconContext.Provider value={{ size: "2em" }}>
        <div className="icon-footer">
          <HiOutlineArrowCircleRight />
        </div>
      </IconContext.Provider>
    );
  }

  return (
    <footer className="order-body-part-footer mark medium-spacing">
      {renderCards()}
      {renderButton()}
    </footer>
  );
};

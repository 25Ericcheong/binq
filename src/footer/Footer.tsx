import "./footer.scss";

import { DiCreativecommons, DiGithub } from "react-icons/di";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { IconContext } from "react-icons";
import { ImageIndex } from "../enums/ImageIndex";

interface Props {
  sliderIndex: number;
  setSliderIndex: (e: number) => void;
}

export const Footer: React.FunctionComponent<Props> = ({
  sliderIndex,
  setSliderIndex,
}) => {
  const arrowIconSize = { size: "1.4em" };
  const otherIconSize = { size: "1.7em" };

  function nextImage() {
    if (sliderIndex === ImageIndex.Max) {
      return;
    }
    setSliderIndex(sliderIndex + 1);
  }

  function prevImage() {
    if (sliderIndex === ImageIndex.Min) {
      return;
    }
    setSliderIndex(sliderIndex - 1);
  }

  return (
    <div className="footer-body">
      <div className="first-half">
        <i>
          <button
            onClick={() => {
              prevImage();
            }}
          >
            <IconContext.Provider value={arrowIconSize}>
              <FaChevronUp />
            </IconContext.Provider>
          </button>
          <button
            onClick={() => {
              nextImage();
            }}
          >
            <IconContext.Provider value={arrowIconSize}>
              <FaChevronDown />
            </IconContext.Provider>
          </button>
        </i>
        <div>
          <button>MORE ABOUT JAPAN</button>
        </div>
      </div>
      <div className="second-half">
        <IconContext.Provider value={otherIconSize}>
          <DiGithub />
        </IconContext.Provider>
        <IconContext.Provider value={otherIconSize}>
          <DiCreativecommons />
        </IconContext.Provider>
      </div>
    </div>
  );
};

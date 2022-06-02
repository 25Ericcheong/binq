import "./footer.scss";

import { DiCreativecommons, DiGithub } from "react-icons/di";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { IconContext } from "react-icons";

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

  return (
    <div className="footer-body">
      <div className="first-half">
        <i>
          <IconContext.Provider value={arrowIconSize}>
            <FaChevronUp />
          </IconContext.Provider>
          <IconContext.Provider value={arrowIconSize}>
            <FaChevronDown />
          </IconContext.Provider>
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

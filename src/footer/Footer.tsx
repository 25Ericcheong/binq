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
  const iconSize = { size: "1.5em" };

  return (
    <section className="footer">
      <div className="first-half">
        <i>
          <IconContext.Provider value={iconSize}>
            <FaChevronUp />
          </IconContext.Provider>
          <IconContext.Provider value={iconSize}>
            <FaChevronDown />
          </IconContext.Provider>
        </i>
        <button>MORE ABOUT JAPAN</button>
      </div>
      <div className="second-half">
        <IconContext.Provider value={iconSize}>
          <DiGithub />
        </IconContext.Provider>
        <IconContext.Provider value={iconSize}>
          <DiCreativecommons />
        </IconContext.Provider>
      </div>
    </section>
  );
};

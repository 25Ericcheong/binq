import "./header.scss";

import { BiAlignRight } from "react-icons/bi";
import { IconContext } from "react-icons";

interface Props {
  menuClicked: boolean;
  setMenuClicked: (e: boolean) => void;
}

export const Header: React.FunctionComponent<Props> = ({
  menuClicked,
  setMenuClicked,
}) => {
  return (
    <div className="header">
      <div>
        <h1>JAPAN SPOTS</h1>
        <IconContext.Provider value={{ size: "1.5em" }}>
          <BiAlignRight />
        </IconContext.Provider>
      </div>
    </div>
  );
};

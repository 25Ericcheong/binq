import "./header.scss";

import { BiAlignRight } from "react-icons/bi";
import { IconContext } from "react-icons";

interface HeaderProps {
  menuClicked: boolean;
  setMenuClicked: (e: boolean) => void;
}

export const Header: React.VFC<HeaderProps> = ({
  menuClicked,
  setMenuClicked,
}) => {
  return (
    <section className="header">
      <div>
        <h1>JAPAN SPOTS</h1>
        <BiAlignRight />
      </div>
    </section>
  );
};

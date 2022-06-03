import "./left-side-bar.scss";

interface Props {
  sliderIndex: number;
}

export const LeftSideBar: React.FunctionComponent<Props> = ({
  sliderIndex,
}) => {
  const dynamicBarStyling = {
    height: `${(sliderIndex / 5) * 100}%`,
    backgroundColor: "black",
  };

  return (
    <div className="left-side-bar-body">
      {`0${sliderIndex}`}
      <div id="container">
        <div id="dynamic-bar" style={dynamicBarStyling}></div>
      </div>
      05
    </div>
  );
};

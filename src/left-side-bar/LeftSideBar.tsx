interface Props {
  sliderIndex: number;
}

export const LeftSideBar: React.FunctionComponent<Props> = ({
  sliderIndex,
}) => {
  return <>{`0${sliderIndex}`}</>;
};

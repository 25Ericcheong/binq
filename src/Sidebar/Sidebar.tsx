import IMAGE_DATA from "../Data.json";
import { STYLE } from "../Constants";

interface Props {
  imageIndex: number;
  setImageIndex: (e: number) => void;
}

export const Sidebar = ({ imageIndex, setImageIndex }: Props) => {
  const sideButtons = IMAGE_DATA.map((img, index) => {
    const isSelected = index === imageIndex;
    const style = !isSelected ? STYLE.notSelected : STYLE.selected;

    return (
      <p className={style ?? undefined} onClick={() => setImageIndex(index)}>
        {img.buttonText}
      </p>
    );
  });

  return <aside>{sideButtons}</aside>;
};

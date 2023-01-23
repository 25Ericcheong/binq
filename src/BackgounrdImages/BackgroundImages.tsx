import "../App.scss";

import IMAGE_DATA from "../Data.json";
import { ImagePositionDetails } from "../App";
import { STYLE_IMAGE } from "./../Constants";
import produce from "immer";

interface Props {
  imageSelectedIndex: number;
  prevSelectedImageIndex: number;
  imagePositions: ImagePositionDetails[];
  setImagePositions: (e: ImagePositionDetails[]) => void;
  setPrevImageIndex: (e: number) => void;
}

export const BackgroundImages = ({
  imageSelectedIndex,
  prevSelectedImageIndex,
  imagePositions,
  setImagePositions,
  setPrevImageIndex,
}: Props): JSX.Element => {
  function updateImagePosition(): void {
    // this should only occur on first render
    if (prevSelectedImageIndex === imageSelectedIndex) {
      return;
    }

    let indexDiff = Math.abs(imageSelectedIndex - prevSelectedImageIndex);
    const isIndexDiffLargerThanOne = indexDiff > 1;

    const updatedImagePositions = produce(imagePositions, (draft) => {
      if (isIndexDiffLargerThanOne) {
        for (let i = 0; i < draft.length; i++) {
          const isIndexCurrentSmaller =
            imageSelectedIndex < prevSelectedImageIndex;
          const isIndexSelectedLarger = isIndexCurrentSmaller
            ? imageSelectedIndex >= i
            : imageSelectedIndex > i;
          draft[i].currentPositionClass = isIndexSelectedLarger
            ? STYLE_IMAGE.toAnimate.hideToUp
            : STYLE_IMAGE.toAnimate.hideToDown;
        }
      } else {
        const isCurrentIndexLarger =
          imageSelectedIndex > prevSelectedImageIndex;
        const hideImageUpOrDownClass = isCurrentIndexLarger
          ? STYLE_IMAGE.toAnimate.hideToUp
          : STYLE_IMAGE.toAnimate.hideToDown;
        draft[prevSelectedImageIndex].currentPositionClass =
          hideImageUpOrDownClass;
      }
    });

    setImagePositions(updatedImagePositions);
    setPrevImageIndex(imageSelectedIndex);
  }

  function determineImageAnimation(imageDataIndex: number): string {
    if (imageSelectedIndex === imageDataIndex) {
      const selectedImagePosition =
        imagePositions[imageSelectedIndex].currentPositionClass;

      if (selectedImagePosition === STYLE_IMAGE.toAnimate.hideToDown) {
        return STYLE_IMAGE.toAnimate.showFromDown;
      }

      if (selectedImagePosition === STYLE_IMAGE.toAnimate.hideToUp) {
        return STYLE_IMAGE.toAnimate.showFromUp;
      }

      return STYLE_IMAGE.toShow.image;
    }
    return imageSelectedIndex > imageDataIndex
      ? STYLE_IMAGE.toAnimate.hideToUp
      : STYLE_IMAGE.toAnimate.hideToDown;
  }

  function renderBackgroundImages() {
    updateImagePosition();
    return IMAGE_DATA.map((img, imageDataIndex) => {
      const imageAnimation = determineImageAnimation(imageDataIndex);
      const style = `${STYLE_IMAGE.toShow.fullSize} ${imageAnimation}`;
      return (
        <img
          className={style}
          key={imageDataIndex}
          src={img.path}
          alt={img.alt}
        />
      );
    });
  }

  return <>{renderBackgroundImages()}</>;
};

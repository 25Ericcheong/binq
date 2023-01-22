import "../App.scss";

import * as imageData from "../Data.json";

import { STYLE, STYLE_IMAGE } from "./../Constants";

import { ImagePositionDetails } from "../App";
import produce from "immer";

interface Props {
  imageIndex: number;
  prevImageIndex: number;
  imagePositions: ImagePositionDetails[];
  setImagePositions: (e: ImagePositionDetails[]) => void;
  setPrevImageIndex: (e: number) => void;
}

export const BackgroundImages = ({
  imageIndex,
  prevImageIndex,
  imagePositions,
  setImagePositions,
  setPrevImageIndex,
}: Props) => {
  function updateImagePosition(): void {
    // this should only occur on first render
    if (prevImageIndex === imageIndex) {
      return;
    }

    let indexDiff = Math.abs(imageIndex - prevImageIndex);
    const isIndexDiffLargerThanOne = indexDiff > 1;

    const updatedImagePositions = produce(imagePositions, (draft) => {
      if (isIndexDiffLargerThanOne) {
        for (let i = 0; i < draft.length; i++) {
          const isIndexCurrentSmaller = imageIndex < prevImageIndex;
          const isIndexSelectedLarger = isIndexCurrentSmaller
            ? imageIndex >= i
            : imageIndex > i;
          const hideImageUpOrDownClass = isIndexSelectedLarger
            ? STYLE_IMAGE.toAnimate.hideToUp
            : STYLE_IMAGE.toAnimate.hideToDown;
          draft[i].currentPositionClass = hideImageUpOrDownClass;
        }
      } else {
        const isCurrentIndexLarger = imageIndex > prevImageIndex;
        const hideImageUpOrDownClass = isCurrentIndexLarger
          ? STYLE_IMAGE.toAnimate.hideToUp
          : STYLE_IMAGE.toAnimate.hideToDown;
        draft[prevImageIndex].currentPositionClass = hideImageUpOrDownClass;
      }
    });

    setImagePositions(updatedImagePositions);
    setPrevImageIndex(imageIndex);
  }

  function renderBackgroundImages() {
    updateImagePosition();
    return imageData.map((img, imageDataIndex) => {
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

  function determineImageAnimation(imageDataIndex: number): string {
    if (imageIndex === imageDataIndex) {
      const selectedImagePosition =
        imagePositions[imageIndex].currentPositionClass;

      if (selectedImagePosition === STYLE_IMAGE.toAnimate.hideToDown) {
        return STYLE_IMAGE.toAnimate.showFromDown;
      }

      if (selectedImagePosition === STYLE_IMAGE.toAnimate.hideToUp) {
        return STYLE_IMAGE.toAnimate.showFromUp;
      }

      return STYLE_IMAGE.toShow.image;
    }
    return imageIndex > imageDataIndex
      ? STYLE_IMAGE.toAnimate.hideToUp
      : STYLE_IMAGE.toAnimate.hideToDown;
  }

  return renderBackgroundImages();
};

// used to get image url of files to be used in multiple components
export function getImageUrl(
  imageName: string,
  outerDir: string,
  innerDir?: string,
  isWebp: boolean = false
) {
  let extension = "jpg";
  if (isWebp) {
    extension = "webp";
  }

  if (innerDir === undefined) {
    return new URL(
      `/src/assets/images/${outerDir}/${imageName}.${extension}`,
      import.meta.url
    ).href;
  }

  return new URL(
    `/src/assets/images/${outerDir}/${innerDir}/${imageName}.${extension}`,
    import.meta.url
  ).href;
}

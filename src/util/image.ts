// used to get image url of files to be used in multiple components
export function getImageUrl(
  imageName: string,
  outerDir: string,
  innerDir?: string
) {
  if (innerDir === undefined) {
    return new URL(
      `/src/assets/images/${outerDir}/${imageName}.jpg`,
      import.meta.url
    ).href;
  }

  return new URL(
    `/src/assets/images/${outerDir}/${innerDir}/${imageName}.jpg`,
    import.meta.url
  ).href;
}

export function getImageUrlForMenu(imageName: string, outerDir: string) {
  return new URL(
    `/src/assets/images/menu/${outerDir}/${imageName}.jpg`,
    import.meta.url
  ).href;
}

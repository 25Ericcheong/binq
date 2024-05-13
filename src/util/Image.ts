export function GetImageUrl(
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

export function GetImageUrlForMenu(imagePath: string) {
  return new URL(imagePath, import.meta.url).href;
}

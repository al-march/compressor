import { Image } from "../models/image.model";

function fileListToImages(list: FileList) {
  const images: Image[] = [];

  for (let i = 0; i < list.length; i++) {
    const file = list[i];
    if (file instanceof File) {
      const image = new Image(file);
      images.push(image);
    }
  }

  return images;
}

export const imageService = Object.assign({}, {
  fileListToImages
})
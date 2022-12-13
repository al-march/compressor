import { CompressImage } from "@app/models";

function fileListToImages(list: FileList) {
  const images: CompressImage[] = [];

  for (let i = 0; i < list.length; i++) {
    const file = list[i];
    if (file instanceof File) {
      const image = new CompressImage(file);
      images.push(image);
    }
  }

  return images;
}

export const imageService = Object.assign({}, {
  fileListToImages
})
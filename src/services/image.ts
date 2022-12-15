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

function sliceExt(fileName: string) {
  const reversed = fileName.split('').reverse();
  const dotIndex = reversed.findIndex(w => w === '.');
  const ext = reversed.splice(0, dotIndex + 1);
  return {
    name: reversed.reverse().join(''),
    ext: ext.reverse().join(''),
  }
}

function addPrefixAndSuffix(title: string, prefix = '', suffix = '') {
  const { name, ext } = sliceExt(title);
  return `${prefix}${name}${suffix}${ext}`;
}

export const imageService = Object.assign({}, {
  fileListToImages,
  addPrefixAndSuffix,
  sliceExt
})
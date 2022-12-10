import Compressor from 'compressorjs';

export interface CompressConfig {
  quality: number;
  width?: number;
}

const image = (file: File, config: CompressConfig): Promise<File> => {
  return new Promise(res => {
    new Compressor(file, {
      quality: config.quality,
      width: config.width,

      success: (file: File | Blob) => {
        let compressedImage: File;
        if (file instanceof Blob) {
          compressedImage = new File([file], file.name);
        } else {
          compressedImage = file;
        }

        res(compressedImage);
      }
    });
  })
}

export const compressorService = Object.assign({}, {
  image
});

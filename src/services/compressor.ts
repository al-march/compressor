import Compressor from 'compressorjs';

export type CompressConfig = Compressor.Options;

const image = (file: File, config: CompressConfig): Promise<File> => {
  return new Promise((res, rej) => {
    new Compressor(file, {
      ...config,
      success: (file: File | Blob) => {
        let compressedImage: File;
        if (file instanceof Blob) {
          compressedImage = new File([file], file.name);
        } else {
          compressedImage = file;
        }

        res(compressedImage);
      },
      error: rej,
    });
  })
}

export const compressorService = Object.assign({}, {
  image
});

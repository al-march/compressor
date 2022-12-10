import { BlobWriter, ZipWriter } from '@zip.js/zip.js';

async function file(file: File) {
  const anchor = document.createElement('a');
  anchor.href = URL.createObjectURL(file);
  anchor.download = file.name;

  document.body.append(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

async function zip(files: File[]) {
  /** @See https://gildas-lormeau.github.io/zip.js/api/index.html */
  const zipWriter = new ZipWriter(new BlobWriter('application/zip'));
  await Promise.all(files.map(file => zipWriter.add(file.name, file.stream())));
  const blob = await zipWriter.close();
  return file(new File([blob], 'images.zip'));
}

export const downloadService = Object.assign({}, {file, zip})
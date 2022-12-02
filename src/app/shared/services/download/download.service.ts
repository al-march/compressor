import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BlobWriter, ZipWriter } from '@zip.js/zip.js';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(
    @Inject(DOCUMENT) private doc: Document
  ) { }

  async file(file: File) {
    const anchor = this.doc.createElement('a');
    anchor.href = URL.createObjectURL(file);
    anchor.download = file.name;

    this.doc.body.append(anchor);
    anchor.click();
    this.doc.body.removeChild(anchor);
  }

  async zip(files: File[]) {
    /** @See https://gildas-lormeau.github.io/zip.js/api/index.html */

    const zipWriter = new ZipWriter(new BlobWriter('application/zip'));
    await Promise.all(files.map(file => zipWriter.add(file.name, file.stream())));
    const blob = await zipWriter.close();
    return this.file(new File([blob], 'images.zip'));
  }
}

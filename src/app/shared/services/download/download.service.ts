import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Image } from 'models/image';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(
    @Inject(DOCUMENT) private doc: Document
  ) { }

  async image(file: File) {
    const image = new Image(file);
    await image.createSrc();

    const anchor = this.doc.createElement('a');
    anchor.href = image.src || '';
    anchor.download = image.file.name;

    this.doc.body.append(anchor);
    anchor.click();
    this.doc.body.removeChild(anchor);
  }
}

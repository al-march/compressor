import { BehaviorSubject } from 'rxjs';

export class Image {
  src?: string;
  preview?: File;
  previewSrc?: string;

  compressing$ = new BehaviorSubject(false);

  constructor(
    public file: File
  ) {
  }

  async addPreviewSrc() {
    if (this.preview) {
      this.previewSrc = await this.createSrc(this.preview);
      return;
    }
    return new Error('preview not found');
  }

  private createSrc(file: File): Promise<string> {
    return new Promise((res, rej) => {
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = (event) => {
        const src = event.target?.result;
        if (src) {
          res(String(src));
        } else {
          rej('cannot parse image');
        }
      };
    });
  }

  startCompress() {
    this.compressing$.next(true);
  }

  endCompress() {
    this.compressing$.next(false);
  }
}

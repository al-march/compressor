import { BehaviorSubject } from 'rxjs';

export class Image {
  src?: string;

  compressing$ = new BehaviorSubject(false);

  constructor(
    public file: File
  ) {
  }

  createSrc(): Promise<string> {
    return new Promise((res, rej) => {
      const fr = new FileReader();
      fr.readAsDataURL(this.file);
      fr.onload = (event) => {
        const src = event.target?.result;
        if (src) {
          this.src = String(src);
          res(this.src);
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

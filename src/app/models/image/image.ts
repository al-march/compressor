export class Image {
  src?: string;

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
}

export class CompressImage {

  initial: File;
  compress?: File;

  previewSrc?: string;

  get percentDif() {
    if (this.compress) {
      return Math.ceil(100 - ((100 / this.initial.size) * (this.compress.size)));
    }
    return 0;
  }

  constructor(
    file: File
  ) {
    this.initial = file;
  }

  async createPreviewSrc() {
    if (this.compress) {
      this.previewSrc = await createSrc(this.compress);
    }

    return this.previewSrc;
  }
}

function createSrc(file: File): Promise<string> {
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

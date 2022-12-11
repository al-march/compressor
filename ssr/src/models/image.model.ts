export class Image {
  src?: string;
  compressed?: File;

  preview?: File;
  previewSrc?: string;

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

  async addImageSrc() {
    this.src = await this.createSrc(this.file);
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
}

export class CompressImage {

  initial: File;
  compress?: File;

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
}
import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Image } from 'models/image';
import { ImageListComponent } from 'components/image-list';
import { ImageCardComponent } from 'components/image-card';
import Compressor from 'compressorjs';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ImageListComponent,
    ImageCardComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  images: Image[] = [];
  compressedImages: Image[] = [];

  constructor(
    private ref: ChangeDetectorRef
  ) {}

  async onInputChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    const files = input.files;
    if (files) {
      this.images = this.fileListToImages(files);
      this.compressedImages = [];
    }
  }

  fileListToImages(list: FileList) {
    const images: Image[] = [];

    for (let i = 0; i < list.length; i++) {
      const file = list[i];
      if (file instanceof File) {
        images.push(new Image(file));
      }
    }

    return images;
  }

  filesToImages(files: File[]) {
    return files.map(file => new Image(file));
  }

  compress() {
    const output: File[] = [];

    this.images.forEach((image, index, initial) => {
      new Compressor(image.file, {
        quality: 0.4,

        success: (file: File | Blob) => {
          if (file instanceof Blob) {
            output[index] = new File([file], image.file.name);
          } else {
            output[index] = file;
          }

          if (output.length === initial.length) {
            this.compressedImages = this.filesToImages(output);
            this.ref.detectChanges();
          }
        }
      });
    });
  }
}

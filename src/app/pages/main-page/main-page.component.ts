import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule,
    ImageListComponent,
    ImageCardComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  images: Image[] = [];
  compressed: Map<Image, File> = new Map();

  constructor(
    private ref: ChangeDetectorRef
  ) {}

  onInputChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    const files = input.files;
    if (files) {
      this.images = this.fileListToImages(files);
      this.compress();
    }
  }

  reset() {
    this.images = [];
    this.compressed.clear();
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
    this.images.forEach((image, index) => {
      new Compressor(image.file, {
        quality: 0.4,

        success: (file: File | Blob) => {
          let compressedImage: File;
          if (file instanceof Blob) {
            compressedImage = new File([file], image.file.name);
          } else {
            compressedImage = file;
          }

          this.compressed.set(this.images[index], compressedImage);
          this.ref.detectChanges();
        }
      });
    });
  }

  removeImage(image: Image) {
    this.images = this.images.filter(img => img !== image);
  }
}

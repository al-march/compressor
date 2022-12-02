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
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { CompressConfigComponent } from 'components/compress/compress-config';
import { CompressConfig } from 'models/compress';
import { DownloadService } from 'services/download';


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
    ImageCardComponent,
    MatSelectModule,
    ReactiveFormsModule,
    CompressConfigComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  images: Image[] = [];
  compressed: Map<Image, File> = new Map();
  config = new CompressConfig();

  constructor(
    private ref: ChangeDetectorRef,
    private download: DownloadService
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
        quality: this.config.quality,
        mimeType: this.config.mimeType,
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

  configChange(config: CompressConfig) {
    this.config = config;
    this.compress();
  }

  downloadOne(file: File) {
    return this.download.file(file);
  }

  downloadAll() {
    const files = [...this.compressed.values()];
    return this.download.zip(files);
  }
}

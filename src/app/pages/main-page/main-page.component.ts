import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule, KeyValue } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';

import { Image } from 'models/image';
import { ImageListComponent } from 'components/image-list';
import { ImageCardComponent } from 'components/image-card';
import { CompressStatsComponent } from 'components/compress/compress-stats';
import { CompressConfigComponent } from 'components/compress/compress-config';

import { CompressConfig } from 'models/compress';
import { DownloadService } from 'services/download';
import Compressor from 'compressorjs';
import { MatExpansionModule } from '@angular/material/expansion';
import { DropZoneDirective } from 'directives/drop-zone';
import { ListAnimation } from 'shared/animations/list.animation';
import { trigger } from '@angular/animations';

export type ImageCompressedMap = Map<Image, File | undefined>;

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
    CompressConfigComponent,
    CompressStatsComponent,
    MatExpansionModule,
    DropZoneDirective
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('listAnimation', ListAnimation)
  ]
})
export class MainPageComponent {

  images: ImageCompressedMap = new Map();
  config = new CompressConfig();
  expandSettings = false;

  animationDisabled = false;

  constructor(
    private ref: ChangeDetectorRef,
    private download: DownloadService
  ) {}

  onInputChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    const files = input.files;

    if (files) {
      this.processFileList(files);
    }

    input.value = '';
  }

  processFileList(list: FileList) {
    this.animationDisabled = true;
    this.images.clear();
    this.images = this.fileListToImages(list);
    this.compress();

    setTimeout(() => {
      this.animationDisabled = false;
    })
  }

  reset() {
    this.images.clear();
    this.imagesForceUpdate();
  }


  fileListToImages(list: FileList) {
    const images: ImageCompressedMap = new Map();

    for (let i = 0; i < list.length; i++) {
      const file = list[i];
      if (file instanceof File) {
        const image = new Image(file);
        images.set(image, undefined);
      }
    }

    return images;
  }

  filesToImages(files: File[]) {
    return files.map(file => new Image(file));
  }

  compress() {
    [...this.images.keys()].forEach((image) => {
      image.startCompress();

      /* Create preview for performance */
      if (!image.preview) {
        new Compressor(image.file, {
          quality: .6,
          width: 440,
          success(file: File | Blob) {
            let compressedImage: File;
            if (file instanceof Blob) {
              compressedImage = new File([file], image.file.name);
            } else {
              compressedImage = file;
            }

            image.preview = compressedImage;
          }
        });
      }

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

          this.images.set(image, compressedImage);
          image.endCompress();
          this.imagesForceUpdate();
          this.ref.detectChanges();
        }
      });
    });
  }

  removeImage(image: Image) {
    this.images.delete(image);
    this.imagesForceUpdate();
  }

  configChange(config: CompressConfig) {
    this.config = config;
    this.compress();
  }

  downloadOne(file: File) {
    return this.download.file(file);
  }

  downloadAll() {
    const files = [...this.images.values()]
      .filter(Boolean) as File[];
    return this.download.zip(files);
  }

  imagesForceUpdate() {
    this.images = new Map(this.images);
    this.ref.detectChanges();
  }

  trackByImageKeyValue(_: number, image: KeyValue<Image, File | undefined>) {
    return image.key;
  };

  toggleSettings() {
    this.expandSettings = !this.expandSettings;
  }
}

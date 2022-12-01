import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Image } from 'models/image';
import { ImageListComponent } from 'components/image-list';
import { ImageCardComponent } from 'components/image-card';


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

  async onInputChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    const files = input.files;
    if (files) {
      this.images = await this.fileListToImages(files);
    }
  }

  async fileListToImages(list: FileList) {
    const images: Image[] = [];

    for (let i = 0; i < list.length; i++) {
      const file = list[i];
      if (file instanceof File) {
        images.push(new Image(file));
      }
    }

    return images;
  }
}

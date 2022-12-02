import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  EventEmitter, inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Image } from 'models/image';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const changeDetectorRef = () => inject(ChangeDetectorRef);

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageCardComponent implements OnChanges {
  @Input()
  image?: Image;

  @Input()
  compressedImage?: File;

  @Output()
  remove = new EventEmitter<Image>();

  diff = 0;

  ref = changeDetectorRef();

  async ngOnChanges(changes: SimpleChanges) {
    if (this.image) {
      await this.image.createSrc();
      this.ref.detectChanges();
    }

    console.log(changes);
    if (this.compressedImage && this.image) {
      const percent = 100 - ((100 / this.image.file.size) * this.compressedImage.size);
      this.diff = Math.floor(percent);
      this.ref.detectChanges()
    }
  }

  onRemove() {
    this.remove.emit(this.image);
  }
}

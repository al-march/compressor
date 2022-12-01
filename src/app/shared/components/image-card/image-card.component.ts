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

const changeDetectorRef = () => inject(ChangeDetectorRef);

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageCardComponent implements OnChanges {
  @Input()
  image?: Image;

  @Output()
  remove = new EventEmitter<Image>();

  ref = changeDetectorRef();

  async ngOnChanges(changes: SimpleChanges) {
    if (this.image) {
      await this.image.createSrc();
      this.ref.detectChanges();
    }
  }

  onRemove() {
    this.remove.emit(this.image);
  }
}

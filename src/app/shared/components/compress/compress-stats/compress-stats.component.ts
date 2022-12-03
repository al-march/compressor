import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertPipe } from 'pipes/convert';
import { ImageCompressedMap } from 'pages/main-page';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

interface Stats {
  initialSize: number;
  compressedSize: number;
  percent: number;
}

@Component({
  selector: 'app-compress-stats',
  standalone: true,
  imports: [CommonModule, ConvertPipe, MatProgressSpinnerModule],
  templateUrl: './compress-stats.component.html',
  styleUrls: ['./compress-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompressStatsComponent implements OnChanges {
  @Input()
  compressed: ImageCompressedMap = new Map();

  stats?: Stats;

  ref = inject(ChangeDetectorRef);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['compressed'].currentValue) {
      this.parseStats();
    }
  }

  parseStats() {
    const stats: Stats = {
      initialSize: 0,
      compressedSize: 0,
      percent: 0,
    };
    stats.initialSize = [...this.compressed.keys()].reduce((acc, image) => {
      return acc + image.file.size;
    }, 0);

    stats.compressedSize = [...this.compressed.values()].reduce((acc, file) => {
      return acc + (file?.size || 0);
    }, 0);

    stats.percent = 100 - Math.round((stats.compressedSize / stats.initialSize) * 100);

    this.stats = stats;
  }

}

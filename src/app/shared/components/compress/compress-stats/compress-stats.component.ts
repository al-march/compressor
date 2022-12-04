import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertPipe } from 'pipes/convert';
import { ImageCompressedMap } from 'pages/main-page';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { debounceTime, Subject, takeUntil } from 'rxjs';

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
export class CompressStatsComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  compressed: ImageCompressedMap = new Map();

  stats$ = new Subject<Stats | undefined>();
  stats?: Stats;

  destroy$ = new Subject();

  constructor(
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.stats$.pipe(
      debounceTime(300),
      takeUntil(this.destroy$)
    ).subscribe(stats => {
      this.stats = stats;
      this.ref.detectChanges();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['compressed'].currentValue) {
      if (this.isCompressedAll()) {
        this.parseStats();
      } else {
        this.stats$.next(undefined);
      }
    }
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
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
    this.stats$.next(stats);
  }

  isCompressedAll() {
    return this.compressed.size > 0 && [...this.compressed.values()].every(v => !!v);
  }
}

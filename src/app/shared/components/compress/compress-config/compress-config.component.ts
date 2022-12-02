import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Subject, takeUntil } from 'rxjs';
import { CompressConfig } from 'models/compress';

@Component({
  selector: 'app-compress-config',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './compress-config.component.html',
  styleUrls: ['./compress-config.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompressConfigComponent implements OnInit, OnDestroy {

  @Input()
  config = new CompressConfig();

  @Output()
  change = new EventEmitter<CompressConfig>();

  form = this.fb.group<CompressConfig>({
    quality: this.config.quality,
    mimeType: this.config.mimeType,
  });

  destroy$ = new Subject();

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.emit());
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  emit() {
    const config = new CompressConfig(
      this.form.value.quality || undefined,
      this.form.value.mimeType || undefined,
    );
    this.change.emit(config);
  }

}

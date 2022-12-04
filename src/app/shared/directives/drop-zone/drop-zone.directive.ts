import { ChangeDetectorRef, Directive, EventEmitter, HostListener, inject, Output } from '@angular/core';

@Directive({
  selector: '[appDropZone]',
  exportAs: 'dropZone',
  standalone: true
})
export class DropZoneDirective {

  @Output()
  enter = new EventEmitter;

  @Output()
  leave = new EventEmitter;

  @Output()
  enteredChange = new EventEmitter<boolean>;

  @Output()
  dropFiles = new EventEmitter<FileList>;

  isEntered = false;

  ref = inject(ChangeDetectorRef);

  @HostListener('dragenter', ['$event'])
  onDragEnter(event: DragEvent) {
    event.preventDefault();
    setTimeout(() => {
      this.isEntered = true;
      this.enterEmit()
      this.ref.detectChanges();
    })
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isEntered = false;
    this.leaveEmit();
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDropFiles(event: DragEvent) {
    console.log(event);
    event.preventDefault();
    this.isEntered = false;
    this.enteredChange.emit(this.isEntered);

    const dt = event.dataTransfer;
    if (dt) {
      this.dropFiles.emit(dt.files);
    }
  }

  enterEmit() {
    this.enter.emit();
    this.enteredStateEmit();
  }

  leaveEmit() {
    this.leave.emit();
    this.enteredStateEmit();
  }

  enteredStateEmit() {
    this.enteredChange.emit(this.isEntered);
  }
}

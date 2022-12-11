import { createSignal, ParentProps } from "solid-js";

type Props = {
  onEnter?: () => void;
  onLeave?: () => void;
  onEnteredChange?: (state: boolean) => void;
  onDropFiles?: (fileList: FileList) => void;
  class?: string;
}

export const DropZone = (props: ParentProps<Props>) => {

  const [dropZoneRef, setDropZoneRef] = createSignal<HTMLElement>();
  const [entered, setEntered] = createSignal(false);

  function onDragEnter(event: DragEvent) {
    prevent(event);
    setEntered(true);
    enterEmit();
  }

  function onDragLeave(event: DragEvent) {
    const target = event.target;
    if (target !== dropZoneRef()) {
      return;
    }

    prevent(event);
    setEntered(false);
    leaveEmit();
  }

  function onDropFiles(event: DragEvent) {
    prevent(event);
    setEntered(false);
    enteredStateEmit();

    const dt = event.dataTransfer;
    if (dt) {
      props.onDropFiles?.(dt.files);
    }
  }

  function prevent(event: DragEvent) {
    event.preventDefault();
  }

  function enterEmit() {
    props.onEnter?.();
    enteredStateEmit();
  }

  function leaveEmit() {
    props.onLeave?.();
    enteredStateEmit();
  }

  function enteredStateEmit() {
    props.onEnteredChange?.(entered());
  }

  return (
    <div
      ref={setDropZoneRef}
      classList={{
        [props.class || '']: !!props.class,
        'drop-zone-entered': entered()
      }}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={prevent}
      onDrop={onDropFiles}
    >
      {props.children}
    </div>
  )
}
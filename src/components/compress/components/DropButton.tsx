import { splitProps, JSX, createSignal } from "solid-js"

type Props = {
  onDropFiles?: (fileList: FileList) => void;
} & JSX.HTMLAttributes<HTMLButtonElement>;

export const DropButton = (props: Props) => {
  const [inputRef, setInputRef] = createSignal<HTMLInputElement>();
  const [local, others] = splitProps(props, [
    'class',
    'classList',
    'onClick'
  ])

  function onSelectFiles() {
    inputRef()?.click();
  }

  function onInputChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    const files = input.files;

    if (files) {
      onDroped(files);
    }

    input.value = '';
  }

  function onDroped(fileList: FileList) {
    props.onDropFiles?.(fileList);
  }

  return (
    <>
      <button
        class="btn"
        classList={{
          [local.class || '']: !!local.class,
          ...local.classList
        }}
        onClick={onSelectFiles}
        {...others}
      />
      <input
        ref={setInputRef}
        onChange={onInputChange}
        type="file"
        multiple
        hidden
      />
    </>
  )
}
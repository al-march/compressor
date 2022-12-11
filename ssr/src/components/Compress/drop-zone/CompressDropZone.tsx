import { createSignal } from "solid-js";
import { DropZone } from "../../base/DropZone"
import { ImageUploadLogo } from "../ImageUploadIcon";

type Props = {
  onSelect?: (images: File[]) => void;
}

export const CompressDropZone = (props: Props) => {

  const [inputRef, setInputRef] = createSignal<HTMLInputElement>();
  const [entered, setEntered] = createSignal(false);

  function onSelectFiles() {
    inputRef()?.click();
  }

  function onInputChange($event: Event) {
    const input = $event.target as HTMLInputElement;
    const files = input.files;

    if (files) {
      processFileList(files);
    }

    input.value = '';
  }

  function processFileList(fileList: FileList) {
    const images: File[] = [];
    for (let image of fileList) {
      /* TODO: check is image */
      images.push(image);
    }
    props.onSelect?.(images);
  }

  return (
    <DropZone
      onEnteredChange={setEntered}
      onDropFiles={processFileList}
    >
      <div class="flex items-center justify-center">
        <div
          classList={{ 'bg-base-300': entered() }}
          class="border-1 flex-1 p-2 py-4 border-dashed border-base-300 border-2 rounded flex items-stretch overflow-hidden"
        >
          <article
            classList={{ 'opacity-50': entered() }}
            class="w-full max-w-64 my-auto flex flex-col gap-4 justify-center items-center"
          >
            <ImageUploadLogo />

            <div class="text-center">
              <div class="flex justify-center gap-1">
                <span class="badge badge-primary">.png</span>
                <span class="badge badge-primary">.jpeg</span>
                <span class="badge badge-primary">.webp</span>
                <span class="badge badge-primary">.gif</span>
              </div>
              <span class="opacity-60 font-light text-sm text-center">Перетащите или нажмите на кнопку ниже</span>
            </div>

            <button
              class="btn btn-primary btn-outline gap-2 btn-xs"
              type="button"
              onClick={onSelectFiles}
            >
              <span class="material-symbols-outlined">
                image
              </span>
              <span>Выбрать</span>
            </button>
          </article>
        </div>
      </div>

      <input
        ref={setInputRef}
        type="file"
        class="hidden"
        onChange={onInputChange}
        multiple
      />
    </DropZone>
  )
}
import { createSignal } from "solid-js";
import { AccessibleImages } from "../../../constants";
import { AccessibleImagesBadges } from "../../base/AccessibleImages";
import { DropZone } from "../../base/DropZone"
import { ImageUploadLogo } from "../ImageUploadIcon";

type Props = {
  onDropFiles?: (fileList: FileList) => void;
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
      onDroped(files);
    }

    input.value = '';
  }

  function onDroped(fileList: FileList) {
    props.onDropFiles?.(fileList);
  }

  return (
    <DropZone
      onEnteredChange={setEntered}
      onDropFiles={onDroped}
    >
      <div class="flex items-center justify-center">
        <div
          classList={{ 
            'border-base-300 shadow-lg': entered(),
            'border-transparent': entered()
          }}
          class="transition-all border flex-1 p-2 py-4 flex items-stretch overflow-hidden rounded"
        >
          <article
            classList={{ 'opacity-50 scale-95': entered() }}
            class="transition-all w-full max-w-64 my-auto flex flex-col gap-4 justify-center items-center"
          >
            <ImageUploadLogo />

            <div class="text-center">
              <div>
                <AccessibleImagesBadges />
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
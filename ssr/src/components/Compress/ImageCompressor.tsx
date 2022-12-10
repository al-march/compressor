import { createSignal, For, Show } from 'solid-js'
import { CompressLogo } from './CompressLogo';
import { ImageCard } from './ImageCard';


export const ImageCompressor = () => {
  const [inputRef, setInputRef] = createSignal<HTMLInputElement>();
  const [images, setImages] = createSignal<File[]>([]);

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

  function processFileList(list: FileList) {
    setImages(fileListToImages(list));
  }

  function fileListToImages(list: FileList) {
    const images: File[] = [];

    for (let i = 0; i < list.length; i++) {
      const file = list[i];
      if (file instanceof File) {
        images.push(file);
      }
    }

    return images;
  }

  function reset() {
    setImages([]);
  }

  return (
    <>
      <div class="p-10 flex flex-col gap-2">
        <header class="flex items-center">
          <span class="flex-1" />

          <button
            class="btn btn-sm btn-error transition-all"
            onClick={reset}
            disabled={!images().length}
          >
            Очистить
          </button>
        </header>
        <section class="flex items-center justify-center">
          <div class="border-1 flex-1 p-2 border-dashed border-gray-500 border-2 rounded h-64 flex items-stretch overflow-hidden">
            <Show when={images().length}>
              <div class="w-full flex gap-2 overflow-y-scroll">
                <For each={images()}>
                  {image => <ImageCard image={image} />}
                </For>
              </div>
            </Show>

            <Show when={!images().length}>
              <article class="w-full max-w-64 my-auto flex flex-col gap-4 justify-center items-center">
                <CompressLogo />

                <div class="text-center">
                  Перетащите {' '}
                  <span class="badge badge-primary">.png</span>
                  <span class="badge badge-primary">.jpeg</span>
                  <span class="badge badge-primary">.webp</span>
                  <br />
                  для сжатия
                </div>

                <button
                  class="btn btn-primary btn-sm"
                  type="button"
                  onClick={onSelectFiles}
                >
                  Выбрать
                </button>
              </article>
            </Show>
          </div>
        </section>
      </div>

      <input
        ref={setInputRef}
        type="file"
        class="hidden"
        onChange={onInputChange}
        multiple
      />
    </>
  )
}

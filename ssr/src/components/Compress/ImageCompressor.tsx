import { createSignal, For, Show } from 'solid-js'
import { Image } from '../../models/image.model';
import { CompressLogo } from './CompressLogo';
import { ImageCard } from './ImageCard';

export type ImageCompressedMap = Map<Image, File | undefined>;

export const ImageCompressor = () => {
  const [inputRef, setInputRef] = createSignal<HTMLInputElement>();
  const [images, setImages] = createSignal<ImageCompressedMap>(new Map());

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
    images().clear();
    setImages(fileListToImages(list));
    // compress();
  }

  function fileListToImages(list: FileList) {
    const images: ImageCompressedMap = new Map();

    for (let i = 0; i < list.length; i++) {
      const file = list[i];
      if (file instanceof File) {
        const image = new Image(file);
        images.set(image, undefined);
      }
    }

    return images;
  }

  function reset() {
    setImages(new Map());
  }

  return (
    <>
      <div class="p-10 flex flex-col gap-2">
        <header class="flex items-center">
          <span class="flex-1" />

          <button
            class="btn btn-sm btn-error transition-all"
            onClick={reset}
            disabled={!images().size}
          >
            Очистить
          </button>
        </header>
        <section class="flex items-center justify-center">
          <div class="border-1 flex-1 p-2 border-dashed border-gray-500 border-2 rounded h-64 flex items-stretch overflow-hidden">
            <Show when={images().size}>
              <div class="w-full flex gap-2 overflow-y-scroll">
                <For each={Array.from(images().keys())}>
                  {image => <ImageCard image={image} />}
                </For>
              </div>
            </Show>

            <Show when={!images().size}>
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

import { createSignal, For, Show } from 'solid-js'
import { ImageStore } from './CompressStore';
import { CompressLogo } from './CompressLogo';
import { ImageCard } from './ImageCard';
import { Image } from "../../models/image.model"
import { downloadService } from '../../utils/download';


export const ImageCompressor = () => {
  const store = ImageStore;
  const [inputRef, setInputRef] = createSignal<HTMLInputElement>();

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
    const images = fileListToImages(list);
    store.setImages(images);
  }

  function fileListToImages(list: FileList) {
    const images: Image[] = [];

    for (let i = 0; i < list.length; i++) {
      const file = list[i];
      if (file instanceof File) {
        const image = new Image(file);
        images.push(image);
      }
    }

    return images;
  }

  function reset() {
    store.reset();
  }

  function downloadAll() {
    const files = [...store.state.images]
      .map(image => image.compressed)
      .filter(file => file instanceof File) as File[];

    downloadService.zip(files);
  }

  return (
    <section class="flex flex-col gap-4 p-10">
      <div class="flex flex-col gap-2">
        <header class="flex items-center">
          <span class="flex-1" />

          <button
            class="btn btn-sm btn-error transition-all"
            onClick={reset}
            disabled={!store.state.images.size}
          >
            Очистить
          </button>
        </header>
        <div class="flex items-center justify-center">
          <div class="border-1 flex-1 p-2 border-dashed border-gray-500 border-2 rounded h-64 flex items-stretch overflow-hidden">
            <Show when={store.state.images.size}>
              <div class="w-full flex gap-2 overflow-y-scroll">
                <For each={[...store.state.images]}>
                  {image => <ImageCard image={image} />}
                </For>
              </div>
            </Show>

            <Show when={!store.state.images.size}>
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
        </div>
      </div>

      <footer class="flex">
        <span class="flex-1" />
        <button
          class="btn btn-primary"
          disabled={!store.state.images.size}
          onClick={downloadAll}
        >
          Загрузить все
        </button>
      </footer>

      <input
        ref={setInputRef}
        type="file"
        class="hidden"
        onChange={onInputChange}
        multiple
      />
    </section>
  )
}

import { createSignal, For, Show } from 'solid-js'
import { ImageStore } from './Store';
import { ImageUploadLogo } from './ImageUploadIcon';
import { ImageCard } from './ImageCard';
import { downloadService, imageService } from '../../services';
import { Stats } from './Stats';
import { DropZone } from '../base/DropZone';


export const ImageCompressor = () => {
  const store = ImageStore;
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

  function processFileList(list: FileList) {
    const images = imageService.fileListToImages(list);
    store.setImages(images);
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

        <DropZone
          onEnteredChange={setEntered}
          onDropFiles={processFileList}
        >
          <div class="flex items-center justify-center">
            <div
              classList={{ 'bg-base-300': entered() }}
              class="border-1 flex-1 p-2 border-dashed border-gray-500 border-2 rounded h-64 flex items-stretch overflow-hidden"
            >
              <Show when={store.state.images.size}>
                <div
                  classList={{ 'opacity-50': entered() }}
                  class="w-full flex gap-2 overflow-y-scroll"
                >
                  <For each={[...store.state.images]}>
                    {image => <ImageCard image={image} />}
                  </For>
                </div>
              </Show>

              <Show when={!store.state.images.size}>
                <article
                  classList={{ 'opacity-50': entered() }}
                  class="w-full max-w-64 my-auto flex flex-col gap-4 justify-center items-center"
                >
                  <ImageUploadLogo />

                  <div class="text-center">
                    Выберете {' '}
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
        </DropZone>

      </div>

      <footer class="flex items-center">
        <Stats images={store.state.images} />

        <span class="flex-1" />
        <button
          class="btn btn-primary"
          disabled={!store.state.images.size}
          onClick={downloadAll}
        >
          <span class="material-symbols-outlined">photo_album</span>
          <span>Загрузить все ({store.state.images.size})</span>
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

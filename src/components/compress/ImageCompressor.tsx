import { createMemo, createSignal, Show } from 'solid-js'
import { ImageStore } from './Store';
import { downloadService } from '@app/services';
import { CompressDropZone } from './drop-zone';
import { CompressImage } from '@app/models';
import { Result, ResultStats } from './result';
import { AccessibleImages } from '@app/constants';
import { DropZone } from '@app/components/base';


export const ImageCompressor = () => {
  const store = ImageStore;
  const [enteredToResult, setEnteredToResult] = createSignal(false);

  const images = createMemo(() => (
    Array.from(store.state.images)
  ));

  function processFileList(fileList: FileList) {
    const images: CompressImage[] = [];
    for (let file of fileList) {
      if (isAccessImage(file.type)) {
        const image = new CompressImage(file);
        images.push(image);
      } else {
        console.warn(`image type [${file.type}] not access`);
      }
    }
    store.setImages(images);
  }

  function isAccessImage(imageType: string) {
    return AccessibleImages.some(accessFormat => imageType.includes(accessFormat));
  }

  function reset() {
    store.reset();
  }

  function downloadAll() {
    const files = images()
      .map(image => image.compress)
      .filter(file => file instanceof File) as File[];

    downloadService.zip(files);
  }

  function onImageCompress(image: CompressImage) {
    store.compressImage(image);
  }

  function removeImage(image: CompressImage) {
    store.removeImage(image);
  }

  return (
    <section class="flex flex-1 flex-col gap-4 p-2">
      <div class="flex flex-col gap-6 max-w-2xl w-full mx-auto rounded">

        <div class="shadow">
          <header class="flex items-center">
            <span class="flex-1" />
          </header>
        </div>

        <div class="shadow-xl">
          <CompressDropZone
            onDropFiles={processFileList}
          />
        </div>

        <div class="shadow-xl">
          <DropZone
            onEnteredChange={setEnteredToResult}
            onDropFiles={processFileList}
          >
            <div
              class="transition-all"
              classList={{ 'opacity-50 scale-95': enteredToResult() }}
            >
              <Result
                images={images()}
                onImageCompress={onImageCompress}
                onImageRemove={removeImage}
                onLoadAll={downloadAll}
              />
            </div>
          </DropZone>
        </div>

        <div class="shadow-xl">
          <Show when={images().length}>
            <footer class="flex gap-4 items-center justify-between p-2 rounded">
              <button class="btn btn-error btn-outline btn-xs" onClick={reset}>
                Очистить
              </button>

              <ResultStats images={images()} />

              <button class="btn btn-primary btn-outline btn-xs" onClick={downloadAll}>
                Скачать
              </button>
            </footer>
          </Show>
        </div>

      </div>
    </section>
  )
}

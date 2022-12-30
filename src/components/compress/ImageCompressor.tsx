import { createMemo, createSignal, Match, Show, Switch } from 'solid-js'
import { ImageStore } from './Store';
import { downloadService, imageService } from '@app/services';
import { CompressDropZone } from './drop-zone';
import { CompressImage } from '@app/models';
import { Result, ResultStats } from './result';
import { AccessibleImages } from '@app/constants';
import { DropZone } from '@app/components/base';
import { CompressSettings } from './drop-zone/CompressSettings';
import { Scale } from '../base/animations';
import './ImageCompressor.css';
import { DropButton } from './components';

type View = 'compress' | 'settings';

export const ImageCompressor = () => {
  const store = ImageStore;
  const [enteredToResult, setEnteredToResult] = createSignal(false);
  const [viewType, setViewType] = createSignal<View>('compress');


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
    setViewType('settings');
  }

  function isAccessImage(imageType: string) {
    return AccessibleImages.some(accessFormat => imageType.includes(accessFormat));
  }

  function reset() {
    store.reset();
    setViewType('compress');
  }

  function downloadAll() {
    const files = images()
      .map(image => {
        const file = image.compress;
        if (file) {
          const fileName = imageService.addPrefixAndSuffix(
            file.name,
            store.state.settings.prefix,
            store.state.settings.suffix,
          )
          return new File([file], fileName);
        }
      })
      .filter(file => file instanceof File) as File[]

    downloadService.zip(files);
  }

  function onImageCompress(image: CompressImage) {
    store.compressImage(image);
  }

  function removeImage(image: CompressImage) {
    store.removeImage(image);
    if (!store.state.images.size) {
      setViewType('compress');
    }
  }

  return (
    <section class="flex flex-1 flex-col gap-4 p-2">
      <div class="flex flex-col gap-6 max-w-2xl w-full mx-auto rounded">

        <div class="shadow">
          <header class="flex items-center">
            <span class="flex-1" />
          </header>
        </div>

        <div class="shadow rounded p-2 result-border">
          <header class="w-full flex gap-1">
            <div class="flex-1" />
            <button
              type="button"
              class="btn btn-sm"
              classList={{ 'btn-primary': viewType() === 'compress' }}
              onClick={() => setViewType('compress')}
            >
              Сжатие
            </button>

            <button
              type="button"
              class="btn btn-sm"
              classList={{ 'btn-primary': viewType() === 'settings' }}
              onClick={() => setViewType('settings')}
            >
              Настройки
            </button>
          </header>

          <Scale mode="outin">
            <Switch>
              <Match when={viewType() === 'compress'}>
                <CompressDropZone
                  onDropFiles={processFileList}
                />
              </Match>

              <Match when={viewType() === 'settings'}>
                <CompressSettings />
              </Match>
            </Switch>
          </Scale>

        </div>

        <div class={images().length && 'shadow' || ''}>
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

              <Show when={images().length}>
                <div class="w-full flex items-center justify-center">
                  <DropButton
                    class="btn-sm btn-outline mt-4"
                    onDropFiles={processFileList}
                  >
                    Загрузить еще
                  </DropButton>
                </div>
              </Show>
            </div>
          </DropZone>
        </div>

        <div class={images().length && 'shadow' || ''}>
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

import { createMemo, Show } from 'solid-js'
import { ImageStore } from './Store';
import { downloadService } from '../../services';
import { CompressDropZone } from './drop-zone';
import { CompressImage } from '../../models/image.model';
import { Result } from './result/Result';


export const ImageCompressor = () => {
  const store = ImageStore;

  const images = createMemo(() => (
    Array.from(store.state.images)
  ));

  function processFileList(list: File[]) {
    const images = list.map(f => new CompressImage(f));
    store.setImages(images);
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

  return (
    <section class="flex flex-1 flex-col gap-4 p-10">
      <div class="flex flex-col gap-2 p-10 rounded">
        <header class="flex items-center">
          <span class="flex-1" />
        </header>

        <CompressDropZone
          onSelect={processFileList}
        />

        <Result
          images={images()}
          onImageCompress={onImageCompress}
          onLoadAll={downloadAll}
        />

      </div>
    </section>
  )
}

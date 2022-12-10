import { createSignal, onMount, Show } from "solid-js";
import type { Image } from "../../models/image.model"
import { compressorService, convertService, downloadService } from "../../services";
import { ImageStore } from "./CompressStore";


type Props = {
  image: Image;
}

export const ImageCard = (props: Props) => {
  const store = ImageStore;

  const [preview, setPreview] = createSignal<string>();
  const [loading, setLoading] = createSignal(true);
  const [image, setImage] = createSignal<Image>()

  onMount(() => {
    compress();
  })

  async function compress() {
    setLoading(true);
    const image = props.image;
    /* Create preview for performance */
    if (!image.preview) {
      const preview = await compressorService.image(image.file, {
        quality: .8,
        width: 440,
      })

      image.preview = preview;
      await image.addPreviewSrc();
      setPreview(image.previewSrc || '');
    }

    const compressed = await compressorService.image(image.file, {
      quality: .8
    })

    image.compressed = compressed;
    store.setImage(image);

    setImage(image);
    setLoading(false);
  };

  function download() {
    const compressedImage = image()?.compressed;
    if (compressedImage) {
      downloadService.file(compressedImage);
    }
  }

  function remove() {
    store.removeImage(props.image);
  }

  function MemoryDiff(props: { image: Image }) {
    const initialSize = convertService.bytesToKb(props.image.file.size);
    const compressedSize = convertService.bytesToKb(props.image.compressed?.size || 0);

    return (
      <span class="leading-none">{initialSize}kb / {compressedSize}kb</span>
    )
  }

  function PercentDiff(props: { image: Image }) {
    const percent = 100 - ((100 / props.image.file.size) * (props.image.compressed?.size || 0));
    const diff = Math.ceil(percent);

    return (
      <span class="text-6xl leading-1 font-bold">{diff}%</span>
    )
  }

  return (
    <div class="card shrink-0 w-64 bg-base-100 shadow-xl image-full overflow-hidden">
      <figure>
        <Show
          when={!loading()}
          fallback={
            <progress class="absolute top-0 left-0 w-full progress progress-primary z-10" />
          }
        >
          <img class="w-full h-full object-cover" src={preview()} alt={props.image.file.name} />
        </Show>
      </figure>

      <div class="card-body p-4 overflow-hidden w-full">
        <Show when={!loading()} fallback={
          <span class="absolute left-0 top-0 h-full w-full flex items-center justify-center">
            <span class="material-symbols-outlined text-4xl">
              image
            </span>
          </span>
        }>
          <header class="flex items-center gap-2 justify-between">
            <h2 class="card-title w-full overflow-hidden">
              <span class="truncate" title={props.image.file.name}>
                {props.image.file.name}
              </span>
            </h2>

            <button
              class="btn btn-sm btn-circle btn-ghost"
              onClick={remove}
            >
              <span class="material-symbols-outlined">
                close
              </span>
            </button>
          </header>

          <p class="flex flex-col items-center gap-2">
            <PercentDiff image={props.image} />
            <MemoryDiff image={props.image} />
          </p>

          <div class="card-actions justify-end">
            <button
              class="btn btn-sm btn-primary btn-block"
              onClick={download}
            >
              <span class="material-symbols-outlined">
                download
              </span>
              Загрузить
            </button>
          </div>
        </Show>
      </div>
    </div>
  )
}
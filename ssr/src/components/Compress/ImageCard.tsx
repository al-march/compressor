import { createSignal, onMount, Show } from "solid-js";
import type { Image } from "../../models/image.model"
import Compressor from 'compressorjs';
import { downloadService } from "../../utils/download";
import { ImageStore } from "./CompressStore";

interface CompressConfig {
  quality: number;
  width?: number;
}

const compressImage = (file: File, config: CompressConfig): Promise<File> => {
  return new Promise(res => {
    new Compressor(file, {
      quality: config.quality,
      width: config.width,
      success: (file: File | Blob) => {
        let compressedImage: File;
        if (file instanceof Blob) {
          compressedImage = new File([file], file.name);
        } else {
          compressedImage = file;
        }

        res(compressedImage);
      }
    });
  })
}


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
    const compressPreview = async () => {
      if (!image.preview) {
        const preview = await compressImage(image.file, {
          quality: .8,
          width: 440,
        })

        image.preview = preview;
        await image.addPreviewSrc();
        setPreview(image.previewSrc || '');
      }
    }

    const compressMain = async () => {
      const compressed = await compressImage(image.file, {
        quality: .8
      })

      image.compressed = compressed;
      store.setImage(image);
    }

    await Promise.all([
      compressPreview(),
      compressMain()
    ]);

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

  return (
    <div class="card shrink-0 w-96 bg-base-100 shadow-xl image-full overflow-hidden">
      <figure>
        <Show
          when={!loading()}
          fallback={
            <progress class="absolute top-0 left-0 w-full progress progress-primary z-10"></progress>
          }
        >
          <img src={preview()} alt={props.image.file.name} />
        </Show>
      </figure>

      <div class="card-body p-4">
        <Show when={!loading()} fallback={'...loading'}>
          <h2 class="card-title">{props.image.file.name}</h2>
          <p>{props.image.file.size} bytes</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" onClick={remove}>Удалить</button>
            <button class="btn btn-primary" onClick={download}>Загрузить</button>
          </div>
        </Show>
      </div>
    </div>
  )
}
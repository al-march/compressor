import { createSignal, onMount, Show } from "solid-js";
import { Image } from "../../models/image.model"
import Compressor from 'compressorjs';

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
  image: File;
}

export const ImageCard = (props: Props) => {
  const [preview, setPreview] = createSignal<string>();
  const [loading, setLoading] = createSignal(true);

  onMount(() => {
    compress();
  })

  async function compress() {
    setLoading(true);
    const image = new Image(props.image);
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
    }

    await Promise.all([
      compressPreview(),
      compressMain()
    ]);

    setLoading(false);
  };

  return (
    <div class="card shrink-0 w-96 bg-base-100 shadow-xl image-full overflow-hidden">
      <figure>
        <Show
          when={!loading()}
          fallback={
            <progress class="absolute top-0 left-0 w-full progress progress-primary z-10"></progress>
          }
        >
          <img src={preview()} alt={props.image.name} />
        </Show>
      </figure>
      <div class="card-body">
        <h2 class="card-title">{props.image.name}</h2>
        <p>{props.image.size} bytes</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Загрузить</button>
        </div>
      </div>
    </div>
  )
}
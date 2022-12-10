import { createSignal, onMount } from "solid-js";
import type { Image } from "../../models/image.model"

type Props = {
  image: Image;
}

export const ImageCard = (props: Props) => {

  const [src, setSrc] = createSignal('');

  onMount(async () => {
    if (!props.image.previewSrc) {
      await props.image.addImageSrc();
      setSrc(props.image.src || '');
    }
  })

  return (
    <div class="card shrink-0 w-96 bg-base-100 shadow-xl image-full">
      <figure><img src={src()} alt={props.image.file.name} /></figure>
      <div class="card-body">
        <h2 class="card-title">{props.image.file.name}</h2>
        <p>{props.image.file.size} bytes</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Загрузить</button>
        </div>
      </div>
    </div>
  )
}
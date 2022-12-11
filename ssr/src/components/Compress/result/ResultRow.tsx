import { createMemo, createSignal, onMount, ParentProps, Show } from "solid-js";
import type { CompressImage } from "../../../models/image.model"
import { compressorService, convertService, downloadService } from "../../../services";
import { Loader } from "../../base/Loader";

const toMb = convertService.bytesToMb;

type Props = {
  image: CompressImage;

  onCompressed?: (image: CompressImage) => void;
}

export const ResultRow = (props: Props) => {

  const image = createMemo(() => props.image);

  const [compress, setCompress] = createSignal<File>();

  onMount(async () => {
    const file = await compressorService.image(props.image.initial, {
      quality: 0.8
    });

    image().compress = file;
    props.onCompressed?.(image());
    setCompress(file)
  })

  function download() {
    const compress = image().compress;
    if (compress) {
      downloadService.file(compress);
    }
  }

  return (
    <tr>
      <td class="w-32">
        <div class="font-bold opacity-75 overflow-hidden">
          <div class="truncate" title={image().initial.name}>{image().initial.name}</div>
        </div>
      </td>
      <td>
        <span class="text-sm font-bold text-warning">
          {toMb(image().initial.size)} MB
        </span>
      </td>
      <td>
        <Show when={!!compress()} fallback={
          <div class="h-12 flex items-center"><Loader /></div>
        }>
          <div class="h-12 flex items-center justify-center opacity-75 font-bold">
            {image().percentDif}%
          </div>
        </Show>
      </td>
      <td>
        <Show when={!!compress()} fallback={
          <div class="h-12 flex items-center"><Loader /></div>
        }>
          <div class="h-12 flex items-center">
            <span class="text-sm font-bold text-warning">{toMb(image().compress?.size || 0)} MB</span>
          </div>
        </Show>
      </td>
      <td>
        <div class="w-full flex justify-center">
          <button
            disabled={!compress()}
            class="btn btn-circle btn-ghost btn-sm"
            onClick={download}
          >
            <span class="material-symbols-outlined">
              download
            </span>
          </button>
        </div>
      </td>
    </tr>
  )
}
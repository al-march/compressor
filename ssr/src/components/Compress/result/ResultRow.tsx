import { createMemo, createSignal, onMount, Show } from "solid-js";
import type { CompressImage } from "../../../models/image.model"
import { compressorService, convertService, downloadService } from "../../../services";
import { Loader } from "../../base/Loader";

const toMb = convertService.bytesToMb;

type Props = {
  image: CompressImage;

  onCompressed?: (image: CompressImage) => void;
  onRemove?: (image: CompressImage) => void;
}

export const ResultRow = (props: Props) => {

  const image = createMemo(() => props.image);
  const [load, setLoad] = createSignal(true);

  onMount(async () => {
    const file = await compressorService.image(props.image.initial, {
      quality: 0.8
    });

    image().compress = file;
    props.onCompressed?.(image());
    setLoad(false);
  })

  function download() {
    const compress = image().compress;
    if (compress) {
      downloadService.file(compress);
    }
  }

  function remove() {
    props.onRemove?.(image());
  }

  return (
    <tr>
      <th class="w-32">
        <div class="font-bold opacity-75 w-32 overflow-hidden">
          <div class="truncate" title={image().initial.name}>{image().initial.name}</div>
        </div>
      </th>
      <td>
        <div class="text-sm text-center font-bold text-error">
          {toMb(image().initial.size)} MB
        </div>
      </td>
      <td>
        <Show when={!load()} fallback={
          <div class="h-8 flex justify-center items-center"><Loader size="sm" /></div>
        }>
          <div class="h-8 flex gap-1 items-center justify-center opacity-75 font-semibold">
            <span class="badge badge-success">Сжато {image().percentDif}%</span> 
          </div>
        </Show>
      </td>
      <td>
        <Show when={!load()} fallback={
          <div class="h-8 flex justify-center items-center"><Loader size="sm" /></div>
        }>
          <div class="h-8 w-full flex justify-center items-center text-center">
            <span class="text-sm font-bold text-success">{toMb(image().compress?.size || 0)} MB</span>
          </div>
        </Show>
      </td>
      <td>
        <div class="w-full flex justify-center">
          <button
            classList={{ 'hidden': load() }}
            class="btn btn-circle btn-ghost text-error btn-sm"
            onClick={remove}
            title="Удалить"
          >
            <span class="material-symbols-outlined">
              backspace
            </span>
          </button>

          <button
            classList={{ 'hidden': load() }}
            class="btn btn-circle btn-ghost btn-sm"
            onClick={download}
            title="Выгрузить"
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
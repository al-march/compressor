import { createMemo, createSignal, onMount, Show } from "solid-js";
import type { CompressImage } from "../../../models/image.model"
import { compressorService, convertService, downloadService } from "../../../services";
import { Loader } from "../../base/Loader";
import { Tooltip } from "../../base/Tooltip";

const toMb = convertService.bytesToMb;

function TitleWidthFixed(title: string, max = 20) {
  if (title.length > max) {
    const part = Math.floor(max / 2);
    const start = title.slice(0, part);
    const end = title.slice(-part);
    return `${start}...${end}`;
  }
  return title;
}

const ImagePreview = (props: { image: CompressImage }) => {
  const [previewSrc, setPreviewSrc] = createSignal('');

  onMount(async () => {
    if (!props.image.previewSrc) {
      await props.image.createPreviewSrc();
    }

    setPreviewSrc(props.image.previewSrc!)
  })

  return (
    <div class="w-64 h-64 flex items-center justify-center shadow-xl">
      <Show when={previewSrc()} fallback={<Loader />}>
        <img class="w-full h-full object-cover" src={previewSrc()} alt={props.image.initial.name} />
      </Show>
    </div>
  )
}

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
    <>
      <div class="result-table-cell title">
        <Tooltip placement="right" content={<ImagePreview image={image()} />}>
          <div class="font-bold opacity-75 overflow-hidden">
            <div class="flex gap-1 items-center w-full">
              <span class="material-symbols-outlined text-success">
                image
              </span>
              <span class="truncate font-semibold" title={image().initial.name}>
                {TitleWidthFixed(image().initial.name)}
              </span>
            </div>
          </div>
        </Tooltip>
      </div>
      <div class="result-table-cell before">
        <div class="text-sm text-center font-bold text-error">
          {toMb(image().initial.size)} MB
        </div>
      </div>
      <div class="result-table-cell status">
        <Show when={!load()} fallback={
          <div class="h-8 flex justify-center items-center"><Loader size="sm" /></div>
        }>
          <div class="h-8 flex gap-1 items-center justify-center opacity-75 font-semibold">
            <span class="badge badge-success">-{image().percentDif}%</span>
          </div>
        </Show>
      </div>
      <div class="result-table-cell after">
        <Show when={!load()} fallback={
          <div class="h-8 flex justify-center items-center"><Loader size="sm" /></div>
        }>
          <div class="h-8 w-full flex justify-center items-center text-center">
            <span class="text-sm font-bold text-success">{toMb(image().compress?.size || 0)} MB</span>
          </div>
        </Show>
      </div>
      <div class="result-table-cell actions">
        <div class="w-full flex justify-center">
          <button
            classList={{ 'invisible': load() }}
            class="btn btn-circle btn-ghost text-error btn-sm"
            onClick={remove}
            title="Удалить"
          >
            <span class="material-symbols-outlined">
              backspace
            </span>
          </button>

          <button
            classList={{ 'invisible': load() }}
            class="btn btn-circle btn-ghost btn-sm"
            onClick={download}
            title="Выгрузить"
          >
            <span class="material-symbols-outlined">
              download
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
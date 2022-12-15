import type { Subscription } from "rxjs";
import { createMemo, createSignal, onCleanup, onMount, Show } from "solid-js";
import type { CompressImage } from "@app/models"
import { compressorService, convertService, downloadService, imageService } from "@app/services";
import { Loader, Tooltip } from "@app/components/base";
import { ImageStore } from "../Store";

const toMb = convertService.bytesToMb;

function titleWidthFixed(title: string, prefix = '', suffix = '') {
  const max = 20;
  const output = imageService.addPrefixAndSuffix(title, prefix, suffix);

  if (output.length > max) {
    const part = Math.floor(max / 2);
    const start = output.slice(0, part);
    const end = output.slice(-part);
    return `${start}...${end}`;
  }
  return output;
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
  const store = ImageStore;

  const image = createMemo(() => props.image);
  const [load, setLoad] = createSignal(false);

  let subscription: Subscription;

  onMount(async () => {
    await compress();
    subscription = ImageStore.state.shouldRecompress$
      .subscribe(() => {
        compress();
      })
  })

  onCleanup(() => {
    if (subscription) {
      subscription.unsubscribe();
    }
  })

  async function compress() {
    if (load()) {
      return;
    }
    setLoad(true);
    const file = await compressorService.image(props.image.initial, {
      ...store.state.settings
    });

    image().compress = file;
    props.onCompressed?.(image());
    setLoad(false);
  }

  async function download() {
    const compress = image().compress;
    if (compress) {
      const fileName = imageService.addPrefixAndSuffix(
        compress.name,
        store.state.settings.prefix,
        store.state.settings.suffix
      )
      const file = new File([compress], fileName)
      downloadService.file(file);
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
                {titleWidthFixed(
                  image().initial.name,
                  store.state.settings.prefix,
                  store.state.settings.suffix
                )}
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
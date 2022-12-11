import { createMemo, ParentProps, createSignal, createEffect, on, Show } from "solid-js";
import type { CompressImage } from "../../models/image.model";
import { convertService } from "../../services";

interface Stats {
  initialSize: number;
  compressedSize: number;
  percent: number;
  isDone: boolean;
}

const initialStats: Stats = {
  initialSize: 0,
  compressedSize: 0,
  percent: 0,
  isDone: false
}

type Props = {
  images: CompressImage[];
}

const toMb = convertService.bytesToMb;

export const Stats = (props: ParentProps<Props>) => {

  const images = createMemo(() => props.images);
  const [stats, setStats] = createSignal<Stats>({ ...initialStats })

  createEffect(on(images, (images) => {
    if (!images.length) {
      setStats({ ...initialStats });
      return;
    }

    const isAllCompressed = [...images].every(img => !!img.compress);
    if (isAllCompressed) {
      const stats = { ...initialStats };

      [...images].forEach(img => {
        stats.initialSize += img.initial.size;
        stats.compressedSize += img.compress?.size || 0
      });

      stats.percent = Math.ceil(100 - ((100 / stats.initialSize) * (stats.compressedSize || 0)));
      stats.isDone = true;
      setStats(stats);
    }
  }));

  return (
    <Show when={stats().isDone}>
      <section>
        <p>
          <span class="text-sm opacity-75">Размер уменьшился на</span>{' '}
          <span class="text-2xl font-bold">{stats().percent}%</span>
        </p>
        <span>{toMb(stats().initialSize)} MB / {toMb(stats().compressedSize)} MB</span>
      </section>
    </Show>
  )
}
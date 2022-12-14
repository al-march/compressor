import { For, Show } from "solid-js";
import { TransitionGroup } from "solid-transition-group";
import type { CompressImage } from "../../../models/image.model";
import { ResultRow } from "./ResultRow"
import './Result.css';

type Props = {
  images: CompressImage[];

  onImageCompress?: (image: CompressImage) => void;
  onImageRemove?: (image: CompressImage) => void;
  onLoadAll?: () => void;
}

export const Result = (props: Props) => {
  return (
    <div class="overflow-x-auto rounded py-1">
      <div class="result-table">
        <Show when={props.images.length}>
          <div class="text-center result-table-cell th title">Имя</div>
          <div class="text-center result-table-cell th before">До</div>
          <div class="text-center result-table-cell th status">Статус</div>
          <div class="text-center result-table-cell th after">После</div>
          <div class="text-center result-table-cell th actions">Действия</div>
        </Show>

        <TransitionGroup
          onBeforeEnter={el => (el as HTMLElement).style.height = '0'}
          onAfterEnter={el => (el as HTMLElement).style.height = el.scrollHeight + 'px'}
          onEnter={(el, done) => {
            const a = el.animate(
              [
                { opacity: 0, height: 0 },
                { opacity: 1, height: el.scrollHeight + 'px' }
              ], {
              duration: 200,
              easing: 'cubic-bezier(0.1, -0.3, 0.2, 0)'
            });
            a.finished.then(done);
          }}
          onExit={(el, done) => {
            const a = el.animate([
              { opacity: 1, height: el.scrollHeight + 'px' },
              { opacity: 0, height: 0 }
            ], {
              duration: 100,
              easing: 'cubic-bezier(0.1, -0.3, 0.2, 0)'
            });
            a.finished.then(done);
          }}
        >
          <Show when={props.images.length} fallback={<></>}>
            <For each={props.images}>
              {image => (
                <ResultRow
                  image={image}
                  onCompressed={props.onImageCompress}
                  onRemove={props.onImageRemove}
                />
              )}
            </For>
          </Show>
        </TransitionGroup>
      </div>
    </div>
  )
}
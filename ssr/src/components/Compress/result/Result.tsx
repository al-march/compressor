import { For, Show } from "solid-js";
import { TransitionGroup } from "solid-transition-group";
import type { CompressImage } from "../../../models/image.model";
import { ResultRow } from "./ResultRow"

type Props = {
  images: CompressImage[];

  onImageCompress?: (image: CompressImage) => void;
  onImageRemove?: (image: CompressImage) => void;
  onLoadAll?: () => void;
}

export const Result = (props: Props) => {
  return (
    <div class="overflow-x-auto">
      <table class="table table-compact w-full">
        <Show when={props.images.length}>
          <thead>
            <tr>
              <th class="text-center w-32">Имя</th>
              <th class="text-center">До</th>
              <th class="text-center">Статус</th>
              <th class="text-center">После</th>
              <th class="text-center">Действия</th>
            </tr>
          </thead>
        </Show>
        <tbody>
          <TransitionGroup
            onBeforeEnter={el => (el as HTMLElement).style.opacity = '0'}
            onAfterEnter={el => (el as HTMLElement).style.opacity = '1'}
            onEnter={(el, done) => {
              const a = el.animate(
                [
                  { opacity: 0, transform: 'translateY(40px)' },
                  { opacity: 1, transform: 'translateX(0)' }
                ], {
                duration: 400
              });
              a.finished.then(done);
            }}
            onExit={(el, done) => {
              const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: 0
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
        </tbody>
      </table>
    </div>
  )
}
import { For, Show } from "solid-js";
import type { CompressImage } from "../../../models/image.model";
import { Stats } from "../Stats";
import { ResultRow } from "./ResultRow"

type Props = {
  images: CompressImage[];

  onImageCompress?: (image: CompressImage) => void;
  onLoadAll?: () => void;
}

export const Result = (props: Props) => {
  return (
    <Show when={props.images.length}>
      <div class="overflow-x-auto">
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th class="text-center">Имя</th>
              <th class="text-center">До</th>
              <th class="text-center">Статус</th>
              <th class="text-center">После</th>
              <th class="text-center">Действия</th>
            </tr>
          </thead>
          <tbody>
            <For each={props.images}>
              {image => (
                <ResultRow
                  image={image}
                  onCompressed={props.onImageCompress}
                />
              )}
            </For>
          </tbody>
        </table>

        <footer class="flex items-center justify-between">
          <Stats images={props.images}></Stats>
          <button class="btn btn-primary btn-sm" onClick={props.onLoadAll}>Скачать архивом</button>
        </footer>
      </div>
    </Show>
  )
}
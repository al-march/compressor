import { HeightGroup } from "@app/components/base/animations";
import { For } from "solid-js";
import { TableItem } from "./TableItem";
import './ImageTable.css';

type Props = {
  images: File[];

  onRemove: (file: File) => void;
}

export const ImageTable = (props: Props) => {

  return (
    <section class="convert-table">
      <div class="p-1 font-black text-center bg-neutral">Имя</div>
      <div class="p-1 font-black text-center bg-neutral">До</div>
      <div class="p-1 font-black text-center bg-neutral">После</div>
      <div class="p-1 font-black text-center bg-neutral">Действия</div>

      <HeightGroup>
        <For each={props.images}>
          {file => (
            <TableItem
              file={file}
              onRemove={props.onRemove}
            />
          )}
        </For>
      </HeightGroup>
    </section>
  )
}
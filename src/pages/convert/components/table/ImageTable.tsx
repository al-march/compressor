import { HeightGroup } from "@app/components/base/animations";
import { createEffect, For } from "solid-js";
import { TableItem } from "./TableItem";
import './ImageTable.css';
import type { ConvertImage, ConvertTypes } from "../../store";

type Props = {
  images: ConvertImage[];
  type: ConvertTypes;

  onRemove: (file: ConvertImage) => void;
}

export const ImageTable = (props: Props) => {

  createEffect(() => {
    console.log(props);
  })

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
              image={file}
              type={props.type}
              onRemove={props.onRemove}
            />
          )}
        </For>
      </HeightGroup>
    </section>
  )
}
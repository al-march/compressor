import { Icon, Tooltip } from "@app/components/base";
import { downloadService, imageService } from "@app/services";
import { titleWidthFixed } from "@app/services/utils";
import { createMemo } from "solid-js";

type Props = {
  file: File;

  onRemove: (file: File) => void;
}

export const TableItem = (props: Props) => {

  const ext = createMemo(() => imageService.sliceExt(props.file.name).ext)

  function remove() {
    props.onRemove?.(props.file);
  }

  function download() {
    downloadService.file(props.file);
  }

  return (
    <>
      <div class="p-1">
        <div class="flex gap-1 items-center w-full">
          <Icon code="image" class="text-success" />
          <span class="whitespace-nowrap font-semibold" title={props.file.name}>
            {titleWidthFixed(props.file.name)}
          </span>
        </div>
      </div>
      <div class="p-1 text-center">{ext()}</div>
      <div class="p-1"></div>
      <div class="p-1">
        <div class="flex gap-2 justify-center">
          <Tooltip message="Удалить" placement="top">
            <button
              class="btn btn-ghost btn-circle btn-sm text-error"
              onClick={remove}
            >
              <Icon code="backspace" />
            </button>
          </Tooltip>

          <Tooltip message="Выгрузить" placement="top">
            <button
              class="btn btn-ghost btn-circle btn-sm text-success"
              onClick={download}
            >
              <Icon code="download" />
            </button>
          </Tooltip>
        </div>

      </div>
    </>
  )
}
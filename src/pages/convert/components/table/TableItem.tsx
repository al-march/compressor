import { Icon, Tooltip } from "@app/components/base";
import { compressorService, downloadService, imageService } from "@app/services";
import { titleWidthFixed } from "@app/services/utils";
import { createMemo } from "solid-js";
import { ConvertImage, ConvertTypes } from "../../store";

type Props = {
  image: ConvertImage;
  type: ConvertTypes;

  onRemove: (file: ConvertImage) => void;
}

export const TableItem = (props: Props) => {

  const initialType = createMemo(() => props.image.file.type);

  const convertType = createMemo(() => {
    return props.type === ConvertTypes.INITIAL
      ? initialType()
      : props.type
  });

  function remove() {
    props.onRemove?.(props.image);
  }

  async function download() {
    const file = await compressorService.image(props.image.file, {
      quality: 0.9,
      mimeType: convertType(),
    }); 

    downloadService.file(file);
  }

  return (
    <>
      <div class="p-1 overflow-hidden">
        <div class="flex gap-1 items-center w-full">
          <Icon code="image" class="text-success" />
          <span class="whitespace-nowrap font-semibold" title={props.image.file.name}>
            {titleWidthFixed(props.image.file.name)}
          </span>
        </div>
      </div>
      <div class="p-1 text-center overflow-hidden">
        <span class="badge badge-info font-bold">
          {initialType()}
        </span>
      </div>
      <div class="p-1 text-center overflow-hidden">
        <span class="badge badge-info font-bold">
          {convertType()}
        </span>
      </div>
      <div class="p-1 overflow-hidden">
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
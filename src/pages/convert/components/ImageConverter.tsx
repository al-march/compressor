import { Scale } from "@app/components/base/animations";
import { DropButton } from "@app/components/compress/components";
import { CompressDropZone } from "@app/components/compress/drop-zone";
import { imageService } from "@app/services";
import { createEffect, createMemo, Match, Switch } from "solid-js"
import { ConvertImage, ConvertStore } from "../store";
import { ConvertTypeBtns } from "./control";
import { ImageTable } from "./table";

export const ImageConverter = () => {
  const store = ConvertStore;

  const images = createMemo(() => Array.from(store.state.images));

  createEffect(() => {
    console.log(store.state);

  })

  function processFileList(fileList: FileList) {
    const list = imageService
      .listToImages(fileList)
      .map(createImage);

    store.set(list);
  }

  function createImage(file: File) {
    return new ConvertImage(file)
  }

  function removeImage(file: ConvertImage) {
    store.remove(file);
  }

  return (
    <div class="flex flex-col gap-4">
      <ConvertTypeBtns
        type={store.state.settings.type}
        onChange={store.setType}
      />

      <Scale mode="inout">
        <Switch>
          <Match when={!images().length}>
            <CompressDropZone
              onDropFiles={processFileList}
            />
          </Match>

          <Match when={images().length}>
            <div>
              <ImageTable
                images={images()}
                type={store.state.settings.type}
                onRemove={removeImage}
              />

              <div class="w-full p-3 flex justify-center">
                <DropButton
                  class="btn-sm btn-outline"
                  onDropFiles={processFileList}
                >
                  Загрузить еще
                </DropButton>
              </div>
            </div>
          </Match>
        </Switch>

      </Scale>

    </div>
  )
}
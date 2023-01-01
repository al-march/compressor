import { Scale } from "@app/components/base/animations";
import { DropButton } from "@app/components/compress/components";
import { CompressDropZone } from "@app/components/compress/drop-zone";
import { imageService } from "@app/services";
import { createSignal, Match, Switch } from "solid-js"
import { ImageTable } from "./table/ImageTable";

export const ImageConverter = () => {
  const [images, setImages] = createSignal<File[]>([]);

  function processFileList(fileList: FileList) {
    const list = imageService.listToImages(fileList);
    setImages([...images(), ...list]);
  }

  function removeImage(file: File) {
    const filtered = images().filter(img => img !== file);
    setImages(filtered);
  }

  return (
    <div>
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
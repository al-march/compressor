import { Icon, ImageDropZone } from "@app/components/base";
import { Scale } from "@app/components/base/animations";
import { DropButton } from "@app/components/compress/components";
import { compressorService, downloadService, imageService } from "@app/services";
import { createMemo, Match, onMount, Switch } from "solid-js"
import { ConvertImage, ConvertStore, ConvertTypes } from "../store";
import { ConvertTypeBtns } from "./control";
import { ImageTable } from "./table";

type Props = {
  type?: ConvertTypes;
}

export const ImageConverter = (props: Props) => {
  const store = ConvertStore;

  const images = createMemo(() => Array.from(store.state.images));

  onMount(() => {
    const type = props.type;
    if (type) {
      store.setType(type);
    }
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

  async function downloadAll() {
    const awaitList = images().map(img => {
      return compressorService.image(img.file, {
        quality: 0.9,
        mimeType: store.state.settings.type
      })
    });

    const list = await Promise.all(awaitList);
    const unique: File[] = [];
    const names: Set<string> = new Set();

    list.forEach(file => {
      if (!names.has(file.name)) {
        names.add(file.name);
        unique.push(file);
      }
    });

    downloadService.zip(unique);
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
            <ImageDropZone
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

              <div class="w-full p-3 flex flex-col justify-center items-center gap-4">
                <DropButton
                  class="btn-sm btn-outline gap-2"
                  type="button"
                  onDropFiles={processFileList}
                >
                  <Icon code="add_photo_alternate" />
                  <span>Загрузить еще</span>
                </DropButton>

                <button
                  class="btn btn-sm btn-outline btn-success gap-2"
                  type="button"
                  onClick={downloadAll}
                >
                  <Icon code="download" />
                  <span>Выгрузить ({images().length})</span>
                </button>
              </div>
            </div>
          </Match>
        </Switch>

      </Scale>

    </div>
  )
}
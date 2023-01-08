import { HasBackend, Icon, ImageCompareSlider, Loader, Tooltip } from "@app/components/base";
import { Scale } from "@app/components/base/animations";
import { CompressDropZone } from "@app/components/compress/drop-zone"
import { CompressImage } from "@app/models";
import { downloadService, imageService } from "@app/services";
import { removeBg } from "@app/services/api";
import { createSignal, Match, Switch } from "solid-js";

export const RemBg = () => {

  const [initialImage, setInitialImage] = createSignal<File>();
  const [initialSrc, setInitialSrc] = createSignal<string>();

  const [image, setImage] = createSignal<File>();
  const [src, setSrc] = createSignal<string>();
  const [load, setLoad] = createSignal(false);

  async function processFiles(fileList: FileList) {
    const [image] = fileList;
    if (image) {
      setLoad(true);

      setInitialImage(image);
      setInitialSrc(await CompressImage.createSrc(image));
      await fetchRemoveBg(image);

      setLoad(false);
    }
  }

  async function fetchRemoveBg(image: File) {
    const file = await removeBg(image);
    const src = await CompressImage.createSrc(file);
    setImage(file);
    setSrc(src);
  }

  function download() {
    const file = new File([image() || ''], imageNameToPng())
    if (file) {
      downloadService.file(file)
    }
  }

  function imageNameToPng() {
    const image = initialImage();
    const fullName = image?.name;
    if (fullName) {
      const { name } = imageService.sliceExt(fullName);
      return `${name}.png`;
    }
    return 'output.png';
  }

  return (
    <HasBackend>
      <CompressDropZone
        onDropFiles={processFiles}
      />

      <div class="w-full">
        <Scale>
          <Switch>
            <Match when={load()}>
              <div class="p-8 w-full flex justify-center">
                <Loader />
              </div>
            </Match>
            <Match when={image()}>
              <div class="mx-auto w-full rounded overflow-hidden">
                <header class="mb-6">
                  <Tooltip message="Выгрузить">
                    <button class="btn btn-sm btn-ghost btn-circle" onClick={download}>
                      <Icon code="download" />
                    </button>
                  </Tooltip>
                </header>

                <ImageCompareSlider
                  class="rounded"
                  withLabels
                  before={
                    <img src={initialSrc()} />
                  }
                  after={
                    <img src={src()} />
                  }
                />
              </div>
            </Match>
          </Switch>
        </Scale>
      </div>
    </HasBackend>
  )
}
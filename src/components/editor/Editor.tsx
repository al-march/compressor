import { CompressImage } from "@app/models";
import { createSignal, Match, Switch } from "solid-js"
import { Scale } from "../base/animations";
import { ImageDropZone } from "@app/components/base";
import { ImageEditor } from "./components";

export const Editor = () => {
  const [source, setSource] = createSignal('');

  async function onDropFiles(list: FileList) {
    const [image] = list;
    const source = await CompressImage.createSrc(image);
    setSource(source);
  }

  return (
    <Scale>
      <Switch>
        <Match when={!source()}>
          <ImageDropZone
            onDropFiles={onDropFiles}
          />
        </Match>

        <Match when={!!source()}>
          <ImageEditor
            source={source()}
            onClose={() => setSource('')}
          />
        </Match>
      </Switch>
    </Scale>
  )
}
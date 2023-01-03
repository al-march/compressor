import { Divider, Loader } from "@app/components/base";
import { CompressDropZone } from "@app/components/compress/drop-zone"
import { createSignal, Show } from "solid-js";
import { createWorker } from "tesseract.js";

export const TextParser = () => {

  const [text, setText] = createSignal('');
  const [progress, setProgress] = createSignal(false);

  async function processFileList(fileList: FileList) {
    const image = fileList[0];
    if (image) {
      setProgress(true);
      const worker = await createWorker({
        logger: m => console.log(m)
      });

      await worker.loadLanguage('eng+rus');
      await worker.initialize('eng+rus');
      const {data} = await worker.recognize(image);
      console.log(data);
      setText(data.text);
      setProgress(false);
      await worker.terminate();
    }
  }

  return (
    <div>
      <CompressDropZone
        onDropFiles={processFileList}
      />

      <Divider />

      <Show when={!progress()} fallback={
        <div class="w-full flex justify-center">
          <Loader />
        </div>
      }>
        <section class="p-4 border rounded whitespace-pre-wrap">
          {text}
        </section>
      </Show>
    </div>
  )
}
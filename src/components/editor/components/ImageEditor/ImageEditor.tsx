import { downloadService } from "@app/services";
import { createSignal, onCleanup, onMount } from "solid-js";
import { Editor } from "./editor";
import type { ClosingReasons, FilerobotImageEditor as EditorInstance, imageDesignState, savedImageData } from "./types";

declare class FilerobotImageEditor extends EditorInstance { }

const SELECTOR = 'image-editor'

type Props = {
  source: string;

  onClose?: () => void;
}

export const ImageEditor = (props: Props) => {
  const [ref, setRef] = createSignal<HTMLElement>();
  const [editor, setEditor] = createSignal<FilerobotImageEditor>();

  onMount(() => {
    setTimeout(() => {
      init();
    })
  })

  onCleanup(() => {
    const instance = editor();
    if (instance) {
      instance.terminate();
    }
  })

  function init() {
    const container = ref();
    if (container) {
      const editor = new FilerobotImageEditor(container, {
        ...Editor.getConfig(),
        source: props.source,
        onSave,
        onClose
      })

      editor.render();
      setEditor(editor);
    }
  }

  function onClose(_: ClosingReasons) {
    props.onClose?.()
  }

  async function onSave(saved: savedImageData, state: imageDesignState) {
    console.log(state);
    
    const file = await urltoFile(
      saved.imageBase64 || '',
      saved.fullName || '',
      saved.mimeType
    );

    return downloadService.file(file);
  }

  return (
    <div ref={setRef} id={SELECTOR} />
  )
}

function urltoFile(url: string, filename: string, mimeType: string) {
  return (fetch(url)
    .then(function (res) { return res.arrayBuffer(); })
    .then(function (buf) { return new File([buf], filename, { type: mimeType }); })
  );
}
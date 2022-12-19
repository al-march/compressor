import { ImageCompareSlider, Loader } from "@app/components/base"
import { CompressImage } from "@app/models";
import { createEffect, createSignal, ParentProps, Show } from "solid-js"
import { Portal } from "solid-js/web";

type Props = {
  show?: boolean;
  image?: CompressImage;

  onClose?: () => void;
}

export const CompareResultModal = (props: ParentProps<Props>) => {

  const [load, setLoad] = createSignal(true);
  const [beforeSrc, setBeforeSrc] = createSignal('');
  const [afterSrc, setAfterSrc] = createSignal('');

  createEffect(async () => {
    if (props.show) {
      const { initial, compress } = props.image || {};

      console.log(props.image);


      if (initial && compress) {
        setLoad(true);
        const beforeSrc = await CompressImage.createSrc(initial);
        const afterSrc = await CompressImage.createSrc(compress);

        setBeforeSrc(beforeSrc);
        setAfterSrc(afterSrc);
        setLoad(false);
      }
    }
  })

  return (
    <Portal>
      <Show when={props.show}>
        <div class="modal" classList={{ 'modal-open': !!props.show }} onClick={props.onClose}>
          <div class="modal-box max-w-screen-2xl" onClick={e => e.stopPropagation()}>
            <Show when={!load()} fallback={<Loader />}>
              <ImageCompareSlider
                class="max-h-[400px]"
                before={<img src={beforeSrc()} />}
                after={<img src={afterSrc()} />}
              />
            </Show>

            <div class="modal-action">
              <button
                type="button"
                class="btn"
                onClick={props.onClose}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </Show>
    </Portal>
  )
}
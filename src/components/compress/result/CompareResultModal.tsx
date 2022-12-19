import { ImageCompareSlider, Loader } from "@app/components/base"
import { Height, Scale } from "@app/components/base/animations";
import { CompressImage } from "@app/models";
import { createEffect, createSignal, ParentProps, Show } from "solid-js"
import { Portal } from "solid-js/web";

type Props = {
  show?: boolean;
  image?: CompressImage;

  onClose?: () => void;
}

export const CompareResultModal = (props: ParentProps<Props>) => {

  const [shouldShow, setShouldShow] = createSignal(!!props.show);
  const [load, setLoad] = createSignal(true);
  const [showSlider, setShowSlider] = createSignal(false);
  const [beforeSrc, setBeforeSrc] = createSignal('');
  const [afterSrc, setAfterSrc] = createSignal('');

  createEffect(async () => {
    if (props.show) {
      setShouldShow(true);
      const { initial, compress } = props.image || {};

      if (initial && compress) {
        setLoad(true);
        const beforeSrc = await CompressImage.createSrc(initial);
        const afterSrc = await CompressImage.createSrc(compress);

        setBeforeSrc(beforeSrc);
        setAfterSrc(afterSrc);

        setTimeout(() => {
          setLoad(false);
        }, 350)
      }
    }
  })

  return (
    <Show when={shouldShow()}>
      <Portal>
        <div class="modal" classList={{ 'modal-open': !!shouldShow() }} onClick={props.onClose}>
          <Scale appear onExit={() => {
            setShouldShow(false)
          }}>
            <Show when={props.show}>
              <div class="modal-box rounded p-2 max-w-screen-2xl" onClick={e => e.stopPropagation()}>

                <Show when={!load()} fallback={
                  <div class="max-h-[400px] p-10 flex justify-center items-center">
                    <Loader />
                  </div>
                }>
                  <Height appear>
                    <div class="w-full h-full overflow-hidden">
                      <ImageCompareSlider
                        class="max-h-[80vh]"
                        before={<img src={beforeSrc()} />}
                        after={<img src={afterSrc()} />}
                      />
                    </div>
                  </Height>
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
            </Show>
          </Scale>
        </div>
      </Portal>
    </Show>
  )
}
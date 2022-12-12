import { createSignal, JSXElement, onCleanup, ParentProps, Show } from "solid-js"
import { Portal } from 'solid-js/web'
import { createPopper, Instance } from '@popperjs/core';

type Props = {
  content: JSXElement;
  onShow?: () => void;
  onHide?: () => void;
}

export const Tooltip = (props: ParentProps<Props>) => {
  const [ref, setRef] = createSignal<HTMLElement>();
  const [tooltip, setTooltip] = createSignal<HTMLElement>();
  const [show, setShow] = createSignal(false);

  let instance: Instance;
  let timeoutId: number;

  onCleanup(() => {
    if (instance) {
      instance.destroy();
    }
  })

  function onMouseEnter() {
    timeoutId = window.setTimeout(() => {
      setShow(true);
      initPopper();
      props.onShow?.();
    }, 200);
  }

  function onMouseLeave() {
    window.clearTimeout(timeoutId);
    setShow(false);
    props.onHide?.();
  }

  function initPopper() {
    const reference = ref();
    const tooltipRef = tooltip();

    if (reference && tooltipRef) {
      instance = createPopper(reference, tooltipRef, {
        placement: 'top-start',
        modifiers: [{
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        }]
      })
    }
  }

  return (
    <>
      <span
        ref={setRef}
        class="inline-flex"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {props.children}
      </span>

      <Show when={show()}>
        <Portal>
          <div class="z-50 relative" ref={setTooltip}>
            <div class="rounded shadow-lg bg-base-300 overflow-hidden">
              {props.content}
            </div>
          </div>
        </Portal>
      </Show>
    </>
  )
}
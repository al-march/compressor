import { createSignal, JSXElement, onCleanup, ParentProps, Show } from "solid-js"
import { Portal } from 'solid-js/web'
import { createPopper, Instance, Placement } from '@popperjs/core';
import { Transition } from "solid-transition-group";

type Props = {
  content: JSXElement;
  class?: string;
  placement?: Placement;

  onShow?: () => void;
  onHide?: () => void;
}

export const Tooltip = (props: ParentProps<Props>) => {
  const [ref, setRef] = createSignal<HTMLElement>();
  const [tooltip, setTooltip] = createSignal<HTMLElement>();
  const [show, setShow] = createSignal(false);
  const [contentShow, setContentShow] = createSignal(false);

  let instance: Instance;
  let timeoutId: number;

  onCleanup(() => {
    if (instance) {
      instance.destroy();
    }
  })

  function onShow() {
    timeoutId = window.setTimeout(() => {
      setShow(true);
      setContentShow(true);
      initPopper();
      props.onShow?.();
    }, 250);
  }

  function onHide() {
    setContentShow(false);
    setTimeout(() => {
      window.clearTimeout(timeoutId);
      setShow(false);
      props.onHide?.();
    }, 200)
  }

  function initPopper() {
    const reference = ref();
    const tooltipRef = tooltip();

    if (reference && tooltipRef) {
      instance = createPopper(reference, tooltipRef, {
        placement: props.placement || 'bottom',
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
        tabIndex="0"
        class="inline-flex"
        classList={{[props.class || '']: !!props.class}}
        onMouseEnter={onShow}
        onFocus={onShow}
        onMouseLeave={onHide}
        onBlur={onHide}
      >
        {props.children}
      </span>

      <Show when={show()}>
        <Portal>
          <div class="z-50 relative" ref={setTooltip}>

            <Transition
              appear
              onBeforeEnter={el => (el as HTMLElement).style.opacity = '0'}
              onAfterEnter={el => (el as HTMLElement).style.opacity = '1'}
              onEnter={(el, done) => {
                const a = el.animate([{ opacity: 0 }, { opacity: 1 }], {
                  duration: 200
                });
                a.finished.then(done);
              }}
              onExit={(el, done) => {
                const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
                  duration: 100
                });
                a.finished.then(done);
              }}
            >
              <Show when={contentShow()}>
                <div class="rounded shadow-lg bg-base-300 overflow-hidden">
                  {props.content}
                </div>
              </Show>
            </Transition>

          </div>
        </Portal>
      </Show>
    </>
  )
}
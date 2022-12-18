import { createMemo, createSignal, JSXElement, Match, onCleanup, ParentProps, Show, Switch } from "solid-js"
import { Portal } from 'solid-js/web'
import { createPopper, Instance, Placement } from '@popperjs/core';
import { Transition } from "solid-transition-group";

const TooltipMessage = (props: ParentProps) => (
  <span class="p-2 px-4 rounded bg-base-100 flex gap-4 shadow-xl">
    {props.children}
  </span>
)

type Props = {
  content?: JSXElement;
  message?: JSXElement;
  class?: string;
  placement?: Placement;
  debounce?: number;

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
    console.log('messag', props.message);
    
    
    timeoutId = window.setTimeout(() => {
      setShow(true);
      setContentShow(true);
      initPopper();
      props.onShow?.();
    }, 200);
  }

  function onHide() {
    window.clearTimeout(timeoutId);
    setContentShow(false);

    setTimeout(() => {
      setShow(false);
      props.onHide?.();
    }, 180)
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
        classList={{ [props.class || '']: !!props.class }}
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
              onBeforeEnter={el => (el as HTMLElement).style.opacity = '0.3'}
              onAfterEnter={el => (el as HTMLElement).style.opacity = '1'}
              onEnter={(el, done) => {
                const a = el.animate([
                  { opacity: .3, transform: 'scale(0.7)' }, 
                  { opacity: 1, transform: 'scale(1)' }
                ], {
                  duration: 140,
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
                <Switch>
                  <Match when={props.content}>
                    {props.content}
                  </Match>
                  <Match when={props.message}>
                    <TooltipMessage>{props.message}</TooltipMessage>
                  </Match>
                </Switch>
              </Show>
            </Transition>

          </div>
        </Portal>
      </Show>
    </>
  )
}
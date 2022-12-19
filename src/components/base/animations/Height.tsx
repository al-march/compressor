import type { ParentProps } from "solid-js";
import { Transition } from "solid-transition-group";

type Props = {
  mode?: "inout" | "outin";
  appear?: boolean;
  onExit?: () => void;
}

export const Height = (props: ParentProps<Props>) => {
  const onExitDone = () => {
    props.onExit?.();
  };

  return (
    <Transition
      appear={props.appear}
      mode={props.mode}
      onEnter={async (el, done) => {
        await el.animate?.(
          [
            {
              height: 0
            },
            {
              height: el.scrollHeight + 'px',
            },
          ],
          {
            duration: 160,
            easing: 'ease',
          }
        ).finished;
        done();
      }}
    >
      {props.children}
    </Transition>
  );
}

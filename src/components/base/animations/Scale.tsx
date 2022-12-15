import type { ParentProps } from "solid-js";
import { Transition } from "solid-transition-group";

type Props = {
  mode?: "inout" | "outin";
  appear?: boolean;
}

export const Scale = (props: ParentProps<Props>) => {
  return (
    <Transition
      mode={props.mode || "outin"}
      appear={props.appear}
      onBeforeEnter={el => (el as HTMLElement).style.opacity = '0'}
      onAfterEnter={el => (el as HTMLElement).style.opacity = '1'}
      onEnter={(el, done) => {
        const a = el.animate(
          [
            { opacity: 0, transform: 'scale(0.8)' },
            { opacity: 1, transform: 'scale(1)' }
          ], {
          duration: 100,
          easing: 'cubic-bezier(0.1, -0.3, 0.2, 0)'
        });
        a.finished.then(done);
      }}
      onExit={(el, done) => {
        const a = el.animate([
          { opacity: 1, transform: 'scale(1)' },
          { opacity: 0, transform: 'scale(0.6)' },
        ], {
          duration: 150,
          easing: 'cubic-bezier(0.1, -0.3, 0.2, 0)'
        });
        a.finished.then(done);
      }}
    >
      {props.children}
    </Transition>
  )
}
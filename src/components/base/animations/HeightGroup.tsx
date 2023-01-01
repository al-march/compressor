import type { ParentProps } from "solid-js";
import { TransitionGroup } from "solid-transition-group";

export const HeightGroup = (props: ParentProps) => {
  return (
    <TransitionGroup
      onBeforeEnter={el => (el as HTMLElement).style.height = '0'}
      onAfterEnter={el => (el as HTMLElement).style.height = el.scrollHeight + 'px'}
      onEnter={(el, done) => {
        const a = el.animate(
          [
            { opacity: 0, height: 0 },
            { opacity: 1, height: el.scrollHeight + 'px' }
          ], {
          duration: 200,
          easing: 'cubic-bezier(0.1, -0.3, 0.2, 0)'
        });
        a.finished.then(done);
      }}
      onExit={(el, done) => {
        const a = el.animate([
          { opacity: 1, height: el.scrollHeight + 'px' },
          { opacity: 0, height: 0 }
        ], {
          duration: 100,
          easing: 'cubic-bezier(0.1, -0.3, 0.2, 0)'
        });
        a.finished.then(done);
      }}
    >
      {props.children}
    </TransitionGroup>
  )
}
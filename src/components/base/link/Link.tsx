import { ParentProps, JSX, splitProps, createMemo, onMount, createSignal } from "solid-js";

type Props = {
  to: string;
  class?: string;
} & JSX.DOMAttributes<HTMLAnchorElement>;

export const Link = (props: ParentProps<Props>) => {
  let ref: HTMLAnchorElement;

  const [local, others] = splitProps(props, ['to', 'class', 'classList']);
  const [isActive, setIsActive] = createSignal(false);
  const [activeClass, setActiveClass] = createSignal('');

  onMount(() => {
    const isActive = location.pathname === local.to;
    setIsActive(isActive);

    if (ref) {
      if (ref.classList.contains('btn')) {
        setActiveClass('btn-active');
      } else {
        setActiveClass('link-active');
      }
    }
  })

  return (
    <a
      ref={el => ref = el}
      href={local.to}
      classList={{
        [activeClass()]: !!isActive(),
        [local.class || '']: !!local.class,
        ...local.classList
      }}
      {...others}
    />
  )
}
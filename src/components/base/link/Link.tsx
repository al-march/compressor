import { ParentProps, JSX, splitProps, createMemo, onMount, createSignal } from "solid-js";

type Props = {
  to: string;
  class?: string;
} & JSX.DOMAttributes<HTMLAnchorElement>;

export const Link = (props: ParentProps<Props>) => {
  const [local, others] = splitProps(props, ['to', 'class', 'classList']);
  const [isActive, setIsActive] = createSignal(false);

  onMount(() => {
    const isActive = location.pathname === local.to;
    setIsActive(isActive);
  })

  return (
    <a
      href={local.to}
      classList={{
        'btn-active': !!isActive(),
        [local.class || '']: !!local.class,
        ...local.classList
      }}
      {...others}
    />
  )
}
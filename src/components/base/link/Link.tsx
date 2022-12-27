import { ParentProps, JSX, splitProps, onMount, createSignal } from "solid-js";

type AnchorProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement>;

type Props = {
  to: string;
  class?: string;
  activeClass?: string;
} & AnchorProps;

export const Link = (props: ParentProps<Props>) => {
  let ref: HTMLAnchorElement;

  const [local, others] = splitProps(props, [
    'to',
    'class',
    'classList',
    'activeClass',
  ]);

  const [isActive, setIsActive] = createSignal(false);
  const [activeClass, setActiveClass] = createSignal('');

  onMount(() => {
    const isActive = isIncludesPathname();
    setIsActive(isActive);

    if (ref) {
      if (local.activeClass) {
        setActiveClass(local.activeClass);
        return;
      }

      if (ref.classList.contains('btn')) {
        setActiveClass('btn-active');
      } else {
        setActiveClass('link-active');
      }
    }
  });

  function isIncludesPathname() {
    const pathname = location.pathname.replaceAll('/', '');
    const to = local.to.replaceAll('/', '');
    return pathname === to;
  };

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
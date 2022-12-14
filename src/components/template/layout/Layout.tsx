import type { ParentProps } from "solid-js";

type ContainerSize = 'sm';

type Props = {
  class?: string;
  size?: ContainerSize;
}

export const Container = (props: ParentProps<Props>) => {
  return (
    <div
      class="container p-2 py-6 md:p-4"
      classList={{
        [props.class || '']: !!props.class,
        'max-w-2xl': props.size === 'sm',
      }}
    >
      {props.children}
    </div>
  )
}
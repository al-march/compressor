import type { ParentProps } from "solid-js";

type Props = {
  class?: string;
  center?: boolean;
}

export const Heading = (props: ParentProps<Props>) => {
  return (
    <div
      role="heading"
      class="flex flex-col gap-4"
      classList={{
        [props.class || '']: !!props.class,
        'justify-center': props.center,
        'text-center': props.center,
      }}
    >
      {props.children}
    </div>
  )
}
import type { ParentProps } from "solid-js";

type Props = {
  class?: string;
}

export const Container = (props: ParentProps<Props>) => {
  return (
    <div class="container p-2 md:p-4" classList={{ [props.class || '']: !!props.class }}>
      {props.children}
    </div>
  )
}
import type { ParentProps } from "solid-js";

type Props = {
  class?: string;
}

export const H1 = (props: ParentProps<Props>) => (
  <h1 class="text-4xl font-bold" classList={{ [props.class || '']: !!props.class }}>
    {props.children}
  </h1>
)

export const H2 = (props: ParentProps<Props>) => (
  <h2 class="text-3xl font-bold" classList={{ [props.class || '']: !!props.class }}>
    {props.children}
  </h2>
)

export const H3 = (props: ParentProps<Props>) => (
  <h3 class="text-2xl font-bold" classList={{ [props.class || '']: !!props.class }}>
    {props.children}
  </h3>
)

export const H4 = (props: ParentProps<Props>) => (
  <h4 class="text-xl font-bold" classList={{ [props.class || '']: !!props.class }}>
    {props.children}
  </h4>
)
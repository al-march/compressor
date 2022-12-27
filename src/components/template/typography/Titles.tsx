import { ParentProps, JSX, splitProps } from "solid-js";

type Props = {
  class?: string;
} & JSX.HTMLAttributes<HTMLHeadingElement>;

export const H1 = (props: ParentProps<Props>) => {
  const [local, others] = splitProps(props, ['class', 'classList']);

  return (
    <h1
      class="text-4xl font-bold"
      classList={{
        [local.class || '']: !!props.class,
        ...local.classList
      }}
      {...others}
    >
      {props.children}
    </h1>
  )
}

export const H2 = (props: ParentProps<Props>) => {
  const [local, others] = splitProps(props, ['class', 'classList']);

  return (
    <h2
      class="text-3xl font-bold"
      classList={{
        [local.class || '']: !!props.class,
        ...local.classList
      }}
      {...others}
    >
      {props.children}
    </h2>
  )
}


export const H3 = (props: ParentProps<Props>) => {
  const [local, others] = splitProps(props, ['class', 'classList']);

  return (
    <h3
      class="text-2xl font-bold"
      classList={{
        [local.class || '']: !!props.class,
        ...local.classList
      }}
      {...others}
    >
      {props.children}
    </h3>
  )
}


export const H4 = (props: ParentProps<Props>) => {
  const [local, others] = splitProps(props, ['class', 'classList']);

  return (
    <h4
      class="text-xl font-bold"
      classList={{
        [local.class || '']: !!props.class,
        ...local.classList
      }}
      {...others}
    >
      {props.children}
    </h4>
  )
}

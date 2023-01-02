import { splitProps, JSX } from "solid-js"

type Props = {} & JSX.HTMLAttributes<HTMLSpanElement>;

export const Divider = (props: Props) => {
  const [local, others] = splitProps(props, [
    'class',
    'classList'
  ])

  return (
    <span
      class="divider"
      classList={{
        [local.class || '']: !!local.class,
        ...local.classList
      }}
      {...others}
    />
  )
}
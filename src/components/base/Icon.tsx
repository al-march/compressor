import { JSX, splitProps } from "solid-js"

type Props = {
  code: string;
  class?: string;
} & JSX.DOMAttributes<HTMLSpanElement>;

export const Icon = (props: Props) => {
  const [local, others] = splitProps(props, ['class', 'code']);
  
  return (
    <span class={"material-symbols-outlined" + (local.class ? ` ${local.class}` : '')} {...others}>
      {local.code}
    </span>
  )
}
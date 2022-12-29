import { JSX, splitProps } from "solid-js"

type Props = {

} & JSX.HTMLAttributes<HTMLImageElement>;

export const AppLogo = (props: Props) => {
  const [local, others] = splitProps(props, ['class', 'classList']);

  return (
    <img
      class="w-full h-full"
      classList={{
        [local.class || '']: !!local.class,
        ...local.classList
      }}
      src="/logo.png"
      alt="App Logo"
      {...others}
    />
  )
}
import { Theme } from "@app/constants";
import { createMemo, JSX, splitProps } from "solid-js"

type Props = {
  theme?: Theme;
} & JSX.HTMLAttributes<HTMLImageElement>;

export const AppLogo = (props: Props) => {
  const [local, others] = splitProps(props, ['class', 'classList', 'theme']);

  const logo = createMemo(() => props.theme === Theme.LIGHT
    ? '/logo-light.svg'
    : '/logo-dark.svg'
  );

  return (
    <img
      class="w-full h-full"
      classList={{
        [local.class || '']: !!local.class,
        ...local.classList
      }}
      src={logo()}
      alt="App Logo"
      {...others}
    />
  )
}
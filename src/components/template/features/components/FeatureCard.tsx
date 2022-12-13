import type { JSXElement, ParentProps } from "solid-js";

type Props = {
  reverse?: boolean;
  icon?: JSXElement;
  class?: string;
}

export const FeatureCard = (props: ParentProps<Props>) => {
  return (
    <div
      class="flex justify-center items-center gap-4 sm:gap-20"
      classList={{
        [props.class || '']: !!props.class,
        'flex-row-reverse': !!props.reverse
      }}
    >
      <article class="sm:w-6/12">
        {props.children}
      </article>

      <div class="w-24 sm:w-48 shrink-0">
        {props.icon}
      </div>
    </div>
  )
}

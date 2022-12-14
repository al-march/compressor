import type { DaisyColor } from "@app/constants";
import { JSXElement, ParentProps, JSX, splitProps } from "solid-js";
import { H4 } from "../typography";

type CardContainerProps = {
  class?: string;
} & JSX.HTMLAttributes<HTMLDivElement>;

export const CardContainer = (props: ParentProps<CardContainerProps>) => {
  const [local, others] = splitProps(props, ['class', 'classList', 'children']);

  return (
    <div
      class="flex items-start justify-center gap-4 flex-wrap"
      classList={{
        [local.class || '']: !!props.class,
        ...local.classList
      }}
      {...others}
    >
      {local.children}
    </div>
  )
}

type CardProps = {
  icon?: string;
  title?: JSXElement;
  description?: JSXElement;
  color?: DaisyColor;
  full?: boolean;
  class?: string;
}

export const Card = (props: ParentProps<CardProps>) => {
  return (
    <article
      class="flex flex-col gap-2 items-center justify-center text-center"
      classList={{
        [props.class || '']: !!props.class,
        'w-48': !props.full
      }}
    >
      <span
        class="material-symbols-outlined text-4xl"
        classList={{
          'text-primary': props.color === 'primary',
          'text-secondary': props.color === 'secondary',
          'text-accent': props.color === 'accent',
          'text-info': props.color === 'info',
          'text-success': props.color === 'success',
          'text-warning': props.color === 'warning',
          'text-error': props.color === 'error',
        }}
      >
        {props.icon}
      </span>

      <H4>{props.title}</H4>
      <p>{props.description}</p>

      {props.children}
    </article>
  )
}
import type { DaisyColor } from "@app/constants";
import { createMemo, JSX, JSXElement, ParentProps, splitProps } from "solid-js"
import { CardContainer } from "./layout";
import { H2, H4, Heading } from "./typography";


type CardProps = {
  position?: string;
  icon?: string;
  title?: JSXElement;
  description?: JSXElement;
  color?: DaisyColor;
  full?: boolean;
  class?: string;
} & JSX.HTMLAttributes<HTMLElement>;

const Card = (props: ParentProps<CardProps>) => {
  const [local, others] = splitProps(props, [
    'icon',
    'title',
    'description',
    'color',
    'full',
    'position',
    'class',
    'classList',
    'children'
  ])

  const id = createMemo(() => 'step-' + local.position);

  return (
    <article
      id={id()}
      itemprop="step" itemscope itemtype="http://schema.org/HowToStep"
      class="flex flex-col gap-2 items-center justify-center text-center"
      classList={{
        [props.class || '']: !!local.class,
        'w-48': !local.full,
        ...local.classList
      }}
      {...others}
    >
      <meta itemprop="position" content={local.position} />
      <meta itemprop="url" content={'https://compressor.monster/#' + id()} />
      <span
        class="material-symbols-outlined text-4xl"
        classList={{
          'text-primary': local.color === 'primary',
          'text-secondary': local.color === 'secondary',
          'text-accent': local.color === 'accent',
          'text-info': local.color === 'info',
          'text-success': local.color === 'success',
          'text-warning': local.color === 'warning',
          'text-error': local.color === 'error',
        }}
      >
        {local.icon}
      </span>

      <H4 itemprop="name">{local.title}</H4>

      <div
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/HowToDirection"
      >
        <p itemprop="text">{local.description}</p>
      </div>

      {local.children}
    </article>
  )
}


type Props = {
  heading: JSXElement;
} & JSX.HTMLAttributes<HTMLElement>;

const HowToUse = (props: ParentProps<Props>) => {
  const [local, others] = splitProps(props, [
    'heading',
    'class',
    'classList',
    'children'
  ]);

  return (
    <section
      class="flex flex-col gap-6"
      classList={{
        [local.class || '']: !!props.class,
        ...local.classList
      }}
      itemscope
      itemtype="http://schema.org/HowTo"
      {...others}
    >
      <Heading center>
        <H2 itemprop="name">
          {local.heading}
        </H2>
      </Heading>

      <CardContainer>
        {local.children}
      </CardContainer>
    </section>
  )
}

export const HowTo = Object.assign(HowToUse, {
  Card
})
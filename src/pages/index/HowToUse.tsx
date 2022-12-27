import { CardContainer } from "@app/components/template/layout";
import { H4 } from "@app/components/template/typography";
import type { DaisyColor } from "@solsy/ui";
import { JSXElement, ParentProps, JSX, splitProps } from "solid-js"

type CardProps = {
  position?: string;
  icon?: string;
  title?: JSXElement;
  description?: JSXElement;
  color?: DaisyColor;
  full?: boolean;
  class?: string;
} & JSX.HTMLAttributes<HTMLElement>;

export const Card = (props: ParentProps<CardProps>) => {
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

  return (
    <article
      itemprop="step" itemscope itemtype="http://schema.org/HowToSection"
      class="flex flex-col gap-2 items-center justify-center text-center"
      classList={{
        [props.class || '']: !!local.class,
        'w-48': !local.full,
        ...local.classList
      }}
      {...others}
    >
      <meta itemprop="position" content={local.position} />
      <span
        itemprop="image"
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
      <p itemprop="text">{local.description}</p>

      {local.children}
    </article>
  )
}

export const HowToUse = () => {
  return (
    <CardContainer>
      <Card
        position="1"
        color="success"
        icon="add_photo_alternate"
        title="Загрузите"
        description={(
          <span>
            Фотографии на сайт, нажав на кнопку{' '}
            <a class="link link-success" itemprop="url" href="#compressor">выбрать</a>
          </span>
        )}
      />

      <Card
        position="2"
        color="success"
        icon="settings"
        title="Настройте"
        description="Выберете параметры сжатия"
      />

      <Card
        position="3"
        color="success"
        icon="download"
        title="Скачайте"
        description="Выгрузьте оптимизированные картинки"
      />
    </CardContainer>
  )
}
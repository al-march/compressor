import { H4 } from "@app/components/template/typography";
import type { DaisyColor } from "@solsy/ui";
import { JSXElement, ParentProps, JSX, splitProps, createMemo } from "solid-js"

type CardProps = {
  position?: string;
  reverse?: boolean;
  image?: JSXElement;
  title?: JSXElement;
  description?: JSXElement;
  color?: DaisyColor;
  class?: string;
} & JSX.HTMLAttributes<HTMLElement>;

export const Card = (props: ParentProps<CardProps>) => {
  const [local, others] = splitProps(props, [
    'position',
    'reverse',
    'image',
    'title',
    'description',
    'color',
    'class',
    'classList',
    'children'
  ])

  const id = createMemo(() => 'step-' + local.position)

  return (
    <article
      id={id()}
      itemprop="step" itemscope itemtype="http://schema.org/HowToStep"
      class="flex items-center gap-2"
      classList={{
        [props.class || '']: !!local.class,
        'flex-row-reverse': local.reverse,
        ...local.classList
      }}
      {...others}
    >
      <meta itemprop="position" content={local.position} />
      <meta itemprop="url" content={'https://compress.monster/#' + id()} />

      <div class="w-[80px] shrink-0">
        <img itemprop="image" src={`how-to-compress/step-${props.position}.png`} alt="" />
      </div>

      <section class="flex flex-col gap-2">
        <H4 itemprop="name">{local.title}</H4>

        <div
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/HowToDirection"
        >
          <p itemprop="text">{local.description}</p>
        </div>

        {local.children}
      </section>
    </article>
  )
}

export const HowToUse = () => {
  return (
    <div class="flex flex-col gap-6">
      <Card
        position="1"
        title="Загрузите изображения"
        description={(
          <span>
            Выберете картинки на своем устройстве и перенесите на область загрузки файлов на сайт.
            <br />
            Или воспользуйтесь соответствующей кнопкой{' '}
            <a class="link link-success" itemprop="url" href="#compressor">выбрать</a>
          </span>
        )}
      />

      <div class="w-full flex items-center justify-center">
        <img class="h-[40px]" src="/arrow-down.png" alt="" />
      </div>

      <Card
        position="2"
        title="Настройте параметры"
        description={(
          <span>
            При необходимости отредактируйте настройки сжатия картинок.
            <br />
            Измените качество изображения, его размер, префикс, суфикс и другие параметры
            для лучшего результата.
          </span>
        )}
      />

      <div class="w-full flex items-center justify-center">
        <img class="h-[40px]" src="/arrow-down.png" alt="" />
      </div>

      <Card
        position="3"
        title="Выгрузьте результат"
        description={(
          <span>
            Скачайте сжатые изображения на свое устройство.
            <br />
            Скачать можно как отдельно сжатое изображение, так и все разом в виде zip архива.
          </span>
        )}
      />
    </div>
  )
}
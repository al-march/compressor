import { Card, CardContainer } from "./layout"

export const HowToUse = () => {
  return (
    <CardContainer>
      <Card
        color="success"
        icon="add_photo_alternate"
        title="Загрузите"
        description={(
          <span>
            Фотографии на сайт, нажав на кнопку{' '}
            <a class="link link-success" href="#compressor">выбрать</a>
          </span>
        )}
      />

      <Card
        color="success"
        icon="settings"
        title="Настройте"
        description="Выберете параметры сжатия"
      />

      <Card
        color="success"
        icon="download"
        title="Скачайте"
        description="Выгрузьте оптимизированные картинки"
      />
    </CardContainer>
  )
}
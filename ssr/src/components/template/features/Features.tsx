import { FeatureCard } from './components';

export const Features = () => {
  return (
    <>
      <FeatureCard
        class="mb-8"
        icon={<img src="speed.svg" alt="" />}
      >
        <h2 class="text-2xl mb-8">
          <strong class="font-black">Легче</strong> изображения - выше <strong class="font-black">скорость</strong>!
        </h2>

        <p class="font-light leading-6">
          Изображения в интернете часто слишком большие для использования.
          Размер картинок напрямую влияет на рейтинг сайта и комфорт пользователей.
        </p>
      </FeatureCard>

      <FeatureCard
        class="mb-8"
        reverse
        icon={<img src="rating.svg" alt="" />}
      >
        <h2 class="text-2xl mb-8">
          Оптимизируйте <strong class="font-black">Lighthouse</strong> и <strong class="font-black">SEO</strong>
        </h2>

        <p class="font-light leading-6">
          Сжатие картинок без ущерба для сайта скинуть несколько мегабайт без потерь в качестве <br />
          Получите бесплатный прирост балов в Lighthouse, подняв свой рейтинг в поисковой выдаче.
        </p>
      </FeatureCard>

      <FeatureCard
        icon={<img src="quality.svg" alt="" />}
      >
        <h2 class="text-2xl mb-8">
          <strong class="font-black">Качественное</strong> и <strong class="font-black">неограниченное</strong> сжатие изображений
        </h2>

        <p class="font-light leading-6">
          Здесь вы можете сжать неограниченное кол-во изображений любого размера.
          Это безопасно и быстро - ваши картинки никуда не загружаются, обрабатываются
          исключительно внутри браузера.
        </p>
      </FeatureCard>
    </>
  )
}
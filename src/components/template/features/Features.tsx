import { H2 } from '../typography';
import { FeatureCard } from './components';

export const Features = () => {
  return (
    <div
      itemscope itemtype="http://schema.org/Product"
    >
      <FeatureCard
        class="mb-8"
        icon={<img itemprop="image" src="speed.svg" alt="" />}
      >
        <H2 itemprop="name" class="mb-4">
          <strong class="font-black">Легче</strong> изображения - <br /> выше <strong class="font-black">скорость</strong>!
        </H2>

        <p itemprop="description" class="font-light leading-6">
          Изображения в интернете часто слишком большие для использования.
          Размер картинок напрямую влияет на рейтинг сайта и комфорт пользователей.
        </p>
      </FeatureCard>

      <FeatureCard
        class="mb-8"
        reverse
        icon={<img itemprop="image" src="rating.svg" alt="" />}
      >
        <H2 itemprop="name" class="mb-4">
          Оптимизируйте <strong class="font-black">Lighthouse</strong> и <strong class="font-black">SEO</strong>
        </H2>

        <p itemprop="description" class="font-light leading-6">
          Сжатие картинок без ущерба для сайта скинуть несколько мегабайт без потерь в качестве <br />
          Получите бесплатный прирост балов в Lighthouse, подняв свой рейтинг в поисковой выдаче.
        </p>
      </FeatureCard>

      <FeatureCard
        icon={<img itemprop="image" src="quality.svg" alt="" />}
      >
        <H2 itemprop="name" class="mb-4">
          <strong class="font-black">Качественное</strong> и <strong class="font-black">неограниченное</strong> сжатие изображений
        </H2>

        <p itemprop="description" class="font-light leading-6">
          Здесь вы можете сжать неограниченное кол-во изображений любого размера.
          Это безопасно и быстро - ваши картинки никуда не загружаются, обрабатываются
          исключительно внутри браузера.
        </p>
      </FeatureCard>
    </div>
  )
}
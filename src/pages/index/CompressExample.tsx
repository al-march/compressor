import { ImageCompareSlider, Loader, MouseParalax } from "@app/components/base"
import { Scale } from "@app/components/base/animations";
import { ResultStats } from "@app/components/compress/result";
import { CompressImage } from "@app/models";
import { compressorService } from "@app/services";
import { createSignal, onMount, Show } from "solid-js"

export const CompressExample = () => {
  const [load, setLoad] = createSignal(true);
  const [img, setImg] = createSignal<File>();
  const [images, setImages] = createSignal<CompressImage[]>([]);
  const [beforeSrc, setBeforeSrc] = createSignal('');
  const [afterSrc, setAfterSrc] = createSignal('');

  onMount(async () => {
    await fetch('/compress-example.jpeg')
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], 'example.jpeg', blob)
        setImg(file)
      })

    const file = img();

    if (file) {
      const before = new CompressImage(file);
      const beforeSrc = await CompressImage.createSrc(file);

      const compressed = await compressorService.image(file, { quality: .6 });
      const afterSrc = await CompressImage.createSrc(compressed);
      before.compress = compressed;

      setBeforeSrc(beforeSrc);
      setAfterSrc(afterSrc);
      setImages([before]);
      setLoad(false);
    }
  })

  return (
    <Scale mode="inout">
      <Show when={!load()} fallback={
        <div class="flex items-center justify-center">
          <Loader center />
        </div>
      }>
        <MouseParalax>
          <div class="flex flex-col gap-8">
            <ImageCompareSlider
              class="rounded overflow-hidden"
              before={<img src={beforeSrc()} alt="before image" />}
              after={<img src={afterSrc()} alt="after image" />}
            />

            <div class="flex justify-evenly items-center gap-4">
              <ResultStats images={images()} />
            </div>
          </div>
        </MouseParalax>
      </Show>
    </Scale>
  )
}
import { ImageCompareSlider } from "@app/components/base"
import { ResultStats } from "@app/components/compress/result";
import { H3 } from "@app/components/template/typography";
import { CompressImage } from "@app/models";
import { compressorService } from "@app/services";
import { createSignal, onMount } from "solid-js"

export const CompressExample = () => {
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
    }
  })

  return (
    <div class="flex flex-col gap-8">
      <ImageCompareSlider
        class="rounded overflow-hidden"
        before={<img src={beforeSrc()} alt="before image" />}
        after={<img src={afterSrc()} alt="before image" />}
      />

      <div class="flex justify-evenly items-center gap-4">
        <H3 class="text-error">До</H3>
        <ResultStats images={images()} />
        <H3 class="text-success">После</H3>
      </div>
    </div>
  )
}
import { ImageCompareSlider, MouseParalax } from "@app/components/base"

export const CompressExample = () => {
  return (
    <MouseParalax>
      <ImageCompareSlider
        class="rounded"
        before={<img src="/compress-example.jpeg" alt="before image" />}
        after={<img src="/compress-example-compressed.jpeg" alt="after image" />}
      />
    </MouseParalax>
  )
}
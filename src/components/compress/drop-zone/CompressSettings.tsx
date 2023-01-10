import { createSignal } from "solid-js"
import { CompressSettings as Settings, ImageStore } from "../Store";

const QualityControl = (props: { value: number, onChange?: (v: number) => void }) => {
  const [v, setV] = createSignal((props.value || 0.8) * 100);

  function updateValue(e: InputEvent) {
    const value = Number((e.target as HTMLInputElement).value);
    setV(value);
    props.onChange?.(value);
  }

  return (
    <div class="form-control w-full">
      <label class="label">
        <span class="label-text">Качество</span>
        <span class="label-text-alt">от 20 - 100%</span>
      </label>
      <div class="flex gap-4">
        <input
          type="range"
          min="20"
          max="100"
          value={v()}
          class="range range-sm range-accent"
          onInput={updateValue}
        />
        <span>{v()}</span>
      </div>
    </div>
  )
}

export const CompressSettings = () => {
  const store = ImageStore;

  const defaultValue: Settings = {
    quality: store.state.settings.quality,
    prefix: store.state.settings.prefix || '',
    suffix: store.state.settings.suffix || '',
    width: store.state.settings.width,
    height: store.state.settings.height,
  }

  return (
    <div class="h-72 flex items-center justify-center">
      <article class="py-2 sm:py-10 w-full flex flex-col">

        <QualityControl
          value={defaultValue.quality}
          onChange={(v) => store.mergeSettings({ quality: v / 100 })}
        />

        <section class="w-full flex flex-row gap-2">
          <div class="form-control max-w-full w-1/2">
            <label class="label">
              <span class="label-text">Ширина</span>
              <span class="label-text-alt">*для всех</span>
            </label>
            <input
              type="number"
              placeholder="Введите число"
              class="input input-sm input-bordered w-full"
              value={defaultValue.width}
              onInput={e => store.mergeSettings({ width: Number(e.currentTarget.value) })}
            />
          </div>

          <div class="form-control max-w-full w-1/2">
            <label class="label">
              <span class="label-text">Высота</span>
              <span class="label-text-alt">*для всех</span>
            </label>
            <input
              type="number"
              placeholder="Введите число"
              class="input input-sm input-bordered w-full"
              value={defaultValue.height}
              onInput={e => store.mergeSettings({ height: Number(e.currentTarget.value) })}
            />
          </div>
        </section>

        <section class="w-full flex flex-row gap-2">
          <div class="form-control max-w-full w-1/2">
            <label class="label">
              <span class="label-text">Префикс</span>
            </label>
            <input
              type="text"
              placeholder="Префикс-"
              class="input input-sm input-bordered w-full"
              value={defaultValue.prefix}
              onInput={e => store.mergeSettings({ prefix: e.currentTarget.value })}
            />
          </div>
          <div class="form-control max-w-full w-1/2">
            <label class="label">
              <span class="label-text">Суффикс</span>
            </label>
            <input
              type="text"
              placeholder="-Суфикс"
              class="input input-sm input-bordered w-full"
              value={defaultValue.suffix}
              onInput={e => store.mergeSettings({ suffix: e.currentTarget.value })}
            />
          </div>
        </section>
      </article>
    </div>
  )
}
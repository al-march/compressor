import { debounceTime, Observable, Subject } from "rxjs";
import { createStore } from "solid-js/store";
import type { CompressImage } from "../../models/image.model";

export type CompressSettings = {
  quality: number;
  width?: number;
  height?: number;
  prefix?: string;
  suffix?: string;
}

export type ImageCompressorState = {
  images: Set<CompressImage>;
  settings: CompressSettings;

  shouldRecompress$: Observable<CompressSettings>
}

const settings$ = new Subject<CompressSettings>();

const defaultSettings: CompressSettings = {
  quality: .8,
}

const shouldRecompress$ = new Subject<CompressSettings>();

const [state, setState] = createStore<ImageCompressorState>({
  images: new Set(),
  settings: defaultSettings,

  shouldRecompress$: shouldRecompress$.pipe(
    debounceTime(200),
  ),
});

function setImage(image: CompressImage) {
  state.images.add(image);
  setState('images', new Set(state.images));
}

function setImages(images: CompressImage[]) {
  const set = new Set(state.images);
  images.forEach(img => set.add(img));
  setState('images', set);
}

function removeImage(image: CompressImage) {
  const images = new Set(state.images);
  images.delete(image);
  setState('images', images);
}

function compressImage(image: CompressImage) {
  state.images.add(image);
  setState('images', new Set(state.images));
}

function reset() {
  setState('images', new Set());
}

function setSettings(settings: CompressSettings) {
  setState('settings', settings);
  settings$.next(settings);
}

function mergeSettings(settings: Partial<CompressSettings>) {
  const s = Object.assign({ ...state.settings }, settings);
  setSettings(s);
}

function recompressAll() {
  shouldRecompress$.next({ ...state.settings });
}

settings$.pipe(debounceTime(300)).subscribe(() => {
  console.log('recompress')
  recompressAll();
})

export const ImageStore = Object.assign({}, {
  state,
  setImage,
  setImages,
  removeImage,
  compressImage,
  reset,
  setSettings,
  mergeSettings,
  recompressAll
})

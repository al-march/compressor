import { createStore } from "solid-js/store";
import type { ConvertImage } from "./ConvertImage";

export enum ConvertTypes {
  INITIAL = 'initial',
  PNG = 'image/png',
  JPEG = 'image/jpeg',
  WEBP = 'image/webp',
}

export type ConvertSettings = {
  type: ConvertTypes;
}

export type ConvertState = {
  images: Set<ConvertImage>;
  settings: ConvertSettings;
}

const defaultSettings: ConvertSettings = {
  type: ConvertTypes.INITIAL
}

const [state, setState] = createStore<ConvertState>({
  images: new Set(),
  settings: defaultSettings,
});

function set(images: ConvertImage[]) {
  const list = images.map(img => ({ ...img, type: state.settings.type }));
  setState('images', new Set([...state.images, ...list]));
}

function remove(image: ConvertImage) {
  const set = new Set(state.images);
  set.delete(image);
  setState('images', set);
}

function reset() {
  setState('images', new Set());
}

function setType(type: ConvertTypes) {
  setState('settings', 'type', type);
}

export const ConvertStore = Object.assign({}, {
  state,
  set,
  remove,
  reset,
  setType
})
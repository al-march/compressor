import { createStore } from "solid-js/store";
import type { Image, CompressImage } from "../../models/image.model";

type ImageCompressorState = {
  images: Set<CompressImage>;
}

const [state, setState] = createStore<ImageCompressorState>({
  images: new Set(),
});

function setImage(image: CompressImage) {
  state.images.add(image);
  setState('images', new Set(state.images));
}

function setImages(images: CompressImage[]) {
  setState('images', new Set(images));
}

function removeImage(image: CompressImage) {
  state.images.delete(image);
  setState('images', new Set(state.images));
}

function compressImage(image: CompressImage) {
  state.images.add(image);
  setState('images', new Set(state.images));
}

function reset() {
  setState('images', new Set());
}

export const ImageStore = Object.assign({}, {
  state,
  setImage,
  setImages,
  removeImage,
  compressImage,
  reset
})
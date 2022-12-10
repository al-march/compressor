import { createStore } from "solid-js/store";
import type { Image } from "../../models/image.model";

type ImageCompressorState = {
  images: Set<Image>;
}

const [state, setState] = createStore<ImageCompressorState>({
  images: new Set(),
});

function setImage(image: Image) {
  state.images.add(image);
  setState('images', new Set(state.images));
}

function setImages(images: Image[]) {
  setState('images', new Set(images));
}

function removeImage(image: Image) {
  state.images.delete(image);
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
  reset
})
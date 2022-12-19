import { createSignal, JSXElement, onMount, ParentProps } from "solid-js";
import './ImageCompareSlider.css';

type Position = {
  x: number;
  y: number;
}

type Props = {
  before: JSXElement;
  after: JSXElement;

  class?: string;
}

export const ImageCompareSlider = (props: ParentProps<Props>) => {
  let ref: HTMLElement;

  const [position, setPosition] = createSignal<Position>({ x: 0, y: 0 });

  onMount(() => {
    if (ref) {
      const width = ref.scrollWidth;
      setPosition({ x: width / 2, y: 0 });
    }
  })

  function onPointerMove(event: PointerEvent) {
    if (ref) {
      const coords = getRelativeCoordinates(event, ref);
      setPosition(coords);
    }
  }

  return (
    <div
      ref={el => ref = el}
      class="w-full h-full flex items-center justify-center relative overflow-hidden"
      classList={{ [props.class || '']: !!props.class }}
      onPointerMove={onPointerMove}
    >
      <div class="w-full h-full compare-img compare-img--before relative">
        <div class="relative block w-full h-full">
          {props.after}
        </div>

        <div
          class="compare-img compare-img--after"
          style={{ 'width': `${position().x}px` }}
        >
          <div class="relative block w-full h-full">
            {props.before}
          </div>
        </div>
      </div>

      <div
        class="compare-divider z-10"
        style={{ 'left': `${position().x}px` }}
      >
        <div class="w-0.5 h-full bg-white" />
        <svg class="compare-divider__arrows" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
          <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" stroke-width="1" fill="#fff" vector-effect="non-scaling-stroke"></path>
        </svg>
      </div>

      <label class="compare-label absolute top-6 right-5 font-black">После</label>
      <label class="compare-label absolute top-6 left-5 font-black">До</label>
    </div>
  )
}

function getRelativeCoordinates(event: PointerEvent, element: HTMLElement) {

  const position = {
    x: event.pageX,
    y: event.pageY
  };

  const offset = {
    left: element.offsetLeft,
    top: element.offsetTop
  };

  let reference = element.offsetParent;

  while (reference && reference instanceof HTMLElement) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
  };

}
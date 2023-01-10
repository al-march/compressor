import { createSignal, ParentProps } from "solid-js";

export const MouseParalax = (props: ParentProps) => {

  const [wrapperRef, setWrapperRef] = createSignal<HTMLElement>();
  const [deg, setDeg] = createSignal({ x: 0, y: 0 });
  let dimensions: DOMRect;

  function onMouseMove(e: MouseEvent) {
    if (!dimensions) {
      return;
    }

    const cursorPositionInsideSlider = {
      x: e.clientX - Math.round(dimensions.left),
      y: e.clientY - Math.round(dimensions.top)
    };

    const deg = {
      x: 5 * ((cursorPositionInsideSlider.x / dimensions.width) * 2 - 1),
      y: 5 * ((cursorPositionInsideSlider.y / dimensions.height) * 2 - 1)
    };

    setDeg(deg);
  }


  return (
    <div
      ref={el => {
        setTimeout(() => {
          setWrapperRef(el);
          dimensions = el.getBoundingClientRect();
        })
      }}
      style={{ 'perspective': wrapperRef()!?.scrollWidth / 1.6 + 'px' }}
      onMouseMove={onMouseMove}
    >
      <div
        style={{
          'transform': `rotateX(${-deg().y}deg) rotateY(${deg().x}deg)`
        }}
      >
        {props.children}
      </div>
    </div>
  )
}
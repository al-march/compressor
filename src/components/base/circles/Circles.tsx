import { mergeProps } from "solid-js";
import './Circles.css';


type Props = {
  width?: string;
  height?: string;
}

export const Circles = (props: Props) => {
  props = mergeProps({ width: '200px', height: '200px' }, props);

  return (
    <div class="circles-wrapper absolute top-0 left-0 zi-1" style={{
      'width': props.width,
      'height': props.height
    }}>
      <div class="circle circle-lg">
        <div class="circle circle-md">
          <div class="circle circle-sm"></div>
        </div>
      </div>
    </div>
  )
}
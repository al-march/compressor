import { ConvertTypes } from "../../store"

type Props = {
  type?: ConvertTypes;

  onChange?: (type: ConvertTypes) => void;
}

export const ConvertTypeBtns = (props: Props) => {

  function isActive(type: ConvertTypes) {
    return type === props.type;
  }

  function selectType(type: ConvertTypes) {
    return () => props.onChange?.(type);
  }

  return (
    <div class="flex gap-1">
      <button
        class="btn btn-sm btn-outline"
        classList={{
          'btn-active': isActive(ConvertTypes.INITIAL)
        }}
        onClick={selectType(ConvertTypes.INITIAL)}
        type="button"
      >
        Изначальный
      </button>
      <button
        class="btn btn-sm btn-outline"
        classList={{
          'btn-active': isActive(ConvertTypes.JPEG)
        }}
        onClick={selectType(ConvertTypes.JPEG)}
        type="button"
      >
        jpeg
      </button>
      <button
        class="btn btn-sm btn-outline"
        classList={{
          'btn-active': isActive(ConvertTypes.PNG)
        }}
        onClick={selectType(ConvertTypes.PNG)}
        type="button"
      >
        png
      </button>
      <button
        class="btn btn-sm btn-outline"
        classList={{
          'btn-active': isActive(ConvertTypes.WEBP)
        }}
        onClick={selectType(ConvertTypes.WEBP)}
        type="button"
      >
        webp
      </button>
    </div>
  )
}
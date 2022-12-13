const LoaderSizes = ['xs', 'sm', 'md', 'lg'] as const;
export type LoaderSize = typeof LoaderSizes[number];

type Props = {
  class?: string;
  size?: LoaderSize;
}

export const Loader = (props: Props) => {
  return (
    <div
      class="lds-ring w-8 h-8"
      classList={{
        [props.class || '']: !!props.class,
        'w-2 h-2': props.size === 'xs',
        'w-4 h-4': props.size === 'sm',
        'w-8 h-8': props.size === 'md',
        'w-12 h-12': props.size === 'lg',
      }}
    >
      <div></div><div></div><div></div><div></div>
    </div>
  )
}
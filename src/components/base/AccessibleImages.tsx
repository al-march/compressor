import { AccessibleImages } from "@app/constants";
import { For } from "solid-js"

type Props = {
  block?: boolean;
  class?: string;
}

export const AccessibleImagesBadges = (props: Props) => {
  return (
    <span
      class="gap-1"
      classList={{
        [props.class || '']: !!props.class,
        'inline-flex': !props.block,
        'flex': !!props.block
      }}
    >
      <For each={AccessibleImages}>
        {img => <span class="badge badge-primary">.{img}</span>}
      </For>
    </span>
  )
}
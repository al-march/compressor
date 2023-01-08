import { checkBackendStatus } from "@app/services/api";
import { tick } from "@app/services/utils";
import { createSignal, Match, onMount, ParentProps, Switch } from "solid-js"
import { Scale } from "./animations"
import { Loader } from "./Loader"

export const HasBackend = (props: ParentProps) => {
  const [load, setLoad] = createSignal(true);
  const [hasBackend, setHasBackend] = createSignal(false);

  onMount(async () => {
    fetchStatus();
  })

  async function fetchStatus() {
    setLoad(true);
    setHasBackend(await checkBackendStatus());
    await tick(500);
    setLoad(false);
  }

  return (
    <Scale mode="outin" appear>
      <Switch fallback={
        <div class="flex h-full items-center justify-center m-auto">
          <Loader />
        </div>
      }>
        <Match when={!load() && hasBackend()}>
          <div>
            {props.children}
          </div>
        </Match>
        <Match when={!load() && !hasBackend()}>
          <div class="flex flex-col h-full items-center justify-center m-auto">
            <p class="flex items-center gap-2 mb-2">
              <span>Сервер недоступен =(</span>
            </p>
            <button
              type="button"
              class="btn btn-ghost btn-sm text-warning gap-1"
              onClick={() => fetchStatus()}
            >
              Перезагрузить

              <span class="material-symbols-outlined">
                autorenew
              </span>
            </button>
          </div>
        </Match>
      </Switch>
    </Scale>
  )
}
import { AppStore } from "@app/stores";
import type { ParentProps } from "solid-js";

export const Drawer = (props: ParentProps) => {
  const { drawer } = AppStore;

  return (
    <div class="drawer">
      <input
        type="checkbox"
        class="drawer-toggle"
        checked={drawer.isOpen}
      />
      <div class="drawer-content">
        {props.children}
      </div>
      <div class="drawer-side">
        <label class="drawer-overlay" onClick={drawer.close}></label>

        <div class="flex flex-col w-80 bg-base-100 text-base-content">
          <header class="navbar bg-base-200">
            <a class="btn btn-ghost normal-case text-xl flex gap-2" href="/">
              <span class="material-symbols-outlined">
                home
              </span>
              Compressor
            </a>
          </header>

          <ul class="menu menu-compact p-2">
            <li onClick={drawer.close}><a href="/about">О продукте</a></li>
            <li onClick={drawer.close}><a href="/features">Возможности</a></li>
            <li onClick={drawer.close}><a href="/contact">Контакты</a></li>
            <li onClick={drawer.close}><a href="/faq">FAQ</a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
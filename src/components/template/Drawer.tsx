import { AppStore } from "@app/stores";
import type { ParentProps } from "solid-js";
import { Icon } from "../base";

export const Drawer = (props: ParentProps) => {
  const { drawer } = AppStore;

  return (
    <div class="drawer">
      <input
        type="checkbox"
        class="drawer-toggle"
        checked={drawer.isOpen}
      />
      <div class="drawer-content scroll-smooth">
        {props.children}
      </div>
      <div class="drawer-side">
        <label class="drawer-overlay" onClick={drawer.close}></label>

        <div class="flex flex-col w-80 bg-base-100 text-base-content">
          <header class="navbar bg-base-200">
            <a class="btn btn-ghost normal-case text-xl flex gap-2" href="/">
              Compressor
            </a>
          </header>

          <div class="flex-1 flex flex-col py-2">
            <ul class="menu menu-compact p-2">
              <li onClick={drawer.close}>
                <a href="/"><Icon code="home" /> Главная</a>
              </li>
              <li onClick={drawer.close}>
                <a href="/editor"><Icon code="palette" class="text-secondary" /> Редактор</a>
              </li>
              <li onClick={drawer.close}>
                <a href="/about"><Icon code="store" class="text-info" /> О продукте</a>
              </li>
              <li onClick={drawer.close}>
                <a href="/features"><Icon code="tips_and_updates" class="text-warning" /> Возможности</a>
              </li>
            </ul>

            <div class="flex-1" />

            <div class="divider" />

            <ul class="menu menu-compact p-2">
              <li onClick={drawer.close}>
                <a href="/contact"><Icon code="outgoing_mail" class="text-primary" /> Контакты</a>
              </li>
              <li onClick={drawer.close}>
                <a href="/faq"><Icon code="help" class="text-error" /> FAQ</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}
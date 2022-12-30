import { AppStore } from "@app/stores";
import type { ParentProps } from "solid-js";
import { Icon } from "../base";
import { Link } from "../base/link";

export const Drawer = (props: ParentProps) => {
  const { drawer } = AppStore;

  return (
    <div class="drawer">
      <input
        role="none"
        aria-label="открыть меню"
        type="checkbox"
        class="drawer-toggle"
        checked={drawer.isOpen}
      />

      <div class="drawer-content scroll-smooth">
        {props.children}
      </div>
      <div class="drawer-side">
        <label class="drawer-overlay" onClick={drawer.close}></label>

        <div
          itemscope
          itemtype="http://schema.org/WPSideBar"
          class="flex flex-col w-80 bg-base-100 text-base-content"
        >
          <header class="navbar bg-base-200">
            <a class="btn btn-ghost normal-case text-xl flex gap-2" href="/">
              Compressor
            </a>
          </header>

          <div class="flex-1 flex flex-col py-2">
            <nav
              itemscope
              itemtype="http://schema.org/SiteNavigationElement"
              class="menu menu-compact p-2 gap-1"
            >
              <Link rel="prefetch" onClick={drawer.close} itemprop="url" class="btn btn-ghost gap-2 justify-start" to="/"><Icon code="home" /> Главная</Link>
              <Link rel="prefetch" onClick={drawer.close} itemprop="url" class="btn btn-ghost gap-2 justify-start" to="/editor"><Icon code="palette" class="text-secondary" /> Редактор</Link>
              <Link rel="prefetch" onClick={drawer.close} itemprop="url" class="btn btn-ghost gap-2 justify-start" to="/about"><Icon code="store" class="text-info" /> О продукте</Link>
              <Link rel="prefetch" onClick={drawer.close} itemprop="url" class="btn btn-ghost gap-2 justify-start" to="/features"><Icon code="tips_and_updates" class="text-warning" /> Возможности</Link>
            </nav>

            <div class="flex-1" />

            <div class="divider" />

            <nav
              itemscope
              itemtype="http://schema.org/SiteNavigationElement"
              role="navigation"
              class="menu menu-compact p-2 gap-1"
            >
              <Link rel="prefetch" onClick={drawer.close} itemprop="url" class="btn btn-ghost gap-2 justify-start" to="/contact"><Icon code="outgoing_mail" class="text-primary" /> Контакты</Link>
              <Link rel="prefetch" onClick={drawer.close} itemprop="url" class="btn btn-ghost gap-2 justify-start" to="/faq"><Icon code="help" class="text-error" /> FAQ</Link>
            </nav>
          </div>
        </div>

      </div>
    </div>
  )
}
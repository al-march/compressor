import { Theme } from "@app/constants";
import { AppLogo } from "../base";
import { Menu } from "./Menu";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      itemscope
      itemtype="http://schema.org/WPFooter"
      class="footer gap-2 footer-center p-10 px-2 bg-neutral text-neutral-content rounded"
    >
      <Menu
        class="grid grid-rows-3 sm:grid-rows-2 md:grid-rows-1 grid-flow-col gap-4"
      />

      <a itemprop="url" class="btn btn-ghost p-1 w-[140px]" href="/">
        <AppLogo theme={Theme.LIGHT} />
      </a>

      <div>
        <p>Copyright © <span itemprop="copyrightYear">{year}</span> - All right reserved</p>
        <p>Created by <a itemprop="copyrightHolder" class="link link-hover underline" href="https://github.com/al-march">al-march</a>.</p>
      </div>
    </footer>
  )
}
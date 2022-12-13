import { Menu } from "./Menu";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer class="footer footer-center p-10 px-2 bg-base-200 text-base-content rounded">
      <div class="grid grid-rows-2 sm:grid-rows-1 grid-flow-col gap-4">
        <Menu />
      </div>
      <div>
        <p>Copyright © {year} - All right reserved</p>
        <p>Created by <a class="link link-hover" href="https://github.com/al-march">al-march</a>.</p>
      </div>
    </footer>
  )
}
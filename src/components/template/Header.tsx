import { AppStore } from "@app/stores";
import { createSignal, onMount } from "solid-js"
import { Theme } from "../../constants"
import { Menu } from "./Menu";

const THEME_STORAGE_KEY = 'app-theme';

export const Header = () => {
  const storageTheme = getThemeFromStorage();
  const [theme, setTheme] = createSignal<Theme>(storageTheme);
  const { drawer } = AppStore;

  onMount(() => {
    updateTheme();
  })

  function toggleTheme() {
    if (theme() === Theme.DARK) {
      setTheme(Theme.LIGHT);
      updateTheme();
    } else {
      setTheme(Theme.DARK);
      updateTheme();
    }
  }

  function updateTheme() {
    document.documentElement.setAttribute('data-theme', theme());
    localStorage.setItem(THEME_STORAGE_KEY, theme());
  }

  function getThemeFromStorage() {
    const theme = localStorage.getItem(THEME_STORAGE_KEY);

    switch (theme) {
      case Theme.DARK:
        return Theme.DARK;
      case Theme.LIGHT:
        return Theme.LIGHT;
      default:
        return Theme.LIGHT;
    }
  }


  return (
    <header class="navbar bg-neutral text-neutral-content sticky top-0 z-50">

      <a class="btn btn-ghost normal-case text-xl" href="/">Compressor</a>
      <div class="flex-1"></div>

      <menu class="p-0 pr-8 m-0 hidden items-center gap-4 md:flex">
        <Menu />
      </menu>

      <div>
        <button class="btn btn-circle swap swap-rotate" onClick={toggleTheme}>
          <input type="checkbox" checked={theme() === Theme.DARK} />
          <svg class="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
          <svg class="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
        </button>

        <button class="btn btn-circle swap swap-rotate md:hidden" onClick={drawer.toggle}>
          <input type="checkbox" checked={drawer.isOpen} />
          <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
          <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
        </button>
      </div>
    </header>
  )
}
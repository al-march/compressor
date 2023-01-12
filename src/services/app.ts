import { Theme } from "@app/constants";
import { createStore } from "solid-js/store";

const THEME_STORAGE_KEY = 'app-theme';

const [state, setState] = createStore({
  theme: Theme.DARK
});

const getThemeFromStorage = () => {
  const theme = localStorage.getItem(THEME_STORAGE_KEY);

  switch (theme) {
    case Theme.DARK:
      return Theme.DARK;
    case Theme.LIGHT:
      return Theme.LIGHT;
    default:
      return Theme.DARK;
  }
}

function updateTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  setState('theme', theme);
}

export const appService = Object.assign({}, {
  state,
  getThemeFromStorage,
  updateTheme
})

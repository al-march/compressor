import { createStore } from "solid-js/store"

type AppStoreState = {
  drawer: {
    isOpen: boolean;
    toggle: () => void;
    open: () => void;
    close: () => void;
  }
}

const [state, setState] = createStore<AppStoreState>({
  drawer: {
    isOpen: false,
    toggle: toggleDrawer,
    open: openDrawer,
    close: closeDrawer,
  }
});

function openDrawer() {
  setState('drawer', 'isOpen', true);
}

function closeDrawer() {
  setState('drawer', 'isOpen', false);
}

function toggleDrawer() {
  const isOpen = !state.drawer.isOpen;
  setState('drawer', 'isOpen', isOpen);
}

export const AppStore = state;

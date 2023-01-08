declare global {
  interface Window {
    backendUrl: string;
  }
}

export * from './fetchAvailability';
export * from './fetchHelpMessage';
export * from './fetchRemoveBg';


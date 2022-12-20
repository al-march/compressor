export const status = () => {
  return fetch(`${window.backendUrl}/availability`)
}

export const checkBackendStatus = async () => {
  try {
    await status();
    return true;
  } catch {
    return false;
  }
}

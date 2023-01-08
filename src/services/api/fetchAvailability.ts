export const status = () => {
  return fetch(`${window.backendUrl}/api/v1/availability`)
}

export const checkBackendStatus = async () => {
  try {
    await status();
    return true;
  } catch {
    return false;
  }
}

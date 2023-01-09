export const status = () => {
  return fetch(`${window.backendUrl}/api/v1/availability`)
}

export const checkBackendStatus = async () => {
  try {
    const response = await status();
    return response.ok;
  } catch {
    return false;
  }
}

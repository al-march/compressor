export const removeBg = async (file: File) => {
  const formData = new FormData();
  formData.set('file', file);

  const response = await fetch(`${window.backendUrl}/api/v1/rembg`, {
    method: 'POST',
    body: formData,
  });

  const blob = await response.blob();
  return new File([blob], file.name);
}
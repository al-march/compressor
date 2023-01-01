import { imageService } from "../image";

export const tick = (timeout: number) => {
  return new Promise(res => {
    setTimeout(res, timeout);
  })
}

export const titleWidthFixed = (title: string, prefix = '', suffix = '') => {
  const max = 20;
  const output = imageService.addPrefixAndSuffix(title, prefix, suffix);

  if (output.length > max) {
    const part = Math.floor(max / 2);
    const start = output.slice(0, part);
    const end = output.slice(-part);
    return `${start}...${end}`;
  }
  return output;
}
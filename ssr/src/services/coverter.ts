function bytesToKb(value: number): string {
  return (value / 1000).toFixed(1);
}

export const convertService = Object.assign({}, {bytesToKb})
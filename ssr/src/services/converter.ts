function bytesToKb(value: number): string {
  return (value / 1000).toFixed(1);
}

function bytesToMb(value: number) {
  return (value / 1000_000).toFixed(2);
}

export const convertService = Object.assign({}, {bytesToKb, bytesToMb});

export const DaisyColors = [
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
] as const;

export const DaisyBrandColors = ['primary', 'secondary', 'accent'] as const;
export const DaisyHelpColors = ['info', 'success', 'warning', 'error'] as const;

export type DaisyColor = typeof DaisyColors[number];
export type DaisyBrandColor = typeof DaisyBrandColors[number];
export type DaisyHelpColor = typeof DaisyHelpColors[number];

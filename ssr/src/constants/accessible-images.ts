export const AccessibleImages = ['png', 'jpeg', 'jpg', 'webp'] as const;
export type AccessibleImage = typeof AccessibleImages[number];

import { Image } from './image';

const fakeFile: File = new File(['file-content'], 'image.png')

describe('Image', () => {
  it('should create an instance', () => {
    expect(new Image(fakeFile)).toBeTruthy();
  });
  it('should create src', async () => {
    const image = new Image(fakeFile);
    await image.createSrc();
    expect(image.src).toBeTruthy();
    expect(typeof image.src).toBe('string');
  });
});

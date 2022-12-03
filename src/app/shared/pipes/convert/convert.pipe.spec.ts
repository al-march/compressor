import { ConvertPipe } from './convert.pipe';

describe('CovertPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertPipe();
    expect(pipe).toBeTruthy();
  });
  it('should convert bytes to kb', () => {
    const values = {
      2500: '2.5',
      1000: '1.0',
      87435: '87.4'
    };

    const pipe = new ConvertPipe();

    Object
      .entries(values)
      .forEach(([bytes, kb]) => {
        const transformed = pipe.transform(Number(bytes));
        expect(transformed).toBe(kb);
      });
  });
});

import { smartCutText } from './index.ts';

describe('smartCutText function', () => {
  test('should truncate text to maxLength with ellipsis if necessary', () => {
    expect(smartCutText('Lorem ipsum dolor sit amet', 20)).toBe('Lorem ipsum dolor sit ...');
    expect(smartCutText('Hello, world!', 10)).toBe('Hello, ...');
  });

  test('should return original text if maxLength is greater than text length', () => {
    expect(smartCutText('This is a test', 70)).toBe('This is a test');
  });

  test('should handle empty text input', () => {
    expect(smartCutText('', 5)).toBe('');
  });

  test('should handle text consisting of a single word', () => {
    expect(smartCutText('Testing', 100)).toBe('Testing');
  });
});

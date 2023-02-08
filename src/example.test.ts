import { expect, it } from 'vitest';
import addTwoNumbers from './utils/example';

it('should add two numbers', () => {
  const result = addTwoNumbers(2, 3);
  expect(result).toEqual(5);
});

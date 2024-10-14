import { test, expect } from 'vitest';
import { decimalToBinary } from './index';

test('decimalToBinary', () => {
  expect(decimalToBinary(0)).toEqual('0');
  expect(decimalToBinary(1)).toEqual('1');
  expect(decimalToBinary(10)).toEqual('1010');
  expect(decimalToBinary(233)).toEqual('11101001');
})
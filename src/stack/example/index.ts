import Stack from '../stack';

// 十进制到二进制
export function decimalToBinary(num: number): string {
  const stack = new Stack<number>();
  let rem: number;
  let number = num;
  let binary: string = '';
  while (number > 0) {
    rem = Math.floor(number % 2);
    stack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!stack.isEmpty()) {
    binary += stack.pop()?.toString();
  }
  if (num === 0) {
    return '0';
  }
  return binary;
}
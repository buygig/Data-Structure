import { describe, test, expect } from "vitest";
import Stack from "../stack";
describe('Stack', () => {
  test('push', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  test('pop', () => {
    const stack = new Stack<number>();
    stack.push(1, 2, 3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeUndefined();
  });

  test('isEmpty', () => {
    const stack = new Stack<number>();
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test('size', () => {
    const stack = new Stack<number>();
    expect(stack.size()).toBe(0);
    stack.push(1);
    expect(stack.size()).toBe(1);
  })

  test('clear', () => {
    const stack = new Stack<number>();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.clear()).toBeUndefined();
  })
})
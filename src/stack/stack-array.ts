/*
 * 基于数组实现的栈
 */

class Stack<T> {
  private items: T[] = [];
  constructor() {
    this.items = [];
  }

  push(...elements: T[]): void {
    this.items.push(...elements);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items.at(-1);
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }
}

export default Stack;
class Queue<T> {
  #counnt: number;
  #lowestCount: number;
  #items: { [key: number]: T };

  constructor() {
    this.#counnt = 0;
    this.#lowestCount = 0;
    this.#items = {};
  }

  enqueue(...elements: T[]): void {
    for (const element of elements) {
      this.#items[this.#counnt] = element;
      this.#counnt++;
    }
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const result: T = this.#items[this.#lowestCount];
    delete this.#items[this.#lowestCount];
    this.#lowestCount++;
    return result;
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.#items[this.#lowestCount];
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.#counnt - this.#lowestCount;
  }

  clear() {
    this.#items = {};
    this.#counnt = 0;
    this.#lowestCount = 0;
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    }
    let result: string = `${this.#items[this.#lowestCount]}`;
    for (let i: number = this.#lowestCount + 1; i < this.#counnt; i++) {
      result = `${result}, ${this.#items[i]}`;
    }
    return result;
  }
}

export default Queue;
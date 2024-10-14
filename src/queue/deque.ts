class Deque<T> {
  #count: number;
  #lowestCount: number;
  #items: { [key: number]: T };

  constructor() {
    this.#count = 0
    this.#lowestCount = 0
    this.#items = {}
  }

  addFront(...items: T[]): void {
    if (this.isEmpty()) {
      this.addBack(...items)
    } else if (this.#lowestCount > 0) {
      for (const item of items) {
        this.#lowestCount--
        this.#items[this.#lowestCount] = item
      }
    } else {
      for (let i = this.#count; i >= 0; i--) {
        this.#items[i] = this.#items[i - 1]
      }
      for (const item of items) {
        this.#count++
        this.#lowestCount = 0
        this.#items[0] = item
      }
    }
  }

  addBack(...items: T[]): void {
    for (const item of items) {
      this.#items[this.#count] = item
      this.#count++
    }
  }

  removeFront(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.#items[this.#lowestCount]
    delete this.#items[this.#lowestCount]
    this.#lowestCount++
    return result
  }

  removeBack(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    this.#count--
    const result = this.#items[this.#count]
    delete this.#items[this.#count]
    return result
  }

  peekFront(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    return this.#items[this.#lowestCount]
  }

  peekBack(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    return this.#items[this.#count - 1]
  }

  size(): number {
    return this.#count - this.#lowestCount
  }

  isEmpty(): boolean {
    return this.#count === this.#lowestCount
  }

  clear(): void {
    this.#count = 0
    this.#lowestCount = 0
    this.#items = {}
  }

  toString(): string {
    if (this.isEmpty()) {
      return ''
    }
    let result = `${this.#items[this.#lowestCount]}`
    for (let i = this.#lowestCount + 1; i < this.#count; i++) {
      result = `${result}, ${this.#items[i]}`
    }
    return result
  }
}

export default Deque;
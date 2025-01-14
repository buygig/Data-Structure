class Stack<T> {
  #count: number
  #items: { [key: number]: T }
  constructor() {
    this.#count = 0
    this.#items = {}
  }

  push(...items: T[]): void {
    for (const item of items) {
      this.#items[this.#count] = item
      this.#count++
    }
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    this.#count--
    const result = this.#items[this.#count]
    delete this.#items[this.#count]
    return result
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }
    return this.#items[this.#count - 1]
  }

  size(): number {
    return this.#count
  }

  isEmpty(): boolean {
    return this.#count === 0
  }

  clear(): void {
    this.#count = 0
    this.#items = {}
  }

  toString(): string {
    if (this.isEmpty()) {
      return ''
    }
    let result = `${this.#items[0]}`
    for (let i = 1; i < this.#count; i++) {
      result += `${result}, ${this.#items[i]}`
    }
    return result
  }
}

export default Stack
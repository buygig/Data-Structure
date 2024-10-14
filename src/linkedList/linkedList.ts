
class Node<T> {
  value: T;
  next: Node<T> | undefined;
  constructor(value: T) {
    this.value = value;
    this.next = undefined;
  }
}

class LinkedList<T> {
  #head: Node<T> | undefined;
  #tail: Node<T> | undefined;
  #length: number;

  constructor() {
    this.#head = undefined;
    this.#tail = undefined;
    this.#length = 0;
  }

  push(value: T): void {
    const newNode = new Node(value);
    let currentTail: Node<T> | undefined;
    if (this.#head === undefined) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      currentTail = this.#tail;
      currentTail!.next = newNode;
      this.#tail = newNode;
    }
    this.#length++;
  }

  remove(index: number) {
    let current = this.#head;
    if (index < 0 || index >= this.#length) {
      throw new Error('Index out of range');
    }
    if (this.#length === 1) {
      this.#head = undefined;
      this.#tail = undefined;
    } else {
      if (index === 0) {
        this.#head = current?.next;
      } else {
        const previous = this.getNode(index - 1);
        current = previous!.next;
        previous!.next = current!.next;
      }
    }
    this.#length--;
    return current?.value;
  }

  getNode(index: number): Node<T> | undefined {
    if (index < 0 || index >= this.#length) {
      throw new Error('Index out of range');
    }
    let node = this.#head;
    for (let i = 0; i < index; i++) {
      node = node!.next;
    }
    return node
  }

  toString(): string {
    if (this.#head === undefined) {
      return '';
    }
    let str = `${this.#head.value}`;
    let current = this.#head.next;
    while (current) {
      str += ` -> ${current.value}`;
      current = current.next;
    }
    return str;
  }
}

export default LinkedList;
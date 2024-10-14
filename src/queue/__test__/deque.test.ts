import { describe, test, expect } from "vitest";
import Deque from '../deque';

describe("Deque", () => {
  test("addFront", () => {
    const queue = new Deque<number>();
    queue.addFront(1, 2, 3);
    queue.addFront(4);
    expect(queue.toString()).toBe("4, 1, 2, 3");
  })

  test("addBack", () => {
    const queue = new Deque<number>();
    queue.addBack(1, 2, 3);
    queue.addBack(4);
    expect(queue.toString()).toBe("1, 2, 3, 4");
  })

  test("removeFront", () => {
    const queue = new Deque<number>();
    queue.addFront(1, 2, 3);
    queue.removeFront();
    expect(queue.toString()).toBe("2, 3");
  })

  test("removeBack", () => {
    const queue = new Deque<number>();
    queue.addFront(1, 2, 3);
    queue.removeBack();
    expect(queue.toString()).toBe("1, 2");
  })

  test("peekFront", () => {
    const queue = new Deque<number>();
    queue.addFront(1, 2, 3);
    expect(queue.peekFront()).toBe(1);
  })

  test("peekBack", () => {
    const queue = new Deque<number>();
    queue.addFront(1, 2, 3);
    expect(queue.peekBack()).toBe(3);
  })

  test("isEmpty", () => {
    const queue = new Deque<number>();
    expect(queue.isEmpty()).toBe(true);
  })

  test("toString", () => {
    const queue = new Deque<string>();
    queue.addFront("hello", "world");
    expect(queue.toString()).toBe("hello, world");
  })
}); 
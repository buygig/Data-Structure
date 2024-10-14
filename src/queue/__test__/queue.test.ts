import { describe, test, expect } from "vitest";
import Queue from '../queue';

describe("Queue", () => {
  test("enqueue", () => {
    const queue = new Queue<number>();
    queue.enqueue(1, 2, 3);
    expect(queue.size()).toBe(3);
  })

  test("dequeue", () => {
    const queue = new Queue<number>();
    queue.enqueue(1, 2, 3);
    expect(queue.size()).toBe(3);
    queue.dequeue();
    expect(queue.size()).toBe(2);
  })

  test("peek", () => {
    const queue = new Queue<number>();
    queue.enqueue(1, 2, 3);
    expect(queue.peek()).toBe(1);
    queue.dequeue();
    expect(queue.peek()).toBe(2);
  })

  test("isEmpty", () => {
    const queue = new Queue<number>();
    expect(queue.isEmpty()).toBe(true);
  })

  test("toString", () => {
    const queue = new Queue<string>();
    queue.enqueue("hello", "world");
    expect(queue.toString()).toBe("hello, world");
  })
}); 
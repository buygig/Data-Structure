import LinkedList from '../linkedList';
import { describe, test, expect } from 'vitest';
describe('LinkedList', () => {
  test('push', () => {
    const list = new LinkedList();
    list.push(1);
    list.push(2);
    expect(list.toString()).toBe('1 -> 2');
  })

  test('remove', () => {
    const list = new LinkedList<number>();
    list.push(1);
    list.push(2);
    list.push(3);
    const node: number | undefined = list.remove(2)
    expect(list.toString()).toBe('1 -> 2');
    expect(node).toBe(3);
  })
})
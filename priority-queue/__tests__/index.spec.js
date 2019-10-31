import { createPriorityQueue } from '..';

describe('Priority Queue', () => {
  it('should be empty', () => {
    const queue = createPriorityQueue();
    expect(queue.isEmpty()).toEqual(true);
  });
  
  it('should enqueue', () => {
    const queue = createPriorityQueue();
    queue.add(1);
    expect(queue.peek()).toEqual(1);
    queue.add(2);
    expect(queue.peek()).toEqual(1);
    queue.add(3, true);
    expect(queue.peek()).toEqual(3);
  });
  
  it('should dequeue', () => {
    const queue = createPriorityQueue();
    queue.add(1);
    queue.add(2);
    queue.add(3);
    expect(queue.peek()).toEqual(1);
    queue.remove();
    expect(queue.peek()).toEqual(2);
    queue.add(4, true);
    expect(queue.peek()).toEqual(4);
    queue.add(5, true);
    expect(queue.peek()).toEqual(4);
    queue.remove();
    expect(queue.peek()).toEqual(5);
    queue.remove();
    expect(queue.peek()).toEqual(2);
    queue.remove();
    expect(queue.peek()).toEqual(3);
    queue.remove();
    expect(queue.isEmpty()).toEqual(true);
  });
  
  it('should return queue length', () => {
    const queue = createPriorityQueue();
    queue.add(1);
    expect(queue.length).toEqual(1);
    queue.add(2, true);
    expect(queue.length).toEqual(2);
    queue.add(3, true);
    expect(queue.length).toEqual(3);
  });
});

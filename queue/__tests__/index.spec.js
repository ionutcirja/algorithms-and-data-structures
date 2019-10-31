import { createQueue } from '..';

describe('Queue', () => {
  it('should be empty', () => {
    const queue = createQueue();
    expect(queue.isEmpty()).toEqual(true);
  });
  
  it('should enqueue', () => {
    const queue = createQueue();
    queue.add(1);
    expect(queue.peek()).toEqual(1);
    queue.add(2);
    expect(queue.peek()).toEqual(1);
  });
  
  it('should dequeue', () => {
    const queue = createQueue();
    queue.add(1);
    queue.add(2);
    queue.add(3);
    expect(queue.peek()).toEqual(1);
    queue.remove();
    expect(queue.peek()).toEqual(2);
    queue.remove();
    expect(queue.peek()).toEqual(3);
    queue.remove();
    expect(queue.isEmpty()).toEqual(true);
  });
  
  it('should return queue length', () => {
    const queue = createQueue();
    queue.add(1);
    expect(queue.length).toEqual(1);
    queue.add(2);
    expect(queue.length).toEqual(2);
    queue.add(3);
    expect(queue.length).toEqual(3);
  });
});

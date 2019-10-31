import { createQueue, Queue } from '../queue';

type PriorityQueue = {
  add: (item: any, hasPriority: boolean) => any;
  remove: () => any;
  peek: () => any;
  length: number;
  isEmpty: () => boolean;
};

export function createPriorityQueue(): PriorityQueue {
  const highPriorityQueue: Queue = createQueue();
  const lowPriorityQueue: Queue = createQueue();

  return {
    add(item: any, hasPriority: boolean = false) {
      hasPriority ? highPriorityQueue.add(item) : lowPriorityQueue.add(item);
    },
    remove() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.remove();
      }

      return lowPriorityQueue.remove();
    },
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }

      return lowPriorityQueue.peek();
    },
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    },
  };
}

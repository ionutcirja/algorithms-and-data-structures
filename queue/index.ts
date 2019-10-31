type Queue = {
  add: (item: any) => any;
  remove: () => any;
  peek: () => any;
  length: number;
  isEmpty: () => boolean;
};

export function createQueue(): Queue {
  const queue: any[] = [];

  return {
    add(item: any) {
      queue.unshift(item);
    },
    remove() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    },
  };
}

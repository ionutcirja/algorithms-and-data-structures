export type Stack = {
  add: (item: any) => any;
  remove: () => any;
  peek: () => any;
  length: number;
  isEmpty: () => boolean;
};

export function createStack(): Stack {
  const stack: any[] = [];

  return {
    add(item: any) {
      stack.push(item);
    },
    remove() {
      return stack.pop();
    },
    peek() {
      return stack[stack.length - 1];
    },
    get length() {
      return stack.length;
    },
    isEmpty() {
      return stack.length === 0;
    },
  };
}

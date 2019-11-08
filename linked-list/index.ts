export type LinkedList = {
  head: any;
  tail: any;
  length: number;
  push: (item: any) => any;
  pop: () => any;
  get: (index: number) => any;
  delete: (index: number) => any;
  isEmpty: () => boolean;
};

function createNode(value: any) {
  return {
    value,
    next: null,
  };
}

export function createLinkedList(): LinkedList {
  return {
    head: null,
    tail: null,
    length: 0,
    push: function(value) {
      const node = createNode(value);

      if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.length += 1;
        return node;
      }

      this.tail.next = node;
      this.tail = node;
      this.length += 1;

      return node;
    },
    pop: function() {
      if (this.isEmpty()) {
        return null;
      }

      const node = this.tail;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length -= 1;
        return node;
      }

      let current = this.head;
      let penultimate;
      while (current) {
        if (current.next === this.tail) {
          penultimate = current;
          break;
        }

        current = current.next;
      }

      penultimate.next = null;
      this.tail = penultimate;
      this.length -= 1;

      return node;
    },
    get: function(index: number) {
      if (index < 0 || index > this.length - 1) {
        return null;
      }

      if (index === 0) {
        return this.head;
      }

      let current = this.head;
      let iterator = 0;

      while (iterator < index) {
        current = current.next;
        iterator += 1;
      }

      return current;
    },
    delete: function(index: number) {
      if (index < 0 || index > this.length - 1) {
        return null;
      }

      if (index === 0) {
        const deleted = this.head;

        this.head = this.head.next;
        this.length -= 1;

        return deleted;
      }

      let current = this.head;
      let previous;
      let iterator = 0;

      while (iterator < index) {
        previous = current;
        current = current.next;
        iterator += 1;
      }

      const deleted = current;
      previous.next = current.next;

      if (previous.next === null) {
        this.tail = previous;
      }

      this.length -= 1;

      return deleted;
    },
    isEmpty: function() {
      return this.length === 0;
    },
  };
}

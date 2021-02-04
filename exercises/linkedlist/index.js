// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // APPROACH 1
    // this.head = new Node(data, this.head);

    // APPROACH 2
    this.insertAt(data, 0)
  }

  size() {
    let iterator = this.head;
    let counter = 0;
    while (iterator) {
      counter++;
      iterator = iterator.next;
    }
    return counter;
  }

  getFirst() {
    // APPROACH 1
    // return this.head;

    // APPROACH 2
    return this.getAt(0);
  }

  getLast() {
    // APPROACH 1
    // if (!this.head) return null;
    // let iterator = this.head;
    // // while (iterator.next !== null) {
    // //   iterator = iterator.next;
    // // }
    // // return iterator;
    // while (iterator) {
    //   if (!iterator.next) return iterator;
    //   iterator = iterator.next;
    // }

    // APPROACH 2
    return this.getAt(this.size() - 1)
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    // APPROACH 1
    // if (!this.head) return;
    // this.head = this.head.next;
    this.removeAt(0);
  }

  removeLast() {
    // APPROACH 1
    // if (!this.head) return;
    // if (this.head.next === null) {
    //   this.head = null;
    //   return;
    // }
    // let iterator = this.head;
    // while (iterator.next.next) {
    //   iterator = iterator.next;
    // }
    // iterator.next = null;

    // APPROACH 2
    this.removeAt(this.size() - 1)
  }

  insertLast(data) {
    // APPROACH 1
    // let node = new Node(data);
    // if (!this.head) {
    //   this.head = node;
    //   return;
    // }
    // this.getLast().next = node;

    // APPROACH 2
    this.insertAt(data, this.size())
  }

  getAt(index) {
    // if (!this.head) return null;
    // if (index > this.size()) return null;
    let iterator = this.head;
    let count = 0;
    while (iterator) {
      if (count === index) {
        return iterator;
      }
      count++;
      iterator = iterator.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) return;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let previous = this.getAt(index - 1);
    if (!previous || !previous.next) return;
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    let previous = this.getAt(index - 1) || this.getLast();
    let next = previous.next;
    previous.next = new Node(data, next);
  }

  forEach(fn) {
    if (!this.head) return null;
    let iterator = this.head;
    let counter = 0;
    while(iterator) {
      fn(iterator, counter);
      iterator = iterator.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };

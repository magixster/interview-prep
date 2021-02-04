// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.A = new Stack();
    this.B = new Stack();
  }

  add(record) {
    this.A.push(record);
  }

  remove() {
    while(this.A.peek()) {
      this.B.push(this.A.pop());
    }
    const popped = this.B.pop();
    while(this.B.peek()) {
      this.A.push(this.B.pop());
    }
    return popped;
  }

  peek() {
    while(this.A.peek()) {
      this.B.push(this.A.pop());
    }
    const peeked = this.B.peek();
    while(this.B.peek()) {
      this.A.push(this.B.pop());
    }
    return peeked;
  }
}

module.exports = Queue;

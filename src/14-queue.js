const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const node = new ListNode();
node.element = 0;

class Queue {
  constructor() {
    this.elemsArr = [];
  }

  get size() {
    return this.elemsArr.length;
  }

  enqueue(element) {
    this.elemsArr.push(element);
  }

  dequeue() {
    return this.elemsArr.shift();
  }
}

module.exports = Queue;

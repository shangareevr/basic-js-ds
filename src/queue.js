const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  getUnderlyingList() {
    return this.head;
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    if (this.length === 0) {
      this.head = new ListNode(value);
    } else {
      let elem = this.head;
       while( elem.next) {
        elem = elem.next;
       }
       elem.next = new ListNode(value);
    }
    this.length +=1;
    
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    if (this.length >0) {
      let newHead = this.head;
      this.head = this.head.next;
      this.length -=1;
      return newHead.value;
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};

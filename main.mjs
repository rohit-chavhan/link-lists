class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = new Node(value);
  }
  prepend(value) {
    let container = this.head;
    this.head = new Node(value);
    this.head.nextNode = container;
  }
  size() {
    let num = this.head === null ? 0 : 1;

    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
      num += 1;
    }
    return num;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    let tailBe = this.head;
    let second;
    while (tailBe !== null) {
      second = tailBe;
      tailBe = tailBe.nextNode;
    }
    return second;
  }
  atIndex(i) {
    let value = this.head;
    let count = 0;
    if (i === 0) return this.head;
    while (value.nextNode !== null) {
      value = value.nextNode;
      count += 1;
      if (i === count) {
        return value;
      }
    }
    return 'index is not in the linked list';
  }
  pop() {
    let totalSize = this.size();
    if (totalSize === 1) {
      this.head = null;
      return;
    }
    let current = this.head;
    let second;
    while (current.nextNode !== null) {
      second = current;
      current = current.nextNode;
    }
    second.nextNode = null;
  }
  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (value === current.value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  find(value) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      index += 1;
      current = current.nextNode;
    }
    return null;
  }
  toString() {
    let string = ``;
    let current = this.head;
    while (current !== null) {
      string += ` ( ${current.value} )  =>`;
      current = current.nextNode;
    }
    string += ` null `;
    return string;
  }
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    let newNode = new Node(value);
    let current = this.head;
    let previous = null;
    let i = 0;

    while (current !== null && i < index) {
      previous = current;
      current = current.nextNode;
      i++;
    }

    if (i !== index) {
      return 'Index out of bounds';
    }

    previous.nextNode = newNode;
    newNode.nextNode = current;
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.nextNode; // Remove the head
      return;
    }

    let current = this.head;
    let previous;
    let i = 0;

    while (current !== null && i < index) {
      previous = current;
      current = current.nextNode;
      i++;
    }

    if (current !== null) {
      previous.nextNode = current.nextNode; // Skip over the node to remove
    } else {
      console.log('Index out of bounds');
    }
  }
}
class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}
// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
console.log(list);
console.log(list.toString());

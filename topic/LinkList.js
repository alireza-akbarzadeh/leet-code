class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // Added a tail pointer to optimize appending
    this.length = 0; // Added a length property to optimize size calculation
  }
  // Append: Insert a new node at the end of the linked list

  append(data) {
    // Big O: O(1)
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode; // Update the tail reference
    } else {
      this.tail.next = newNode;
      this.tail = newNode; // Update the tail to the new node
    }
    this.length++; // Increment length
  }

  // Prepend: Insert a new node at the beginning of the linked list
  prepend(data) {
    // Big O: O(1)
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode; // If list was empty, update the tail as well
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++; // Increment length
  }

  // Delete: Remove the first occurrence of a node with the given data
  delete(data) {
    // Big O: O(n) (because in the worst case, you have to traverse the entire list)
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null; // If list is now empty, update the tail
      }
      this.length--; // Decrement length
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        if (current.next === null) {
          this.tail = current; // Update tail if last node was deleted
        }
        this.length--; // Decrement length
        return;
      }
      current = current.next;
    }
  }
  //   contains(data): Checks if a node with data exists in the list.
  //   Big O: O(n)

  contains(data) {
    return this.indexOf(data) !== -1;
  }
  //   indexOf(data): Returns the index of the first occurrence of data in the list, or -1 if not found.
  //   Big O: O(n)
  isEmpty() {
    return this.head !== null;
  }
  indexOf(data) {
    let current = this.head;
    let index = 0;
    while (this.isEmpty()) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // O(1)
  size() {
    return this.length;
  }

  removeFirst() {
    if (this.isEmpty()) throw new Error("the list is empty");
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
    const second = this.head.next;
    this.head.next = null;
    this.head = second;
  }

  // ToArray: Convert the linked list to an array
  //   Big O: O(n)
  toArray() {
    const array = [];
    let current = this.head;
    while (current !== null) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  }

  // GetFirst: Get the first element in the list
  //   O(1)
  getFirst() {
    return this.head ? this.head.data : null;
  }

  // GetLast: Get the last element in the list
  //   Big O: O(1)
  getLast() {
    return this.tail ? this.tail.data : null;
  }

  // Clear: Remove all elements from the linked list

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Print: Display the elements of the linked list
  print() {
    const elements = this.toArray();
    console.log(elements.join(" -> "));
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /// WRITE PUSH METHOD HERE ///
  push(value) {
    const newNode = new Node(value);
    //the if statement checks to see if head is falsy since null is false, if empty it assignes head and tail value
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //this.tail.next means that if head is not empty, then tail.next will be assigned with newNode data instead of null & then we reassign this.tail with new node which will now have the next value of null
      this.tail.next = newNode;
      this.tail = newNode;
    }
    //adds length to the object list
    this.length++;
    return this;
  }
}

function test() {
  let myLinkedList = new LinkedList(1);
  myLinkedList.makeEmpty();
  myLinkedList.push(1);
  myLinkedList.push(2);

  myLinkedList.getHead();
  myLinkedList.getTail();
  myLinkedList.getLength();
  console.log("\nLinked List:");
  myLinkedList.printList();
}

test();

/*
  EXPECTED OUTPUT:
  ----------------
  Head: 1
  Tail: 2
  Length: 2

  Linked List:
  1
  2

*/

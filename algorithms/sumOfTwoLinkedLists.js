// construction
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// creating linked list One

// input values into the linked-list
const linkedListOne = new LinkedList(5);
let currentNode = linkedListOne;
currentNode.next = new LinkedList(3);
currentNode = currentNode.next;
currentNode.next = new LinkedList(1);
currentNode = currentNode.next;
currentNode.next = new LinkedList(2);
currentNode = currentNode.next;
// 2, 1 3 5

// creating linked list Two
const linkedListTwo = new LinkedList(0);
currentNode = linkedListTwo;
currentNode.next = new LinkedList(4);
currentNode = currentNode.next;
currentNode.next = new LinkedList(5);
currentNode = currentNode.next;
// 5 4 0

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
	let first = linkedListOne;
	let firstNumber = "";
	while (first) {
		firstNumber = first.value.toString() + firstNumber;
		first = first.next;
	}
	
	let second = linkedListTwo;
	let secondNumber = "";
	while (second) {
		secondNumber = second.value.toString() + secondNumber;
		second = second.next;
	}
	
	const nums = (+firstNumber + +secondNumber).toString().split("");
	
	let node = new LinkedList(+nums.pop());
	let answer = node;
	while (nums.length) {
		const poped = nums.pop();
		node.next = new LinkedList(+poped);
		node = node.next;
	} 
	return answer;
}
console.log(sumOfLinkedLists(linkedListOne, linkedListTwo)); // 2 1 3 5 + 5 4 0 = 2 6 7 5
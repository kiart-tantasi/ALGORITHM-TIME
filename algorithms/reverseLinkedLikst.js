// LinkedList Construction
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// input values into the linked-list
const linkedListOne = new LinkedList(5);
let currentNode = linkedListOne;
currentNode.next = new LinkedList(3);
currentNode = currentNode.next;
currentNode.next = new LinkedList(1);
currentNode = currentNode.next;
currentNode.next = new LinkedList(2);
currentNode = currentNode.next;
// LinkedList = 5 -> 3 -> 1 -> 2

function reverseLinkedList(head) {
	let prev = null;
    let node = head;
	
	while (node !== null) {
		const prevNode = prev;
		prev = new LinkedList(node.value);
		prev.next = prevNode;
		node = node.next;
	}
	return prev;
}

console.log(reverseLinkedList(linkedListOne));
// LinkedList = 2 -> 1 -> 3 -> 5


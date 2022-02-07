class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function createBstFromArray(array, tree = null) {
  if (array.length === 0) return;
  if (tree === null) tree = new BST(array[0]);

  const treeValue = array.shift();
  const middleIdx = Math.round(array.length / 2);
  const left = array.splice(0, middleIdx);
  const right = array;

  let leftTree = null;
  let rightTree = null;
  if (left.length > 0) leftTree = createBstFromArray(left, tree.left);
  if (right.length > 0) rightTree = createBstFromArray(right, tree.right);
  
  return new BST(treeValue, leftTree, rightTree);
}

// This array contains of three parts
// 1: first part the first number is the root node of this tree
// 2: first four numbers after root number are the nodes on the left side of the root node
// 3: second four numbers are the node on the right side of the root node.

const array = [5,3,1,2,4,8,7,6,9]; // root:5, left: 3 1 2 4, right: 8 7 6 9
console.log(createBstFromArray(array));

// "node recreateBst.js" to see the result
// recommended to see this in console of browser

//         5
//       /    \
//      3      8
//     / \    /  \
//    1   4  7   9
//     \    /
//      2  6
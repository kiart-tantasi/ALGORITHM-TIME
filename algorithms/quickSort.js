// [5] 3  6  1  2
//  5  3  2  1  6
//  1  3  2 [5] 6

function quickSort(array) {
	quickSortHandler(array, 0, array.length - 1);
	return array;
}

function quickSortHandler(array, startIndex, lastIndex) {
	if (startIndex >= lastIndex) return;
  let left = startIndex + 1;
	let right = lastIndex;
  while (left <= right) {
		if (array[left] > array[startIndex] && array[right] < array[startIndex]) {
			swap(array, left, right);
		}
		if (array[left] <= array[startIndex]) left++;	
		if (array[right] >= array[startIndex]) right--;
	}
	swap(array, startIndex, right);
	//sort left side of the right index
	quickSortHandler(array, startIndex, right-1);
	//sort right side of the right index
	quickSortHandler(array, right+1, lastIndex)
}

function swap(array,l,r) {
	const temp = array[l];
	array[l] = array[r];
	array[r] = temp;
}

const unSortedArray = [5, 3, 6, 1, 4, 2];
console.log(quickSort(unSortedArray)); // [ 1, 2, 3, 4, 5, 6 ]

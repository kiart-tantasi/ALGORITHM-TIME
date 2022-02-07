function getNumbersFromSpiralArrays(array) {
	const arr = [];
	
	let startCol = 0; 
	let endCol = array[0].length - 1;
	let startRow = 0;
	let endRow = array.length	- 1;
	
	while (startCol <= endCol && startRow <= endRow ) {
						
		for (let i = startCol; i <= endCol; i++) {
			arr.push(array[startRow][i]);
		}
		if (startRow === endRow) break;
		startRow++;
		
		for (let i = startRow; i <= endRow; i++) {
			arr.push(array[i][endCol]);
		}
		if (endCol === startCol) break;
		endCol--;
				
		for (let i = endCol; i >= startCol; i--) {
			arr.push(array[endRow][i])
		}
		endRow--;
		
		for (let i = endRow; i >= startRow; i--) {
			arr.push(array[i][startCol]);
		}
		startCol++;
	}
	
	return arr;
}

const testingArray =
[
    [ 1,  2,  3,  4, 5],
    [12, 13, 14, 15, 6],
    [11, 10,  9,  8, 7]
]

console.log(getNumbersFromSpiralArrays(testingArray));

// command line 'node spiral.js' to see the result
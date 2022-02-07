function riverSizes(matrix) {
	const sizes = [];
	const record = [];
	for (let i = 0; i < matrix.length; i++) {
		record.push([]);
		for (const j of matrix[0]) {
			record[i].push(false);
		}
	}
	
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (record[i][j] === true) continue;
			if (matrix[i][j] !== 1) {
				record[i][j] = true;
				continue;
			} else if (matrix[i][j]) {
				const newSize = traverse(i,j,matrix, record);
				sizes.push(newSize);
			}
		}
	}
	return sizes;
}

function traverse(i , j , matrix, record) {
	record[i][j] = true;
	let size = 1;
	if (i > 0 && !record[i-1][j] && matrix[i-1][j] === 1) {
		const further = traverse(i - 1, j, matrix, record);
		size += further;
	}
	if (i < matrix.length - 1 && !record[i+1][j] && matrix[i + 1][j] === 1) {
		const further = traverse(i + 1, j, matrix, record);
		size += further;
	}
	if (j > 0 && !record[i][j - 1] && matrix[i][j - 1] === 1) {
		const further = traverse(i, j - 1, matrix, record);
		size += further;
	}
	if (j < matrix[0].length - 1 && !record[i][j + 1] && matrix[i][j + 1] === 1) {
		const further = traverse(i, j + 1, matrix, record);
		size += further; 
	}
	return size;
}

const testingArray = 
[
    [1, 1, 1, 1, 2], // <-- 4 ones
    [3, 0, 9, 4, 0],
    [0, 2, 1, 1, 1], // <-- 3 ones
    [1, 5, 0, 9, 6],
    [1, 1, 5, 6, 0]  // <-- 3 ones forming L shape
];

// Only "1" is river


//result should be [4, 3, 3]
// river shapes:  '-' on line 1, '-' on line three 'L' on line five the sizes of them are 4 3 3 orderly
console.log(riverSizes(testingArray));


// command line 'node riverSizes.js' to see the result
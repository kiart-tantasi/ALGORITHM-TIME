function findLengthOfLongestPeak(array) {
	let max = -Infinity;
	let prev = -Infinity;
	let size = 0;
	let decreasing = false;
	
	for (let i = 0; i < array.length; i++) {
		if (array[i] > prev) {
			if (decreasing === true) {
				if (size > max) max = size;
				size = 2;
				decreasing = false;
			} else {
				size++;				
			}
		} else if (array[i] < prev) {
			if (size >= 2 ) {
				decreasing = true;
				size++;
                if (i === (array.length - 1) && size > max) {
					return size;
				}
			} else {
				size = 1;
			}
		} else if (array[i] === prev) {
			if (decreasing === true) {
				if (size > max) max = size;
				decreasing = false;
			}
			size = 1;			
		}
		prev = array[i];
	}
	
	return max !== -Infinity ? max : "no peaks found";
}

// finding the length of longest peak in the array

// a peak contains of at least 2 increasing value and one decreasing value - For Example: [ 1, 2, 0 ] is a peak where the peak is '2'

const testingArray = [ 2, 3, 5, 7, 2, 3, 6, 9, 6, 3, 2, 8, 9, 0];

// There are 3 peaks.

// 2 3 5 7 2 - length: 5        shape of the peak / / / / \

// 2 3 6 9 6 3 2 - length: 7      shape of the peak / / / \ \

// 2 8 9 0 - length: 4          shape of the peak / / / \

// the answer should be 7 which is the length of the second peak.

console.log("LONGST PEAK:", findLengthOfLongestPeak(testingArray));

// run node to see the result
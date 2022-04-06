function mergeSortedArrays(arrays) {
	const map = {};
	for (let i = 0; i < arrays.length; i++) {
		map[i] = arrays[i].length 
	}
	let nums = 0;
	let mapSize = 0;
	for (const key in map) {
		nums += map[key];
		mapSize++;
	}
	const result = [];
	while (nums > 0) {
		let currentIndex = Infinity;
		let min = Infinity;
		for (let i = 0; i < mapSize; i++) {
			if (arrays[i].length > 0 && arrays[i][0] < min) {
				min = arrays[i][0];
				currentIndex = i;
			}
		}
		result.push(arrays[currentIndex].shift());
		nums--;
	}
	return result;
}

//time complexity
//4n (length of arrays)
//4n (length of arrays)
//14k (all numbers from every sub array) * 4n (length of arrays)
//SUM: 14k * 4 n => o((14k)(4n)) => o(kn)

//space complexity
//got some o(1) from nums mapSize currentIndex min
// map - arrays.length (4n)
// result - numbers of all numbers from each sub array (14k)
//SUM: 4n + 14k => n + k

const sortedArrayOne = [1,5,9,500,999];
const sortedArrayTwo = [2,4,8,600,800];
const sortedArrays = [sortedArrayOne, sortedArrayTwo];
console.log(mergeSortedArrays(sortedArrays));
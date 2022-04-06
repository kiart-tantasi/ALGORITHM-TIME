function halve(arr) {
    if (arr.length <= 1)
        return arr;
    const half = Math.round(arr.length / 2);
    const left = arr.splice(0, half);
    return [halve(left), halve(arr)];
}

function merger(left, right) {
    const array = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            array.push(left.shift());
        }
        else {
            array.push(right.shift());
        }
    }
    if (left.length > 0) {
        return [...array, ...left];
    }
    else if (right.length > 0) {
        return [...array, ...right];
    }
}

function sorter(array) {
    if (!array[1])
        return array[0];
    if (array[0].length === 2 && array[1].length === 1) {
        const firstMerged = merger(array[0][0], array[0][1]);
        const secondMerged = merger(firstMerged, array[1]);
        return secondMerged;
    }
    const firstElement = array[0][0];
    if (!isNaN(firstElement) && !Array.isArray(firstElement)) {
        return merger(array[0], array[1]);
    }
    return sorter([
        sorter(array[0]),
        sorter(array[1])
    ]);
}

const arr = [11, 6, 5, 3, 4, 12, 15, 10, 7, 1, 13, 2, 8, 14, 9];

function halveAndMergeSortLater(array) {
    if (array.length === 1)
        return array;
    const halved = halve(array);
    console.log("HALVED:", halved)
    return sorter(halved);
}

console.log("MERGE-SORTED:", halveAndMergeSortLater(arr));

// run node to see the result
function flattenArray(arr) {
    let flattenedArray = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            flattenedArray.push(arr[i][j]);
        }
    }
    return flattenedArray;
}

let arr = [[56, 78, 90, 34], [5, "Dan", 90], ["John", "Apple", 88]];
let flattened = flattenArray(arr);
console.log(flattened);[56, 78, 90, 34, 5, "Dan", 90, "John", "Apple", 88]
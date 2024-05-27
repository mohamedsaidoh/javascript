{
    // array of arrays
    const sample_array = [[89, 56, 43], [32, 77, 56, 43], [90, 43, 49, 23, 90]]
    function getSumOfElements(arr){
        arr_sum = []
        arr.forEach((innerArr) => {
            let sum = 0
            innerArr.forEach((value) =>{
                sum = sum + value
            })
            arr_sum.push(sum)
        });
        return arr_sum
    }
    console.log(getSumOfElements(sample_array))
}




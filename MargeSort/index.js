function Merge_Sort(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j])
            j++;
        }
        else {
            result.push(arr1[i])
            i++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    console.log(result)


    return result
}


// time complexity : O(n logn)
Merge_Sort([10,30,50], [20,40,60])
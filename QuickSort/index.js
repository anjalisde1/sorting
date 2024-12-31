function pivot(arr, start = 0, end = arr.length-1 ) {
    const swap = (arr, i, j) => {
        return [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    let pivot = arr[start];
    let swapid = start;
    for (let i = start + 1; i <=end; i++) {
        if (pivot > arr[i]) {
            swapid++;
            swap(arr, swapid, i)
        }
    }
    swap(arr, start, swapid)
    return swapid
}

function Quick_Sort(arr, left = 0, right = arr.length-1) {
    if (left < right) {
        let pivotId = pivot(arr, left, right)
        Quick_Sort(arr, left, pivotId - 1)
        Quick_Sort(arr, pivotId + 1, right)
    }
    console.log(arr)
    return arr
}
//time complexity : O(nLogn)

Quick_Sort([5, 15, 2, 4, 6, 10])

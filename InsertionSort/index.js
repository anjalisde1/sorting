function Insertion_Sort(arr){
for(let i=1; i<arr.length; i++){
    console.log(arr)
    let current=arr[i];
    let j=i-1;
    while(j>=0 && arr[j]> current){
        arr[j+1]=arr[j];
        j--
    }
    arr[j+1]= current;
}

    return arr;
}
//time complexity : O(n)
Insertion_Sort([10,12,1,-9,80])
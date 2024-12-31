function Selection_sort(arr){

    for(let i=0; i<arr.length; i++){
        console.log(arr)
         let min= i;

        for(j=i+1; j<arr.length; j++){
            if(arr[min] > arr[j])
            min=j;
        }
        if(i !== min){
        var temp= arr[i];
        arr[i]= arr[min];
        arr[min]=temp;
        }
    }
    return arr;

}
// time complexity : O(n^2)
 
Selection_sort([20,10,30,15,5])
// 20,10,30,15,5
//compare 20 with all number and with smallest one
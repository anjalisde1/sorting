function Bubble_Sort(arr){
    for(let i=arr.length; i>0; i--){
        console.log(arr)
        for(let j=0; j<i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]= arr[j+1]
                arr[j+1]= temp;
            }
        }
    }
    return arr;
}
// time complaxity 0(n^2)


Bubble_Sort([25,39,14,2,-10]);
// 25,39,14,2,-10
//compare 25 with next elelment and swap

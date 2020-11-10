// function insertionSort(arr){
//     for(var i = 0; i < arr.length; i ++){
//       if(arr[i-1] < arr[i]){
//         continue;
//       }
//       else{
//         for(var j = i - 1; j >= 0; j --){
//           var temp;
//           if(arr[j+1] < arr[j]){
//             temp = arr[j+1];
//             arr[j+1] = arr[j];
//             arr[j] = temp;
//           }
//           else {
//             break;
//           }
//         }
//       }
//     }
//     return arr;
//   }
  
  
//   console.log(insertionSort([2,3,5,1,4,6]));



let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i];
        let j = i - 1;
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};


function insertionSort(arr){
    for(var i =1; i<arr.length; i++){
        var key = arr[i];
        var l = i-1;
        while(arr[l] > key){
            arr[l+1] = arr[l];
            l = l-1;
        }
        arr[l+1] = key;
    }
}
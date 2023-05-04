function unique(arr)
 {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }


  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i]===arr[j]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}


const quickSort = (arr) => {
         if (arr.length <=1){
            return arr;
         }

  let pivot = arr[0];

  let left_side_Arr = [];
  let right_side_Arr = [];


  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left_side_Arr.push(arr[i]);
    } else {
      right_side_Arr.push(arr[i]);
    }
  }
  return [...quickSort(left_side_Arr), pivot, ...quickSort(right_side_Arr)];
};

a=[3,0,2,5,-1,4,1,10,23,15,20,12]
a=unique(a)
a=quickSort(a)
console.log(a)
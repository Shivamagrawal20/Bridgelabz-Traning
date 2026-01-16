function searching(array,key){
    let low  = 0;
    let high = array.length - 1;
    while (low <= high){
        let mid1 = low + Math.floor((high-low)/3);
        let mid2 = high - Math.floor((high-low)/3);

        if (array[mid1]===key) return mid1;
        if (array[mid2]===key) return mid2;

        if (key < array[mid1]){
            high=mid1 -1;
        }
        else if (key > array[mid2]){
            low = mid2 + 1;
        }
        else {
            low = mid1 + 1;
            high = mid2 - 1;
        }
    }
    return -1;
}
let array = [1,2,3,4,5,6];
let key = 13;
    console.log("searching",searching(array,key));
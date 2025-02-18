function quickSort(arr, start, end){
    if(start >= end){
        return
    }
    let left = start
    let right = end
    let key = arr[start]
    
    while(left < right) {
        while(key <= arr[right] && left < right){
            right -= 1
        }
        while(key >= arr[left] && left < right){
            left += 1
        }
        if(left < right){
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
        }
    }

    arr[start] = arr[left]
    arr[left] = key
    
    quickSort(arr, start, left-1)
    quickSort(arr, left+1, end)
}

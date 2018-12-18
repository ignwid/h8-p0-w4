function cariMedian(arr) {
    var jumlahAngka = arr.length
    if(jumlahAngka % 2 !== 0) {
        var median = arr[((jumlahAngka + 1)/2)-1]   
    } else {
        var median = parseFloat((arr[(jumlahAngka/2)-1] + arr[jumlahAngka/2])/2)
    }

    return median
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5








/*var arr = [1, 3, 4, 10, 12, 13]
var jumlahAngka = arr.length

if(jumlahAngka % 2 !== 0) {
    var median = arr[((jumlahAngka + 1)/2)-1]   
} else {
    var median = parseFloat((arr[(jumlahAngka/2)-1] + arr[jumlahAngka/2])/2)
}

console.log(median)*/
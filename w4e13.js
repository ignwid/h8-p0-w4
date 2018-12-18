function sorting(arrNumber) {
   var sortedNumbers = arrNumber.sort(function(a,b){return b-a})
   return sortedNumbers
}

function getTotal(arrNumber) {
    var counter = 0
    var maxNumber = Math.max.apply(null, arrNumber)
    for(var i = 0; i < arrNumber.length; i++){
        if(arrNumber[i] === maxNumber){
            counter+=1
        }
    }
    console.log('angka paling besar adalah ' + maxNumber + ' dan jumlah kemunculan sebanyak ' + counter + ' kali')
    return ''
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }



  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]))
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
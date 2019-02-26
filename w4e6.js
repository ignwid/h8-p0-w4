function digitPerkalianMinimum(angka) { //belm selesai
  // you can only write your code here!
    var temp = []
    for(var i = 1; i <= angka; i++){
        if(angka % i === 0){
            var firstNum = angka / i
            var secondNum = i
            var strNum = firstNum.toString() + secondNum.toString()
            temp.push(strNum)
        }
    }

    temp.sort(function (a,b) { return a-b})
    var answer = temp[0].length

    return answer
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
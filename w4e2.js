function fpb(angka1, angka2) {
  // you can only write your code here!
  var temp1 = []
  var temp2 = []
  var sameNumber = []

  for(var i = 1; i <= angka1; i++){
    if(angka1 % i === 0){
      temp1.push(i)
    } 
  }

  for(var j = 1; j <= angka2; j++){
    if(angka2 % j === 0){
      temp2.push(j)
    }
  }

  for(var k = 0; k < temp1.length; k++){
    for(var l = 0; l < temp2.length; l++){
      if(temp1[k] === temp2[l]){
        sameNumber.push(temp2[l])
      }
    }
  }

  return sameNumber[sameNumber.length-1]
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

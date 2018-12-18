function totalDigitRekursif(angka) {
  var jumlahAngka = []
  var angkaStr = angka.toString()
  var splitNumber = angkaStr.split('')
  
  for(var i = 0; i < splitNumber.length; i++){
    var pushAngka = Number(splitNumber[i])
    jumlahAngka.push(pushAngka)
  }
  
  var sum = 0
  for(var j = 0; j < jumlahAngka.length; j++){
    sum = sum + jumlahAngka[j]
  }
  
  return sum
}


console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
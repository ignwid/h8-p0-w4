function tukarBesarKecil(kalimat) { 
    // you can only write your code here!
    var besar = 'ABCDEFGHIJKLMNOPQRSTVWYZ'
    var kecil = 'abcdefghijklmnopqrstvwyz'
    var temp = ''

    for(var i = 0; i < kalimat.length; i++){
        var check = false
        for(var j = 0; j< besar.length; j++){
            if(kalimat[i] === besar[j]){
                temp = temp + kecil[j]
                check = true                
            }
            else if(kalimat[i] === kecil[j]){
                temp = temp + besar[j]
                check = true             
            } 
            
        }
        if(check === false){
            temp += kalimat[i]
        }
        
    }
    return temp
  }
  
  // TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
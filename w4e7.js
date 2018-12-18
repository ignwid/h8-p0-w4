function urutkanAbjad(str) {

    var huruf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var nomorAbjad =[]
    var abjad =[]
    //nomor urut abjad
    for(var i = 0; i < str.length; i++ ){
        for(var j = 0; j < huruf.length; j++) {        
            if(str[i] === huruf[j]){
                nomorAbjad.push(huruf.indexOf(huruf[j]))            
            }
        }
    }
    nomorAbjad.sort(function(a,b) { return a-b })

    //urutan abjad    
    for(var k = 0; k < nomorAbjad.length; k++) {
        abjad.push(huruf[nomorAbjad[k]])
    }

    return abjad.join('')
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'








/*var huruf = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var temp =[]
var tempHuruf = []
var kata = 'software'
for(var i = 0; i < kata.length; i++ ){
    for(var j = 0; j < huruf.length; j++) {        
        if(kata[i] === huruf[j]){
            temp.push(huruf.indexOf(huruf[j]))            
        }
    }
}
temp.sort(function(a,b) { return a-b })
for(var k = 0; k < temp.length; k++) {
    tempHuruf.push(huruf[temp[k]])
}
var endResult = tempHuruf.join('')
console.log(endResult)*/
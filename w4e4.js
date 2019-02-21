function cariModus(arr) {   
    // you can only write your code here!
    var numbers = arr.sort()
    var temp = []
    var counter = 0
    for(var i = 0; i < numbers.length-1; i++){
        if(numbers[i] === numbers[i+1]){
            temp.push(numbers[i])
            
        } else if(numbers[i] != numbers[i+1]) {
            counter += 1
        }
    }

    if(counter === numbers.length-1){   //kondisi apabila semua angka berbeda
        return -1

    } else if(temp.length > 1 && temp[0] === temp[temp.length-1]){  //kondisi apabila semua angka sama
        return -1

    } else {
        temp.sort(function(a,b){return a-b})
        return temp[0]
    }

    
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
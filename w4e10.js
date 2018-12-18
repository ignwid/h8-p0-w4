function changeMe(arr) {
    for(var i = 0; i < arr.length; i++){
        var biodata = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age : arr[i][3]
        };
        if(arr[i][3] > 2018 || arr[i][3] === undefined){
            biodata.age = 'Invalid Birth Year'
        } else {
            biodata.age = 2018 - arr[i][3]
        }

        console.log((i+1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ' :')
        console.log(biodata)
    }
    return ''
  }

  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
  
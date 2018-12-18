function shoppingTime(memberId, money) {
    var product = {
        productList: ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'],
        priceList: [1500000,500000,250000,175000,50000]
    };

  var numberId = memberId
  var cash = money
  var changeCash = money
  var listItem = []



  if(numberId === undefined || numberId === '' ) {
    console.log('Mohon maaf, toko X hanya berlaku untuk member saja')
  } else if (cash < 50000){
    console.log('Mohon maaf, uang tidak cukup')
  } else {
    for(var i = 0; i < product.priceList.length; i++){
      if(changeCash >= product.priceList[i]) {
        changeCash = changeCash - product.priceList[i]
        listItem.push(product.productList[i])
      }
      
    }
    var shopping = {
      memberId : numberId,
      money: cash,
      listPurchased: listItem,
      changeMoney: changeCash
    };

    console.log(shopping)

  }

  return ''


}


console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime());

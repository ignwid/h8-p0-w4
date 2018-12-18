function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    
    
     
  var arrPurchase = []
    for(var i = 0; i < listBarang.length; i++){
     
      var productName = listBarang[i][0]
      var orderFrom = []
      var counter = listBarang[i][2]
      var profit = 0
      for(var j = 0; j < shoppers.length; j++){
        if(listBarang[i][0] === shoppers[j].product){         
         orderFrom.push(shoppers[j].name)
         counter = counter - shoppers[j].amount 
         profit = profit +(listBarang[i][1]*shoppers[j].amount)
  
        }

      }
      if(counter < 0){
        var purchase = {
          product:productName,
          shoppers: [],
          leftOver: listBarang[i][2],
          totalProfit: 0
         };
      } else {

        var purchase = {
          product:productName,
          shoppers: orderFrom,
          leftOver: counter,
          totalProfit: profit
        };
      }
      arrPurchase.push(purchase)
    }
     
    return arrPurchase
  }
  //console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));



  /*
    INI INPUT UNTUK function 'countProfit'
    [{name: 'Windi',
      product: 'Sepatu Stacattu',
      amount: 2
     }, 
     {name: 'Vanessa',
      product: 'Sepatu Stacattu',
      amount: 3
     },
     {name: 'Rani',
      product: 'Sweater Uniklooh',
      amount: 2
     } ]
    
     INI OUTPUTNYA :
    [ { product: 'Sepatu Stacattu',
        shoppers: [ 'Windi', 'Vanessa' ],
        leftOver: 5,
        totalProfit: 7500000 },

      { product: 'Baju Zoro',
        shoppers: [],
        leftOver: 2,
        totalProfit: 0 },
      { product: 'Sweater Uniklooh',
        shoppers: [],
        leftOver: 1,
        totalProfit: 0 } ]
     */
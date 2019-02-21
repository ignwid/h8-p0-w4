function highestScore (students) {
  if(students.length === 0){
    return {}
  } else {
    var result = {}
  
    for(var i = 0; i < students.length; i++){
        var studentsClass = students[i].class
    
        if(result[studentsClass] === undefined){
            result[studentsClass] =  {}
        }
    
        result[studentsClass].name = ''
        result[studentsClass].score = 0
        
        
    }
    
    for(var j = 0; j < students.length; j++){
        
        if(students[j].class === 'foxes'){
            if(result.foxes.score < students[j].score){
                result.foxes.score = students[j].score
                result.foxes.name = students[j].name
            }
        }
         
        else if(students[j].class  === 'wolves'){
            if(result.wolves.score < students[j].score){
                result.wolves.score = students[j].score
                result.wolves.name = students[j].name
            }
        }
        else if(students[j].class  === 'tigers'){
            if(result.tigers.score < students[j].score){
                result.tigers.score = students[j].score
                result.tigers.name = students[j].name
            }
        }  
    }
    
    return result
  }
  
}
// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }*/

console.log()
console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}

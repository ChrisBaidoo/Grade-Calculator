var studentGrade =  [
  ['dave',[45,86,59,5,8]],
  ['kas',[99,89,87,45,56]],
  ['john',[76,89,73,83,48]],
  ['helen',[7]],
  ['ed',[33,89,94,92,12]],
]


  function getAverageGrades() {
    for (var i = 0; i < studentGrade.length; i++){
      var currentGrade = studentGrade[i][1]
      var totalGrade = currentGrade.reduce(function (accumulator, currentValue){
        return accumulator + currentValue
      });
      var averageGrade = totalGrade / currentGrade.length;
      console.log(studentGrade[i][0] + " has a total grade of " + totalGrade + " and an average of " + averageGrade)
    }
  }

  //Print to to a table student 

getAverageGrades()

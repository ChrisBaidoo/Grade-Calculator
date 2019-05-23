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

//   window.addEventListener('DOMContentLoaded', (event) => {
//     var nameColumn = document.getElementById("nameColumn");
//     var li = document.createElement('li');
//     li.setAttribute('class','item');
//     nameColumn.appendChild(li)
//      document.body.appendChild(li)
// });



// function phoneticLookup(val) {
//   var result = "";
//
//   // Only change code below this line
//   var lookup = {
//     "alpha": "Adams",
//     "bravo": "Boston",
//     "charlie": "Chicago",
//     "delta": "Denver",
//     "echo": "Easy",
//     "foxtrot": "Frank"
//   };
//   result = lookup[val];
//
//   // Only change code above this line
//   return result;
//   console.log(result)
// }
//
// phoneticLookup(alpha);
//
//

  // Print to to a table student

getAverageGrades()

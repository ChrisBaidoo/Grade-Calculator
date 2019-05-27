var studentGrades =  [
  ['dave',[45,86,59,5,8]],
  ['kas',[99,89,87,45,56]],
  ['john',[76,89,73,83,48]],
  ['helen',[7]],
  ['ed',[33,89,94,92,12]],
]


  window.addEventListener('DOMContentLoaded', (event) => {
    var nameColumn = document.getElementById("nameColumn");
    var gradeColumn = document.getElementById("gradeColumn");
    var averageColumn = document.getElementById("averageColumn");
    for (var i = 0; i < studentGrades.length; i++){
      var currentGrade = studentGrades[i][1]
      var totalGrade = currentGrade.reduce(function (accumulator, currentValue){
        return accumulator + currentValue
      });
      var averageGrade = totalGrade / currentGrade.length;
      console.log(studentGrades[i][0] + " has a total grade of " + totalGrade + " and an average of " + averageGrade)

      var nameLi = document.createElement('li');
      nameLi.setAttribute('class','item');
      nameLi.innerText = studentGrades[i][0];
      nameColumn.appendChild(nameLi);

      var gradeLi = document.createElement('li');
      gradeLi.setAttribute('class','item');
      gradeLi.innerText = totalGrade;
      gradeColumn.appendChild(gradeLi);

      var avGradeLi = document.createElement('li');
      avGradeLi.setAttribute('class','item');
      avGradeLi.innerText = averageGrade;
      averageColumn.appendChild(avGradeLi);
    }


     // document.body.appendChild(li)
});



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

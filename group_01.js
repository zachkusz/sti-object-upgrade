//The first index holds the employees name.
//The second index has their employee number.
//The third index contains their annual salary.
//The fourth index contains their review rating.

function Person(named, employNum, salary, rating) {
  this.named = named;
  this.employNum = employNum;
  this.salary = salary;
  this.rating = rating;
}

var atticus = new Person('Atticus', '2405', 47000, 3);

var jem = new Person('Jem', '62347', 63500, 4);

var boo = new Person('Boo', '11435', 54000, 3);

var scout = new Person('Scout', '6243', 74750, 5);

var employees = [atticus, jem, boo, scout];

var bonusPer = 0;

function logic(arg) {

  var localArray = [];

  localArray[0] = arg.named;

  //checks employee's earned bonus

  var bonusPSum = 1;

  switch(arg.rating) {
    case 0:
    case 1:
    case 2:
      bonusPSum += 0;
      break;
    case 3:
      bonusPSum += 0.04;
      break;
    case 4:
      bonusPSum += 0.06;
      break;
    case 5:
      bonusPSum += 0.10;
      break;
  }

  if (arg.employNum.length == 4) {
    bonusPSum += 0.05;
  }

  if (arg.salary > 65000) {
    bonusPSum -= 0.01;
  }

  if (bonusPSum > 1.13) {
    bonusPSum = 1.13;
  }

  //new salary after bonus rounded to nearest dollar

  arg.salary *= bonusPSum;

  localArray[2] = Math.round(arg.salary);

  //bonus's percentage

  localArray[1] = bonusPSum - 1;

  //bonus amount without before added to current salary, rounded.

  localArray[3] = Math.round(arg.salary * localArray[1]);

  return localArray;
}

////  FINAL ARRAY THAT STORES ANSWERS ////

function finalArray(empArray) {
  for (var i = 0; i < employees.length; i++) {
    console.log(logic(empArray[i]));
  }

  return true;
}

console.log(finalArray(employees));

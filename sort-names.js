var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function sortStudents(studentArray) {
  studentArray.sort(function(a, b) {
    if (a.name[0] > b.name[0]) {
      return 1;
    } else if (a.name[0] === b.name[0]) {
      return b.age - a.age;
    }

  });
  console.log(studentArray);
}

sortStudents(students);

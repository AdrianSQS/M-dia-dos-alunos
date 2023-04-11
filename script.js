
let studentList = [

{
 nameOfTheStudent: 'Thalita',
 firstNote: 8,
 secondNote: 5,
},

{
 nameOfTheStudent: 'Adrian',
 firstNote: 6,
 secondNote: 4,
},

{
 nameOfTheStudent: 'Leonardo',
 firstNote: 10,
 secondNote: 7,
},

]

function calculateAverage(firstNote, secondNote) {
  let average = (firstNote + secondNote) / 2
  return average
}

for(let student of studentList) {
  individualAverage = calculateAverage(student.firstNote, student.secondNote)
  let approvedOrNot = individualAverage < 7 ? `Infelizmente não foi dessa vez, ${student.nameOfTheStudent}. Estude mais!` : `Parabéns, ${student.nameOfTheStudent}! Você foi aprovado(a) no concurso!`

  alert(`A média do aluno(a) ${student.nameOfTheStudent} é de: ${individualAverage}.
${approvedOrNot}`)
}

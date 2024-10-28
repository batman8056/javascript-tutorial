//Grade
//-------
//Average = 70
//1-59:f
//60-69:d
//70-79:c
//80-89:b
//90-100:a

const marks = [80,80,50];

console.log(calculatergrade(marks));

function calculatergrade(marks){
  const avg =calcutageavg(marks);
  if (avg <60 ) return "F";
  if (avg <70 ) return "D";
  if (avg <80 ) return "C";
  if (avg <90 ) return "B";
  if (avg <100 ) return "A";
}

function calcutageavg(array){
  let sum=0;
  for(let mark of array)
    sum += mark;
  let avg=sum / marks .length;
  return avg;
}
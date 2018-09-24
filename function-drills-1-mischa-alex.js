function getYearOfBirth (age) {
  if (age < 0){
    throw new Error("Age cannot be negative");
  }
  return 2018 - age;
}

function createGreeting (name, age) {
  if(!name || !age){
    throw new Error('please enter your name and age!!');
  } 
  if (typeof name !== "string" || typeof age !== "number") {
    throw new TypeError('please enter name as a string and age as a number');
  }
  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yob}.`;
}

try{
  const greeting1 = createGreeting('Alex', 13); 
  console.log(greeting1);
}catch(e) {
  console.log(e);
}
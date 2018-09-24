function getYearOfBirth (age) {
  if (age < 0){
    throw new Error("Age cannot be negative");
  }
  return 2018 - age;
}

function createGreeting (name, age) {
  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yob}.`;
}

try{
  const greeting1 = createGreeting('Alex', -13); 
  console.log(greeting1);
}catch(e) {
  console.log(e);
}
const fs = require('fs');

const genders = ['F', 'M'];
const maleNames = ['Krzysztof', 'Irek', 'Nikodem', 'Piotr', 'Rafał', 'Staszek', 'Olek', 'Michał', 'Jacek', 'Tomek', 'Wojtek'];
const femaleNames = ['Anna', 'Lidia', 'Wanda', 'Ewa', 'Ola', 'Ela', 'Ilona', 'Dominika', 'Natalia', 'Marta', 'Paulina', 'Kunegunda'];
const lastNames = ['Nowak', 'Pawlak', 'Kargul', 'Woźny', 'Markiewicz', 'Mickiewicz', 'Wypych', 'Denisz', 'Miś', 'Marcel', 'Wojtaszek'];

function randChoice(arr) {
  const arrayLength = arr.length;
  const arrayElement = Math.floor(Math.random() * arrayLength);
  const randomElement = arr[arrayElement];
  return randomElement;
}

const people = [];

for (i = 0 ; i < 20 ; i++) {
  const gender = randChoice(genders);
  let firstName;

  if (gender === 'M') {
    firstName = randChoice(maleNames);  
  }
  else if (gender === 'F') {
    firstName = randChoice(femaleNames);  
  }
  const lastName =  lastNames[Math.floor(Math.random() * lastNames.length)];
  const age = Math.floor(Math.random() * 70) + 10;

  people.push({gender: gender, firstName: firstName, lastName: lastName, age: age});
}

const peopleJSON = JSON.stringify(people);

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw ('Something went wrong');
  console.log('File people.json was created succesfully');
});
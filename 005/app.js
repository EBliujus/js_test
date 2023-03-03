/* 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. */

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let skaiciai = 0;

while (skaiciai !== 5) {
skaiciai = Math.floor(Math.random() * 10) + 1;
console.log(skaiciai);
    
  }

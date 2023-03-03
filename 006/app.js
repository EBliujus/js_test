/* 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. */

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

 const ArrLength = Math.floor(Math.random() * 11) + 20;
 console.log(ArrLength);

 const Arr = [];

 for (let i = 0; i < ArrLength; i++){
    numeriai = Math.floor(Math.random() * 21) + 10; 
    Arr.push(numeriai) ;
 }
 console.log(Arr);

let maxNum = Arr[0];

for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] > maxNum) {
        maxNum = Arr[i]
    }
}
console.log(maxNum);
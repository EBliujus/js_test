/* 7. 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės */

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Arr = [];

const Letters = ['A', 'B', 'C', 'D'];

for (let i = 0; i < 100; i++) {

    randLetters = Letters[Math.floor(Math.random() * Letters.length)];

    Arr.push(randLetters);
}

console.log(Arr);

console.log('------------------------------------------');

let A = 0;
let B = 0;
let C = 0;
let D = 0;

for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] === 'A'){
        A++;
    } else if (Arr[i] === 'B') {
        B++;
    } else if (Arr[i] === 'C'){
        C++;
    } else {
        D++;
    }
}
console.log('A:', A ,'B:', B ,'C:', C ,'D:', D);
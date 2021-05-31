// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return console.log(false);;
//         }
//     }
//     return console.log(true);
    
// }
// palindrome('dsds');



function polindrom(str) { 
    str = str.toLowerCase().replace(/\s/g, ''); // привожу к нижней строке так же убираю пробелы
    // str === str.split('').reverse().join('');
    (str === str.split('').reverse().join('')) ? console.log(true, `${str}`) : console.log(false, `${str}`);
    // задаю условие 
    // сравниваю строку с строкой у кторой метод spliе превращает в массив
    // reverse переворачивает строку
    // join склеивает строку 
};
polindrom('Anton');





let ss = /[А-ЯЁ]\W{3,4}/g;
let nn = 'Женя, Антон и Дима пришли на день рождения сразу, а Миша пришел позже';
let sis = nn.replace(/,/, '');
let result = sis.match(ss);

console.log(`На день рождения пришли : ${result[0]}, ${result[1]}, ${result[2]}, ${result[3]}`);




let str = 'Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха была ручка';
let stri = str.replace(/,/g , ".");

string = stri.replace(/(^|\.\s+)(.)/g, function(a, b, c){
    return b + c.toUpperCase();
  });

console.log(string);



for (let f = 0; f <= 100; f++){
    if (f === 0){
        console.log(f); continue
    } 
    let str1 = '';
    if (f % 3 === 0){
        str1 += 'Fizz'
    } 
    if ( f % 5 === 0){
        str1 += 'Buzz'
    };
    console.log(str1 || f);
}; 

for(let fi = 0; fi <= 100; fi++){
    if (fi === 0){
        console.log(fi); continue
    } 
    let str3 = '';
    (fi % 3 === 0 && fi % 5 === 0) ? str3+='Fizz'+'Buzz':
    (fi % 3 === 0) ?  str3+='Fizz':
    (fi % 5 === 0) ?  str3+='Buzz': ''; 
    console.log(str3 || fi);
};



for(let i = 0; i <= 100; i++){
    switch(0){
        case(i % 15) : console.log('Fizz'+'Buzz');
        break;
        case(i % 3) : console.log('Fizz');
        break;
        case (i % 5) : console.log('Buzz');
        break;
        default : console.log(i);
        break;
    };
};




const fruits = ['Aplle', 'Pear', 'Orange', 'Grapes', 'Banana'];
let ArrFruits = fruits;

let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
let strVegetables = vegetables.join('-');

console.log(strVegetables);


const nums = [1,2,3,4,5];
function arraySum(array) {
    let sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    };
    console.log(sum);
}
arraySum(nums);



const languages = ['php','php','css','css','script','script','html','html','java'];
for (let i = 1; i <= languages.length; i++) {
    // console.log(i);
    // console.log(languages);
    if (languages.indexOf(languages[i]) != i)
      languages.splice(i, 1);
  }
  console.log(languages);



  const repeatingNums = [3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8];
  let result1 = {};
  for (let i = 0; i < repeatingNums.length; ++i){
        let a = repeatingNums[i];
        if (result1[a] != undefined){
            ++result1[a];
        }else{
            result1[a] = 1;
        };
    };
  for (let key in result1)
        console.log('число ' + key + ' - ' + result1[key] + ' раз(а)');




constfalsyArray = [NaN, 0, 77, false, -17, '', undefined, 99, null];
let arrConstfalsyArray = constfalsyArray.filter(Boolean);
console.log(arrConstfalsyArray);




let obj ={
    a : 1,
    b : 2,
    c : 3,
};
console.log(obj.c);
console.log(obj['c']);




let obj1 ={
    Den: 1000,
    Matt: 5000,
    Steve: 2000,
    Peter: 3000,
    Kolya: 4000,
};
console.log(`зп Пети ${obj1['Peter']} и зп Коли ${obj1.Kolya}`);






let obj2 ={
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
};
const day = obj2;
console.log(day[3]);




let arrName = [];
let arrZp = [];

let obj3 ={
    Den: 1000,
    Matt: 5000,
    Steve: 2000,
    Peter: 3000,
    Kolya: 4000,
};
for(key in obj3){
    arrName.push(key);
    arrZp.push(obj3[key]);
};
console.log(`работники ${arrName} и их зп ${arrZp}`);

//nbhbhhbnbn
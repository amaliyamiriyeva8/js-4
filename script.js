//----1. Funksiya yazacaqsız, funksiya 2 parametr qəbul edir, 1-cisi array 2-cisi number (ex. myFunc([1,2,3,4,5], 4)) . Həmin funksiyanın nəticəsi 0-cı indeks-dən number-in sayı qədər array-in içindən ədədləri götürüb yeni array-ə yığmalısız (myFunc([1,2,3,4,5], 4) => [1,2,3,4])-------//
let arr=[1,2,3,4,5];
let number=4;
const myFunc=function(arr,number){
 let a=[];
  for(let i=0; i<number;i++){
    a.push(arr[i])
  }
  return a;
}
let a=myFunc(arr,number) ;
console.log(a);

//----------2. findMultiples adlı funksiya yazacaqsız, 2 number parametri alır (ex. findMultiples(number, limit)) - number-dan limitə qədər limitdə daxil olmaqla yeni array-ə number-in 2-yə hasillərini əlavə edəcəksiz, taki limitə çatana qədər.(ex findMultiples(2, 6) = > result = [2, 4] or findMultiples(5, 30) = > result = [5, 10, 20])----------//


const findMultiples=function(number1,limit1){
    let limit2=[];
    for(let i=number1; i<=limit1;i*=2){
      limit2.push(i);
    }
    return limit2;
}
let limit2=findMultiples(5,30);
console.log(limit2);





//----------3. Count funksiyası verilir, 1 number parametri alır, 1-dən həmin number-a qədər yeni array yaradın(ex. count(10) => result = [1,2,3,4,5,6,7,8,9,10])-------//
  let number2;
  const count=function(number2){
    let newArray=[];
    for(let i=1;i<=number2;i++){
        newArray.push(i);
    }
    return newArray;
}
let newArray=count(10) ;
console.log(newArray);












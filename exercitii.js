// Implemetează o funcție arrow care primește ca parametru un array de string și îmi returnează un singur 
// string obținut prin concatenarea string-urilor din array-ul primit ca parametru. 

let stringArr = ['Ana', 'are', 'mere', '!']

const concatString = (arr) => {
    return arr.join(" ")
}

const concatStringRed = (arr) => {
    const initialValue = '';
    return arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );
}

console.log(concatString(stringArr));
console.log(concatString(stringArr));

// Implementează o funcție care returnează numărul de caractere diferite între două string-uri de aceeași lungime primite ca parametri.
// Dacă string-urile primite nu sunt de aceeași lungime, funcția va returna -1. 

const numOfCharac = (str1, str2) => {
    if (str1.length !== str2.length) return -1
    let elStr1 = [], elStr2 = []
    let counter = 0;

    for (const i in str1) {
        if (str1[i] !== str2[i]) {
            counter++
        }
    }
    return counter;
}

console.log(numOfCharac('Ana', 'mare'))

// Implementează o funcție care primește ca și parametri 
// un string și o literă și returnează de câte ori se regăsește litera în respectivul text. 

const strFunc = (str, lit) => {
    let counter = 0;
    for (const i of str) {
        if (i === lit) {
            counter++;
        }
    }
    return counter;
}

console.log(strFunc('ana', 'a'));

// Implementează o funcție care primește ca parametrii două 
// array-uri de aceeași lungime și returnează un array cu elementele din cele două surse intercalate. 

const twoStrings = (str1, str2) => {
    if (str1.length !== str2.length) return -1
    let result = [];
    for (let i = 0; i < str1.length; i++) {
        result.push(str1[i], str2[i]);
    }
    return result;
}

console.log(twoStrings('abc', 'def'));

//  Implementează o funcție care primește ca și parametru un array de numere și care calculează media aritmetică a numerelor. 

const aritmetic = (numArr) => {
    let result = []
    for (let i = 0; i < numArr.length; i++) {
         result.push(numArr[i] / 2);
    }
    return result;
}

console.log(aritmetic([1, 2, 3, 4]))
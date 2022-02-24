'use strict'

function button_id(){
    let day = document.getElementById("idInput_day").value;
    let month = document.getElementById("idInput_month").value;
    let year = document.getElementById("idInput_year").value;

let dd = Number(day);
let mm = Number(month);
let yy = Number(year);

if (dd > 31 || dd <= 0) {
    throw new Error(alert('Число не должно быть 0 и больше 31'));
};

if (mm > 12 || mm <= 0 ) {
    throw new Error(alert('Число не должно быть 0 и больше 12'));
};

//Разбираю dd на запчасти. Пример: 13 (1 , 3) 
let a = Math.floor(dd / 10);
let b = dd - (a * 10);

//Разбираю mm на запчасти. Пример: 11 (1 , 1)
let c = Math.floor(mm / 10);
let d = mm - (c * 10);

//Разбираю yy на запчасти. Пример: 1987 (1 , 9 , 8 , 7)
let e = Math.floor(yy / 1000);//1
let e1 = yy - (e * 1000);       
let f = Math.floor(e1 / 100);// 9
let f1 = e1 - (f * 100);          
let g = Math.floor(f1 / 10);// 8
let h = f1 - (g * 10); // 7

// Первое базовое число:
let resultOne = Number((a + b + c + d + e + f + g + h));

//Второе базовое число:
let resultTwo = (twoNumArg1,twoNumArg2) => {
	twoNumArg1 = Math.floor(resultOne / 10);
	twoNumArg2 = resultOne - (twoNumArg1 * 10);
	resultTwo = twoNumArg1 + twoNumArg2;
};
resultTwo ();

//Третье базовое число:
let resultThree = (correction) => {
	if (a == 0) {
            correction = (a + b);
            resultThree = resultOne - (correction * 2);
        } else {
			resultThree = resultOne - (a * 2);
			}
};
resultThree()

//Четвёртое базовое число:
let resultFour = (fourNumArg1,fourNumArg2) => {
    fourNumArg1 = Math.floor(resultThree / 10);
    fourNumArg2 = resultThree - (fourNumArg1 * 10);
    resultFour  = fourNumArg1 + fourNumArg2;
};
resultFour()

//Создаю массив
let arrayNumberStr1 = [dd,mm,yy];
    //console.log(arrayNumberStr1);

let arrayNumberStr2 = [resultOne,resultTwo,resultThree,resultFour];
    //console.log(arrayNumberStr2);

// Перебор массива
let x = [...arrayNumberStr1, ...arrayNumberStr2]
    .reduce((a, b) => {
    a.push(...String(b))
    return a
    }, [])
    .reduce((a, b) => {
    if (!Object.prototype.hasOwnProperty.call(a, b)) {
        a[b] = ''
    }
    a[b] += String(b)
    return a
    }, {})

let personality = x[1];
let energy = x[2];
let creativity = x[3];
let health = x[4];
let logic = x[5];
let skill = x[6];
let luck = x[7];
let senseOfDuty = x[8];
let memory = x[9];
//let numberID = arrayNumberStr2;

//Один
let d1 = document.getElementById('one');
if (personality == undefined){
    d1.innerHTML = '-';
} else { 
    d1.innerHTML = personality;
    console.log(personality + ' - Характер')
};

//Два
let d2 = document.getElementById('two')
if (energy == undefined){
    d2.innerHTML = '-';
} else {
    d2.innerHTML = energy;
    console.log(energy + ' - Энергетика')
};

//Три
let d3 = document.getElementById('three');
if (creativity == undefined){
    d3.innerHTML = '-';
} else {
    d3.innerHTML = creativity;
    console.log(creativity + ' - Творчество')
};

//Четыре
let d4 = document.getElementById('four');
if (health == undefined){
    d4.innerHTML = '-';
} else {
    d4.innerHTML = health;
    console.log(health + ' - Здоровье')
};

//Пять
let d5 = document.getElementById('five');
if (logic == undefined){
    d5.innerHTML = '-';
} else {
    d5.innerHTML = logic;
    console.log(logic + ' - Логика')
};

//Шесть
let d6 = document.getElementById('six');
if (skill == undefined){
    d6.innerHTML = '-';
} else {
    d6.innerHTML = skill;
    console.log(skill + ' - Навык')
};

//Семь
let d7 = document.getElementById('seven');
if (luck == undefined){
    d7.innerHTML = '-';
} else {
    d7.innerHTML = luck;
    console.log(luck + ' - Удача')
};

//Восемь
let d8 = document.getElementById('eight');
if (senseOfDuty == undefined){
    d8.innerHTML = '-';
} else {
    d8.innerHTML = senseOfDuty;
    console.log(senseOfDuty + ' - Чувство долга')
};

//Девять
let d9 = document.getElementById('nine');
if (memory == undefined){
    d9.innerHTML = '-';
} else {
    d9.innerHTML = memory;
    console.log(memory + ' - Память')
};

//Дополнительные числа
let numberID = resultOne + "  " + resultTwo + "  " + resultThree + "  " + resultFour;
let additionalNumbers = document.getElementById('number__id');
additionalNumbers.innerHTML = numberID;

}

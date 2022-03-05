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
if (yy < 1920 || yy <= 0 || yy > 2100 ) {
    throw new Error(alert('Число не должно быть меньше 1920 или больше 2100'));
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

//Один
let createParagrafPersonality = document.createElement('p');
createParagrafPersonality.className = 'box__paragraf';
createParagrafPersonality.innerHTML = 'Характер';


let d1 = document.getElementById('one');
if (personality == undefined){
    d1.innerHTML = '-';
    d1.append(createParagrafPersonality);
    } else { 
        d1.innerHTML = personality;
        d1.append(createParagrafPersonality);
        //console.log(personality + ' - Характер')
};

//Два
let createParagrafEnergy = document.createElement('p');
createParagrafEnergy.className = 'box__paragraf';
createParagrafEnergy.innerHTML = 'Энергетика';

let d2 = document.getElementById('two')
if (energy == undefined){
    d2.innerHTML = '-';
    d2.append(createParagrafEnergy);
    } else {
        d2.innerHTML = energy;
        d2.append(createParagrafEnergy);
        //console.log(energy + ' - Энергетика')
};

//Три
let createParagrafCreativity = document.createElement('p');
createParagrafCreativity.className = 'box__paragraf';
createParagrafCreativity.innerHTML = 'Творчество';

let d3 = document.getElementById('three');
if (creativity == undefined){
    d3.innerHTML = '-';
    d3.append(createParagrafCreativity);
    } else {
        d3.innerHTML = creativity;
        d3.append(createParagrafCreativity);
        //console.log(creativity + ' - Творчество')
};

//Четыре
let createParagrafHealth = document.createElement('p');
createParagrafHealth.className = 'box__paragraf';
createParagrafHealth.innerHTML = 'Здоровье';

let d4 = document.getElementById('four');
if (health == undefined){
    d4.innerHTML = '-';
    d4.append(createParagrafHealth);
    } else {
        d4.innerHTML = health;
        d4.append(createParagrafHealth);
        //console.log(health + ' - Здоровье')
};

//Пять
let createParagrafLogic = document.createElement('p');
createParagrafLogic.className = 'box__paragraf';
createParagrafLogic.innerHTML = 'Логика';

let d5 = document.getElementById('five');
if (logic == undefined){
    d5.innerHTML = '-';
    d5.append(createParagrafLogic);
    } else {
        d5.innerHTML = logic;
        d5.append(createParagrafLogic);
        //console.log(logic + ' - Логика')
};

//Шесть
let createParagrafSkill = document.createElement('p');
createParagrafSkill.className = 'box__paragraf';
createParagrafSkill.innerHTML = 'Мастерство';

let d6 = document.getElementById('six');
if (skill == undefined){
    d6.innerHTML = '-';
    d6.append(createParagrafSkill);
    } else {
        d6.innerHTML = skill;
        d6.append(createParagrafSkill);
        //console.log(skill + ' - Навык')
};

//Семь
let createParagrafLuck = document.createElement('p');
createParagrafLuck.className = 'box__paragraf';
createParagrafLuck.innerHTML = 'Удача';

let d7 = document.getElementById('seven');
if (luck == undefined){
    d7.innerHTML = '-';
    d7.append(createParagrafLuck);
    } else {
        d7.innerHTML = luck;
        d7.append(createParagrafLuck);
        //console.log(luck + ' - Удача')
};

//Восемь
let createParagrafSenseOfDuty = document.createElement('p');
createParagrafSenseOfDuty.className = 'box__paragraf';
createParagrafSenseOfDuty.innerHTML = 'Чувство долга';

let d8 = document.getElementById('eight');
if (senseOfDuty == undefined){
    d8.innerHTML = '-';
    d8.append(createParagrafSenseOfDuty);
    } else {
        d8.innerHTML = senseOfDuty;
        d8.append(createParagrafSenseOfDuty);
        //console.log(senseOfDuty + ' - Чувство долга')
};

//Девять
let createParagrafMemory = document.createElement('p');
createParagrafMemory.className = 'box__paragraf';
createParagrafMemory.innerHTML = 'Память';

let d9 = document.getElementById('nine');
if (memory == undefined){
    d9.innerHTML = '-';
    d9.append(createParagrafMemory);
    } else {
        d9.innerHTML = memory;
        d9.append(createParagrafMemory);
        //console.log(memory + ' - Память')
};

// Дата рождения (добавление нулей если значение < 10 )
let matrixDay = dd;
if (dd < 10 ) {
    matrixDay  = '0' + dd;
    } else {
        matrixDay = dd;
};
let matrixMonth = mm;
if (mm < 10 ) {
    matrixMonth = '0' + mm;
    } else {
        matrixMonth = mm;
};

let matrixWrepperID = matrixDay + '.' + ' ' + matrixMonth + '.' + ' ' + yy;
let matrixWrepperBirthday = document.getElementById ('matrix__wrapper-id');
matrixWrepperBirthday.innerHTML = matrixWrepperID;

//Открывает блок с матрицей
let matrixWrepper = document.querySelector('.matrix__wrapper');
if (matrixWrepper.style.display = 'none') {
    matrixWrepper.style.display = 'block';
};

//Дополнительные числа
let numberID = resultOne + '  ' + resultTwo + '  ' + resultThree + '  ' + resultFour;
let additionalNumbers = document.getElementById('number__id');
additionalNumbers.innerHTML = numberID;

//Открывает надпись "Дополнительные числа", по умолчанию скрыта (display = 'none').
let additionalNumbersText = document.querySelector('.additional__number-text')
additionalNumbersText.style.display = 'block';

let functionWrp = document.querySelector('.function__wrp');
if(functionWrp.style.display = 'block') {
    functionWrp.style.display = 'none';
};

};

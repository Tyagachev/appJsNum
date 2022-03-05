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
        switch(personality) {
            case "111111":
                let writeCalcSixOne = document.createElement('p');
                writeCalcSixOne.className = 'calc__text-paragraf';
                writeCalcSixOne.innerHTML ='Характер - ' + personality + ' ' + '- ' + 'Перегруз качества. В результате значение обнуляется и приравнивается к противоположному значению, то есть к значению, если единиц нет или в ячейке стоит одна единица. Следовательно, если в графе получилось 111111 и больше, то человек слабохарактерный, но эгоистичный. Рекомендации те же – укреплять характер, меньше думать о себе и стараться заботиться о близких людях.'
                let writeCalcSixOneId = document.getElementById('calc__text-p');
                writeCalcSixOneId.append(writeCalcSixOne)
                break;
            case "11111":
                let writeCalcFiveOne = document.createElement('p');
                writeCalcFiveOne.className = 'calc__text-paragraf';
                writeCalcFiveOne.innerHTML ='Характер - ' + personality + ' ' + '- ' + 'Диктатор, тиран и самодур. С таким человеком сложно общаться. Он все время давит своим авторитетом. Для него существует только собственное мнение. Все другие точки зрения он считает неправильными, если они не совпадают с его взглядами. На работе и в бизнесе такие люди одиночки, поскольку с ними невозможно сотрудничать. В семье также проявляется тирания человека. Самое плохое заключается в том, что такие люди не меняются. Их устраивает такой характер, и она не считают его ужасным.'
                let writeCalcFiveOneId = document.getElementById('calc__text-p');
                writeCalcFiveOneId.append(writeCalcFiveOne)
                break;
            case "1111":
                let writeCalcFourOne = document.createElement('p');
                writeCalcFourOne.className = 'calc__text-paragraf';
                writeCalcFourOne.innerHTML ='Характер - ' + personality + ' ' + '- ' + 'Это значение говорит о том, что у человека сильно развиты лидерские качества. Он предъявляет повышенные требования не только к окружающим, но и к себе. Еще одна особенность – прежде, чем что-то сделать, человек заранее думает о последствиях. С такими людьми сложно общаться и работать. Сотрудничество и семья получится только в том случае, если партнеры, коллеги или вторая половинка будут соответствовать высоким требованиям этого человека. Однако такое случается очень редко. Поэтому люди с таким значением часто остаются в одиночестве.'
                let writeCalcFourOneId = document.getElementById('calc__text-p');
                writeCalcFourOneId.append(writeCalcFourOne)
                break;
                case "111":
                    let writeCalcThreeOne = document.createElement('p');
                    writeCalcThreeOne.className = 'calc__text-paragraf';
                    writeCalcThreeOne.innerHTML ='Характер - ' + personality + ' ' + '- ' + 'Сильный, волевой, но уравновешенный. Человек может отстаивать собственное мнение, если этого требуют обстоятельства. На таких людей бесполезно давить и к чему-то их принуждать. Они могут дать достойный отпор. Это помогает им построить карьеру и устроить личную жизнь. Часто такие люди становятся руководителями. Помимо этого, люди с таким значением не отличаются авторитарностью. Они не давят на окружающих, предоставляя им свободу выбора. Считается, что это лучшее значение в таблице Пифагора.'
                    let writeCalcThreeOneId = document.getElementById('calc__text-p');
                    writeCalcThreeOneId.append(writeCalcThreeOne)
                    break;
            case "11":
                let writeCalcTwoOne = document.createElement('p');
                writeCalcTwoOne.className = 'calc__text-paragraf';
                writeCalcTwoOne.innerHTML ='<span class ="calc__text-bold">Характер</span> - ' + personality + ' ' + '- ' + 'Мягкий и в меру эгоистичный. Чувствуется, что человек подвержен чужому влиянию, но в принципиальных вопросах может отстоять собственную точку зрения. Однако он считает, что это не всегда уместно делать. В непринципиальных вопросах ему легче отступить, чем настоять на своем. Еще одна черта характера – легкость в общении. Такой человек может легко найти общий язык с окружающими. Однако твердости все-таки не хватает. Это не критично, если таблица Пифагора составлена для женщины. Мужчинам же рекомендуется развивать силу характера.'
                let writeCalcTwoOneId = document.getElementById('calc__text-p');
                writeCalcTwoOneId.append(writeCalcTwoOne)
                break;
            default:
                let writeCalcDefault = document.createElement('p');
                writeCalcDefault.className = 'calc__text-paragraf';
                writeCalcDefault.innerHTML ='Характер - ' + personality + ' ' + '- ' + 'В ячейке нет единиц или одна единица. Это указывает на слабый характер. На человека можно влиять, у него нет собственного мнения. К нему применимо определение «маменькин сынок». Кроме того, человек слабохарактерен, но эгоистичен. Он считает, что все в этом мире создано для него. Все должны исполнять его прихоти и указания. Таким людям рекомендуется развивать силу характера, учиться отстаивать собственную точку зрения, стараться меньше думать о себе и с заботой и пониманием относиться к окружающим.'
                let writeCalcDefaultId = document.getElementById('calc__text-p');
                writeCalcDefaultId.append(writeCalcDefault)
        }


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
        switch(energy) {
            case "222222":
                let writeCalcSixTwo = document.createElement('p');
                writeCalcSixTwo.className = 'calc__text-paragraf';
                writeCalcSixTwo.innerHTML ='Энергетика - ' + energy + ' ' + '- ' + 'и больше – перегруз энергии. С такими людьми невозможно общаться, поскольку их энергетика давит, и очень быстро начинает болеть голова. Кроме того, такие люди любят навязывать свою точку зрения и указывать, как и что нужно делать. Из-за этого общаться с ними сложно вдвойне. Чтобы изменить характер, важно избавляться от излишка энергии. Делать это рекомендуется утром и вечером. Оптимальный вариант – утренняя пробежка и вечернее посещение спортзала. Если этого не сделать, то излишек энергии будет давить на самого человека.'
                let writeCalcSixTwoId = document.getElementById('calc__text-p');
                writeCalcSixTwoId.append(writeCalcSixTwo)
                break;
            case "22222":
                let writeCalcFiveTwo = document.createElement('p');
                writeCalcFiveTwo.className = 'calc__text-paragraf';
                writeCalcFiveTwo.innerHTML ='Энергетика - ' + energy + ' ' + '- ' + 'энергии слишком много. В этом случае важно найти ей правильное применение. Если этого не сделать, то энергия преобразуется в негатив. В результате характер становится сложным, конфликтным. С окружающими постоянно возникают скандалы. Чтобы этого избежать, рекомендуется заняться спортом, танцами или чем-то другим, где можно избавиться от излишка энергии. При этом следует постоянно давать выход эмоциям. Нельзя копить в себе негатив, иначе он может выплеснуться в самый неподходящий момент, и возникнет грандиозный скандал.'
                let writeCalcFiveTwoId = document.getElementById('calc__text-p');
                writeCalcFiveTwoId.append(writeCalcFiveTwo)
                break;
            case "2222":
                let writeCalcFourTwo = document.createElement('p');
                writeCalcFourTwo.className = 'calc__text-paragraf';
                writeCalcFourTwo.innerHTML ='Энергетика - ' + energy + ' ' + '- ' + 'человека переполняет энергия. Это во многом влияет на характер его поступков. Люди с таким значением чаще всего сначала делают и только после этого задумываются о своих поступках. Этим и объясняется большое количество необдуманных действий и проблем, которые они за собой повлекли. Чтобы не оказаться в безвыходной ситуации, рекомендуется умерить свой пыл и сначала все тщательно обдумывать, прежде чем что-то сделать. Кроме того, люди с четырьмя двойками во второй ячейке отличаются экстрасенсорными способностями. Они могут их развивать, что поможет им даже освоить целительство и лечить людей.'
                let writeCalcFourTwoId = document.getElementById('calc__text-p');
                writeCalcFourTwoId.append(writeCalcFourTwo)
                break;
            case "222":
                    let writeCalcThreeTwo = document.createElement('p');
                    writeCalcThreeTwo.className = 'calc__text-paragraf';
                    writeCalcThreeTwo.innerHTML ='Энергетика - ' + energy + ' ' + '- ' + 'человек обладает большим количеством энергии. Он может ей делиться с окружающими. Поэтому рядом с такими людьми комфортно находиться. У человека с таким значением всегда много друзей и просто хороших знакомых. Он редко бывает один, но чаще всего не страдает от этого. Человек любит общение и шумные компании. Ему не требуется уединение, чтобы восстановить собственные силы. Люди с тремя двойками пользуются повышенным вниманием у противоположного пола. Поэтому они легко и быстро устраивают свою личную жизнь. Даже если отношения не ладятся, они могут легко сменить партнера.'
                    let writeCalcThreeTwoId = document.getElementById('calc__text-p');
                    writeCalcThreeTwoId.append(writeCalcThreeTwo)
                    break;
            case "22":
                let writeCalcTwoTwo = document.createElement('p');
                writeCalcTwoTwo.className = 'calc__text-paragraf';
                writeCalcTwoTwo.innerHTML ='Энергетика - ' + energy + ' ' + '- ' + 'люди с таким значением могут как делиться энергией, так и поглощать ее, но комфортнее всего они себя чувствуют в компании людей с большими энергетическими запасами. За их счет они и подпитываются жизненными силами. Люди с таким значением чаще всего энергичные. Они любят спорт, танцы, поскольку им сложно сидеть на одном месте. Однако для восполнения затраченной энергии им требуется полноценный отдых. Только в этом случае они могут восстановить собственные силы. Помимо этого, люди с таким значением добрые, но обидчивые. Их может задеть любое слово и действие. Даже самый безобидный жест они могут воспринять как личное оскорбление. Из-за этого с такими людьми бывает сложно общаться.'
                let writeCalcTwoTwoId = document.getElementById('calc__text-p');
                writeCalcTwoTwoId.append(writeCalcTwoTwo)
                break;
            case "2":
                    let writeCalcOneTwo = document.createElement('p');
                    writeCalcOneTwo.className = 'calc__text-paragraf';
                    writeCalcOneTwo.innerHTML ='Энергетика - ' + energy + ' ' + '- ' + 'в этом случае биоэнергетические каналы также открыты для поглощения, но энергетический вампиризм невыраженный. Чтобы компенсировать недостаток энергии, рекомендуется больше уделять внимания физическим упражнениям. Это поможет не «высасывать» ее из окружающих, что облегчит общение с ними. Такие люди отличаются повышенной чувствительностью к изменениям в погоде. Им рекомендуется избегать стрессов, поскольку каждое сильное потрясение негативно отражается на психоэмоциональном и физическом здоровье.'
                    let writeCalcOneTwoId = document.getElementById('calc__text-p');
                    writeCalcOneTwoId.append(writeCalcOneTwo)
                    break;
            default :
                let writeCalcTwoDefault = document.createElement('p');
                writeCalcTwoDefault.className = 'calc__text-paragraf';
                writeCalcTwoDefault.innerHTML ='Энергетика - ' + 'Нет числа ' + '- ' + 'Отсутствие двойки. Такие люди неконфликтные, но им сложно привлекать представителей противоположного пола. В результате у них часто не ладится личная жизнь, и они остаются в одиночестве. Биоэнергетический канал таких людей открыт к поглощению. Людей с таким значением часто называют энергетическими вампирами. С ними сложно общаться, поскольку даже после непродолжительного диалога чувствуется потеря сил, энергетическое истощение. Люди с таким показателем любят антиквариат, раритет и просто чужие старые вещи. Этим и объясняется то, что они постоянно болеют.'
                let writeCalcTwoDefaultId = document.getElementById('calc__text-p');
                writeCalcTwoDefaultId.append(writeCalcTwoDefault)
        }


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
        switch(creativity) {
            case "33333":
                let writeCalcFiveThree = document.createElement('p');
                writeCalcFiveThree.className = 'calc__text-paragraf';
                writeCalcFiveThree.innerHTML ='Творчество - ' + creativity + ' ' + '- ' + 'и больше – если в таблице Пифагора стоит такой показатель, то это означает, что у человека есть возможность самосовершенствоваться и реализовать свои способности, но нет желания этого делать. Он не ленится, его просто все устраивает в своей жизни, и он не хочет что-то менять. Даже если ему будет предложена перспективная должность, он откажется от нее, если на занимаемом месте ему комфортно. Однако, если человек с таким показателем захочет что-то поменять в своей жизни, он сможет это сделать. Ему не составит труда освоить новый вид деятельности, если возникнет такое желание.'
                let writeCalcFiveThreeId = document.getElementById('calc__text-p');
                writeCalcFiveThreeId.append(writeCalcFiveThree)
                break;
            case "3333":
                let writeCalcFourThree = document.createElement('p');
                writeCalcFourThree.className = 'calc__text-paragraf';
                writeCalcFourThree.innerHTML ='Творчество - ' + creativity + ' ' + '- ' + 'такой показатель сулит человеку успех в науке. Люди с таким показателем отличаются выдающимися способностями, развитым интеллектом и тягой к самосовершенствованию. Еще одна их особенность – усидчивость. Благодаря этому они могут спокойно браться за написание различных научных трудов. Однако они могут добиться больших высот в выбранной сфере, если тыл будет прикрыт. Это означает, что близкие люди должны им обеспечить все условия для работы. Для этого они должны взять на себя все домашние дела. Ничто не должно отвлекать человека от его работы, в противном случае на положительный результат можно не рассчитывать.'
                let writeCalcFourThreeId = document.getElementById('calc__text-p');
                writeCalcFourThreeId.append(writeCalcFourThree)
                break;
            case "333":
                    let writeCalcThreeThree = document.createElement('p');
                    writeCalcThreeThree.className = 'calc__text-paragraf';
                    writeCalcThreeThree.innerHTML ='Творчество - ' + creativity + ' ' + '- ' + 'расчетливость, замкнутость, прагматичность. Это основные характеристики человека с такими показателями. Он точно знает, чего хочет и как нужно действовать, чтобы добиться поставленной цели, но реализацию планов откладывает на последний момент. В результате многие задумки не может осуществить из-за элементарной нехватки времени. Люди с таким показателем необщительны. Они предпочитают уединение большим компаниям. Из-за этого у них мало друзей. Однако, если они посчитают общение с каким-либо человеком выгодным для себя, то будут стараться поддерживать отношения с ним.'
                    let writeCalcThreeThreeId = document.getElementById('calc__text-p');
                    writeCalcThreeThreeId.append(writeCalcThreeThree)
                    break;
            case "33":
                let writeCalcTwoThree = document.createElement('p');
                writeCalcTwoThree.className = 'calc__text-paragraf';
                writeCalcTwoThree.innerHTML ='Творчество - ' + creativity + ' ' + '- ' + 'такой показатель говорит о том, что человеку присуща порядочность и тяга к духовному развитию. На протяжении всей жизни он самосовершенствуется. При этом он не требует того же от других. Человек с таким показателем в квадрате Пифагора спокойно относится к недостаткам окружающих. Он прекрасно понимает, что все люди разные и не должны соответствовать его высоким требованиям. Помимо этого, такой человек обладает рядовыми способностями к точным наукам. Следовательно, профессию ему рекомендуется выбирать из гуманитарной области.'
                let writeCalcTwoThreeId = document.getElementById('calc__text-p');
                writeCalcTwoThreeId.append(writeCalcTwoThree)
                break;
            case "3":
                    let writeCalcOneThree = document.createElement('p');
                    writeCalcOneThree.className = 'calc__text-paragraf';
                    writeCalcOneThree.innerHTML ='Творчество - ' + creativity + ' ' + '- ' + 'человек с таким показателем зависим от настроения. Если он захочет что-то сделать, то выполнит это, если не захочет, то не выполнит. Он любит чистоту и порядок, но, если у него нет настроения, то убираться он не станет. При этом настроения к уборке у него нет довольно часто. Человек с таким показателем добрый, отзывчивый и пунктуальный, но он совершенно не умеет копить деньги и экономить. Он совершает множество необдуманных и ненужных покупок. В результате этого у него редко водятся деньги в кошельке. Чтобы измениться в лучшую сторону, рекомендуется заранее планировать бюджет и придерживаться его. Это позволит избежать лишних трат.'
                    let writeCalcOneThreeId = document.getElementById('calc__text-p');
                    writeCalcOneThreeId.append(writeCalcOneThree)
                    break;
            default:
                let writeCalcThreeDefault = document.createElement('p');
                writeCalcThreeDefault.className = 'calc__text-paragraf';
                writeCalcThreeDefault.innerHTML ='Творчество - ' + 'Нет числа ' + '- ' + 'Отсутствие троек. Человека с таким показателем отличает пунктуальность, аккуратность, ответственность. Кроме того, он воспитан, всегда вежлив и тактичен. В его речи нет грубых выражений. Помимо этого, человек с таким значением аккуратист. Дома и на работе у него идеальный порядок. От окружающих он также требует аккуратности и соблюдения пунктуальности. Такому человеку не хватает душевной теплоты. Он всегда строг, даже в отношениях со своими детьми.'
                let writeCalcThreeDefaultId = document.getElementById('calc__text-p');
                writeCalcThreeDefaultId.append(writeCalcThreeDefault)
        }


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
        switch(health) {
            case "4444":
                let writeCalcFourFour = document.createElement('p');
                writeCalcFourFour.className = 'calc__text-paragraf';
                writeCalcFourFour.innerHTML ='Здоровье - ' + health + ' ' + '- ' + 'и больше – у человека с таким показателем редко появляются приобретенные болезни. Однако существует опасность патологий, которые передаются по наследству от родителей. Если такие болезни появляются, то придется всю жизнь мучиться с ними. Обычно генетические патологии выявляются сразу после рождения. От таких болезней чаще всего избавиться не получается. Если же генетических заболеваний не обнаружено, то здоровье у человека будет крепким. Даже сезонные патологии ему не страшны, но для перестраховки лучше всего укреплять иммунитет и регулярно проходить медицинские осмотры.'
                let writeCalcFourFourId = document.getElementById('calc__text-p');
                writeCalcFourFourId.append(writeCalcFourFour)
                break;
            case "444":
                    let writeCalcThreeFour = document.createElement('p');
                    writeCalcThreeFour.className = 'calc__text-paragraf';
                    writeCalcThreeFour.innerHTML ='Здоровье - ' + health + ' ' + '- ' + 'богатырское здоровье. При этом телосложение у человека может быть обычным и даже худощавым. Таким людям не следует опасаться серьезных заболеваний, поскольку предрасположенности к ним нет. Даже простуды человека с данными показателями обходят стороной. Однако не следует забывать укреплять иммунитет и регулярно проходить медицинские обследования. Кроме того, нужно помнить, что вредные привычки могут покачнуть даже самое крепкое здоровье. Помимо этого, людей отличает повышенная сексуальность. Мужчин характеризует хорошая выносливость в интимном плане, а женщин ненасытность. Поэтому люди с данным показателем не испытывают проблем в личной жизни.'
                    let writeCalcThreeFourId = document.getElementById('calc__text-p');
                    writeCalcThreeFourId.append(writeCalcThreeFour)
                    break;
            case "44":
                let writeCalcTwoFour = document.createElement('p');
                writeCalcTwoFour.className = 'calc__text-paragraf';
                writeCalcTwoFour.innerHTML ='Здоровье - ' + health + ' ' + '- ' + 'здоровье хорошее. Человека отличает крепкий иммунитет, а также красивое тело. Он редко болеет, даже в сезон эпидемий. Несмотря на это, люди с таким показателем много внимания уделяют своему здоровью и внешнему виду. Они постоянно выполняют различные процедуры по укреплению иммунитета, профилактике старения и возникновения различных проблем с кожей и волосами. Помимо этого, у человека с таким показателем повышена сексуальность. Это делает его притягательным для противоположного пола. Поэтому люди с таким значением в четвертой ячейке в таблице Пифагора не испытывают трудностей в личной жизни. При желании они быстро создают семью.'
                let writeCalcTwoFourId = document.getElementById('calc__text-p');
                writeCalcTwoFourId.append(writeCalcTwoFour)
                break;
            case "4":
                    let writeCalcOneFour = document.createElement('p');
                    writeCalcOneFour.className = 'calc__text-paragraf';
                    writeCalcOneFour.innerHTML ='Здоровье - ' + health + ' ' + '- ' + 'в целом у человека с таким показателем неплохое здоровье. В молодости он болеет не больше, чем остальные, обычными вирусными патологиями. Серьезные болезни могут появиться с возрастом. Чтобы этого не произошло, рекомендуется заранее позаботиться о своем здоровье. Поможет закаливание, занятие спортом, плавание, регулярные профилактические мероприятия и процедуры по укреплению иммунитета. Это поможет сохранить здоровье на долгие годы. Кроме того, рекомендуется регулярно проходить медицинские осмотры, чтобы обнаруживать болезни на ранних стадиях развития.'
                    let writeCalcOneFourId = document.getElementById('calc__text-p');
                    writeCalcOneFourId.append(writeCalcOneFour)
                    break;
            default:
                let writeCalcFourDefault = document.createElement('p');
                writeCalcFourDefault.className = 'calc__text-paragraf';
                writeCalcFourDefault.innerHTML ='Здоровье - ' + 'Нет числа ' + '- ' + 'Отсутствие четверок указывает на проблемы со здоровьем. Человек предрасположен к различным заболеваниям. В данном случае нужно также учитывать количество двоек во второй ячейке. При их большом количестве вероятность возникновения проблем со здоровьем увеличивается. При этом человек в течение длительного времени может не замечать возникновения болезни из-за хорошего самочувствия. В результате может так оказаться, что болезнь протекала бессимптомно. Поэтому людям с таким показателем рекомендуется чаще проходить медицинские обследования. Это поможет своевременно обнаружить заболевание и предпринять все меры, чтобы от него избавиться.'
                let writeCalcFourDefaultId = document.getElementById('calc__text-p');
                writeCalcFourDefaultId.append(writeCalcFourDefault)
        }

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

switch(logic) {
    case "5555":
        let writeCalcFourFive = document.createElement('p');
        writeCalcFourFive.className = 'calc__text-paragraf';
        writeCalcFourFive.innerHTML ='Логика - ' + logic + ' ' + '- ' + 'экстрасенсорные способности сильно развиты. Благодаря этому человек может предсказывать не только ближайшее, но и далеко будущее, причем не только для себя, близких и других людей, но и в мировом масштабе. Даже если человек не может видеть, что с ним произойдет, он ориентируется на свою интуицию, что помогает ему избежать совершения многих ошибок. Такие люди никогда не сядут в автобус, если он в скором времени попадет в аварию. В большинстве случаем человек с такими показателями реализовывает себя именно в экстрасенсорной области. Они становятся знаменитыми прорицателями.'
        let writeCalcFourFiveId = document.getElementById('calc__text-p');
        writeCalcFourFiveId.append(writeCalcFourFive)
        break;
    case "555":
            let writeCalcThreeFive = document.createElement('p');
            writeCalcThreeFive.className = 'calc__text-paragraf';
            writeCalcThreeFive.innerHTML ='Логика - ' + logic + ' ' + '- ' + 'такие люди обладают экстрасенсорными способностями. Они могут предсказать, что произойдет в ближайшем будущем для конкретного человека и даже в мировом масштабе. Однако далекое будущее они не могут предвидеть. Им для этого не хватает способностей. Поэтому серьезно предсказаниями люди с таким показателем чаще всего не занимаются. Они просто заглядывают в будущее, чтобы сделать правильный выбор в различных ситуациях. Однако есть и такие люди, которые серьезно занимаются предсказаниями.'
            let writeCalcThreeFiveId = document.getElementById('calc__text-p');
            writeCalcThreeFiveId.append(writeCalcThreeFive)
            break;
    case "55":
        let writeCalcTwoFive = document.createElement('p');
        writeCalcTwoFive.className = 'calc__text-paragraf';
        writeCalcTwoFive.innerHTML ='Логика - ' + logic + ' ' + '- ' + 'интуиция сильно развита. Это позволяют людям с данными показателями хорошо разбираться в окружающих. Поэтому их окружают только преданные, надежные друзья, которые никогда не предадут и на которых можно во всем положиться. Кроме того, такие люди практически не совершают ошибок. Интуиция им подсказывает, как лучше всего поступить в разных ситуациях, чтобы не возникло проблем. Часто людям с таким показателем снятся вещие сны. Им рекомендуется выбирать профессию следователя или частного детектива.'
        let writeCalcTwoFiveId = document.getElementById('calc__text-p');
        writeCalcTwoFiveId.append(writeCalcTwoFive)
        break;
    case "5":
            let writeCalcOneFive = document.createElement('p');
            writeCalcOneFive.className = 'calc__text-paragraf';
            writeCalcOneFive.innerHTML ='Логика - ' + logic + ' ' + '- ' + 'слабая интуиция. С таким показателем человек не застрахован от ошибок. Обычно он их совершает в том случае, если не получает достаточного количества информации для реализации задумки. Однако люди с такими показателями стараются учиться на ошибках других, чтобы не совершать своих. Не всегда это получается, ведь интуиция хоть и есть, но она слабенькая. Для перестраховки нужно обращаться за советом к близкому человеку с хорошо развитой интуицией. Это позволит избежать не только ошибок, но и возникновения многих проблем.'
            let writeCalcOneFiveId = document.getElementById('calc__text-p');
            writeCalcOneFiveId.append(writeCalcOneFive)
            break;
    default:
        let writeCalcFiveDefault = document.createElement('p');
        writeCalcFiveDefault.className = 'calc__text-paragraf';
        writeCalcFiveDefault.innerHTML ='Логика - ' + 'Нет числа ' + '- ' + 'Отсутствие пятерок. У человека отсутствует интуиция. При этом человек отличается активностью и постоянно старается изменить жизнь в лучшую сторону. Осуществить задуманное ему и мешает отсутствие интуиции. В связи с этим он совершает массу ошибок. Даже тщательно обдуманный план действий и повышенная активность не приносят того результата, на который рассчитывал человек. В итоге, чтобы добиться успеха в жизни, людям с отсутствием интуиции приходится много и тяжело работать. Выход из ситуации – прислушиваться к близкому человеку с развитой интуицией. Это позволит избежать много ошибок и проблем.'
        let writeCalcFiveDefaultId = document.getElementById('calc__text-p');
        writeCalcFiveDefaultId.append(writeCalcFiveDefault)
}

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

switch(skill) {
    case "6666":
        let writeCalcFourSix = document.createElement('p');
        writeCalcFourSix.className = 'calc__text-paragraf';
        writeCalcFourSix.innerHTML ='Мастерство - ' + skill + ' ' + '- ' + 'этот показатель указывает на близость к земле. Следовательно, человек любит физический труд и может добиться хороших результатов именно на этом поприще. У людей с таким показателем чаще всего отсутствует творческие способности. Они не любят интеллектуальный труд и не стремятся к духовному развитию и самосовершенствованию. По таких людей говорят, что они настоящие работяги и руки у них растут, откуда надо, но научить чему-то других они не могут. Для этого у них нет способностей. Кроме того, у таких людей нет таланта руководителей.'
        let writeCalcFourSixId = document.getElementById('calc__text-p');
        writeCalcFourSixId.append(writeCalcFourSix)
        break;
    case "666":
            let writeCalcThreeSix = document.createElement('p');
            writeCalcThreeSix.className = 'calc__text-paragraf';
            writeCalcThreeSix.innerHTML ='Мастерство - ' + skill + ' ' + '- ' + 'демонический символ. Это число дьявола, которое оказывает сильнейшее влияние на человека. Люди с таким показателем отличаются огромным темпераментом. Из-за этого им сложно устроить личную жизнь и найти вторую половинку, удовлетворяющую их запросам. Помимо этого, люди с таким показателем требуют к себе повышенного внимания. Они считают, что практически весь мир должен крутиться вокруг них, а окружающие должны исполнять только их желания. При расшифровке этого показателя рекомендуется также учитывать количество единиц в первой ячейке. Если их много, то это говорит об авторитарности человека. Он подавляет окружающих людей и навязывает всем собственное мнение.'
            let writeCalcThreeSixId = document.getElementById('calc__text-p');
            writeCalcThreeSixId.append(writeCalcThreeSix)
            break;
    case "66":
        let writeCalcTwoSix = document.createElement('p');
        writeCalcTwoSix.className = 'calc__text-paragraf';
        writeCalcTwoSix.innerHTML ='Мастерство - ' + skill + ' ' + '- ' + 'люди могут заниматься как физическим, так и интеллектуальным трудом, но второй вариант для них предпочтительней. Однако человек с таким показателем выбирает тот род деятельности, который приносит больше денег. Чтобы реализовать себя и в той, и в другой сфере, рекомендуется занимать искусством в качестве хобби. Помимо этого, человек с таким показателем в шестой ячейке таблицы Пифагора отличается упрямством. Если он что-либо решит, его будет сложно заставить изменить свое мнение.'
        let writeCalcTwoSixId = document.getElementById('calc__text-p');
        writeCalcTwoSixId.append(writeCalcTwoSix)
        break;
    case "6":
            let writeCalcOneSix = document.createElement('p');
            writeCalcOneSix.className = 'calc__text-paragraf';
            writeCalcOneSix.innerHTML ='Мастерство - ' + skill + ' ' + '- ' + 'такой показатель говорит о том, что у человека развиты творческие способности, но при этом он любит физический труд. Поэтому ему комфортно заниматься любым видом деятельность. Человек с таким показателем в принципе любит работать, и ему не важно, где именно это делать. Помимо этого, у него имеется склонность к точным наукам. Такой человек может добиться в жизни больших успехов. Он может совмещать интеллектуальный и физический труд, поэтому может реализовать себя на любом поприще. Что касается творческих способностей, то их можно реализовывать в хобби. Часто бывает, что у людей с такими показателями увлечения становятся основным видом деятельности.'
            let writeCalcOneSixId = document.getElementById('calc__text-p');
            writeCalcOneSixId.append(writeCalcOneSix)
            break;
    default:
        let writeCalcSixDefault = document.createElement('p');
        writeCalcSixDefault.className = 'calc__text-paragraf';
        writeCalcSixDefault.innerHTML ='Мастерство - ' + 'Нет числа ' + '- ' + 'Отсутствие шестерки – у человека бурная фантазия. Он витает в облаках, и ему сложно спуститься на землю. У человека с таким показателем много планов и идей, но воплотить в жизнь задумки он не в состоянии. Хорошо, если рядом с ним будет кто-то более прагматичный. В этом случае получится идеальный союз – один человек будет фонтанировать идеи, другой – воплощать их в жизнь. Одному человеку с такими показателями приходится в жизни много работать, учитывая, что к физическому труду он равнодушен.'
        let writeCalcSixDefaultId = document.getElementById('calc__text-p');
        writeCalcSixDefaultId.append(writeCalcSixDefault)
}

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

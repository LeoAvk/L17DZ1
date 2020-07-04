// Задание 1:
// Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for выведите все эти элементы на экран.
let massiv = [`a`, `b`, `c`, `d`, `e`];
for (let i = 0; i < massiv.length; i++){
    console.log(massiv[i]);
}

// Задание 2:
// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for и оператора if выведите в консоль 
// нечетные элементы массива.

let massiv = [1, 2, 3, 4, 5];
for (let i = 0; i < massiv.length; i++){
    if(i % 2 == 0){
        console.log(massiv[i]);
    }
}

// Задание 3:
// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите произведение элементов этого массива.
let massiv = [1, 2, 3, 4, 5];
let result = 1;
for(let i = 0; i < massiv.length; i++){
    result *= massiv[i];
}
console.log(result);

// Задание 4:
// Дан массив с элементами 2, 5, 9, 15, 1, 4. 
// С помощью цикла for и оператора if выведите в консоль те элементы массива, 
// которые больше 3-х, но меньше 10.
let massiv = [2, 5, 9, 15, 1, 4];
for (let i = 0; i < massiv.length; i++){
    if(massiv[i] > 3 && massiv[i] < 10){
        console.log(massiv[i]);
    }
}

// Задание 5:
// Дан массив arr (заполните любыми значениями). 
// Найдите среднее арифметическое его элементов (сумма делить на количество). 
let massiv = [1, 3, 5, 7, 9];
let sum = 0;
let result = 0;
for (let i = 0; i<massiv.length; i++){
    sum += massiv[i];
    result = sum / massiv.length;
}
console.log(result);

// Задание 6:
// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. 
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
let massiv = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < massiv.length; i++) {
    if( String (massiv[i])[0] == 1 || String (massiv[i])[0] == 2 || String (massiv[i])[0] == 5 ){
        console.log(massiv[i]);
    }
}


let massiv = ['10', '20','30', '50', '235', '3000'];
for (let i = 0; i < massiv.length; i++) {
    if( massiv[i][0] == 1 || massiv[i][0] == 2 || massiv[i][0] == 5 ){
        console.log(massiv[i]);
    }
}

// Задание 7:
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

let massive = [`Понедельник`, `Вторник`, `Среда`, `Четверг`, `Пятница`, `Суббота`, `Воскресенье`];
for(let i=0; i < massive.length; i++){
    if(i == 5 || i == 6){
        document.write( `<strong>` + massive[i] + ` ` + `</strong`)
    } else{
        document.write(massive[i] + ` `)
    }
}

// Задание 8:
// Напишите функцию removeDuplicates(arr), которая возвращает массив, 
// в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).
let arr = [`MEGABANK`, `MEGABANK`, `PRIVATBANK`, `PRIVATBANK`, `SBERBANK`, `SBERBANK`]
function removeDuplicates(arr) {
    let result = [];

   
    
}
    
    document.write(result);

// Задание 9:
// Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве.


// Задание 10:
// Найдите минимальный и максимальный элемент в массиве.
let massiv = [10, 20, 30, 50, 235, 3000];
let min = Math.min.apply(null, massiv);
let max = Math.max.apply(null, massiv);
console.log("Минимальное значение - " + min);
console.log("Максимальное значение - " + max);
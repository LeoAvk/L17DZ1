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
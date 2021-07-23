
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//
 function nambers () {
  let arrey = []
   for (let i=0; i<100; i++) {
        arrey [i] = Math.round(Math.random() * 100);
   }
    return arrey;
}
console.log(nambers())

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
//
 function nam(a) {
  let masnam = [];
  for(let i = 0; i < a; i++) {
      masnam[i] = Math.round(Math.random()*100);
  }
   return masnam;
 }

console.log(nam(60));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let nammas = nam (30);
console.log(nammas);
console.log(nammas.sort((a, b) => a - b));
console.log(nammas.sort((a, b) => b - a));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги
// filter, за лишивши тільки парні числа

 let nammas2 = nam (30)
 console.log(nammas2);
 console.log(nammas2.filter(elem => elem % 2 == 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.


let nammas3 = nam (40)
nammas3.map (function (i) {
 console.log(i.toString())

});

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter)' +
// ' та Відсортувати його по id. по зростанню (sort)

    let







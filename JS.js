
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

class User {
  constructor (id, name, surname, email, phone) {
    this.id = id
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
  }

 }
let alina = new User (1,'Alina', 'Fedoriv', 'jfjf@i.ua', '097543322');
console.log(alina)
let ihor = new User (2,'Ihor', 'Udefed', 'kjkkj@i.ua', '09 5038475');
console.log(ihor)
let galia = new User (3,'Galia', 'Koval', 'urujf@i.ua', '09793623');
console.log(galia)
let dima = new User (4,'Dima', 'Jacuk', 'snef@i.ua', '09937457');
console.log(dima)
let kolya = new User (5,'Kolya', 'Huder', 'dkdmek@com.ua', '095484859');
console.log(kolya)
let karina = new User (6,'Karina', 'Nimak', 'jeueur@ukr.net', '093457578');
console.log(karina)
let kostja = new User (7,'Kostja', 'ivanyshyn', 'dekek@com.ua', '047483623');
console.log(kostja)
let roman = new User (8,'Roman', 'Lovak', 'xmemjk@i.ua', '09775287');
console.log(roman);
let anna = new User (9,'Anna', 'Mudryk', 'kellef@ukr.net', '098443787')
console.log(anna)
let luda = new User (10,'Luda', 'Kljuk', 'dofnwf@ukr.net', '0973978087')
console.log(luda)

let Users = [alina, ihor, galia, dima, kolya, karina, kostja, roman, anna, luda];
console.log(Users)





// Взяти масив цей User[] та: Відфільтрувати, залишивши тільки об'єкти з парними id (filter)'









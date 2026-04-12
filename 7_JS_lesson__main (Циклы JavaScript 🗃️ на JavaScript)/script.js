//todo Цикл for

for (let i = 1; i < 10; i++) {
    console.log(i);
}

const books = [
    {
        name: "John",
        age: "2000",
    },
    {
        name: "January",
        age: "1999",
    },
    {
        name: "February",
        age: "2001",
    },
    {
        name: "March",
        age: "2002",
    },
    {
        name: "April",
        age: "2003",
    },
    {
        name: "May",
        age: "2004",
    },
    {
        name: "June",
        age: "2005",
    }
]

for (let i = 0; i < books.length; i++) {
    console.log(`${books[i].name} - ${books[i].age}`);
}

//todo while

let i = 0;

while (i < 5) {
    console.log('Я ВСЕ ЕЩЕ РАБОТАЮ' + i)
    i++
}


//todo do....while

let i1 = 5;

do {
    console.log('Я ВСЕ ЕЩЕ РАБОТАЮ - ' + i1)
    i1++
} while (i1 < 5)

//todo for....in

const person = {
    name: "John",
    age: "30",
    city: "Milan"
};

for (let key in person) {
    console.log(key + ' ' + person[key]);
}

//todo Управление циклом: break и continue

const books1 = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5'];

for (let i = 0; i < books1.length; i++) {
    if (books1[i] === 'Name3') {
        console.log('Я ее нашел! Она есть в списке')
        break;
    }
    console.log('ищу.......');
}

const books2 = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5'];

for (let i = 0; i < books2.length; i++) {
    if (books2[i] === 'Name3') {
        continue;
    }
    console.log(books2[i]);
}







//Задание 1

let name = 'Домкрат гидравлический';
let price = 100;
console.log(`Выбран ${name}, цена за штуку ${price} тугриков`);
price = 300;
console.log(`Выбран ${name}, цена за штуку ${price} тугриков`);

//Задание 2

const total = 100;
const ordered = 50;

if(ordered > total){
    console.log('На складе недостаточно твоаров!');
}else{
    console.log('Заказ оформлен, с вами свяжется менеджер');
}

//Задание 3

const ADMIN_PASSWORD = 'admin123';
let message;

let password = prompt('Введите пароль');

if(password === null){
    message = 'Отменено пользователем!';
}else if(password === ADMIN_PASSWORD){
    message = 'Добро пожаловать!';
}else{
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);

//Задание 4

let credits = 23580;
let pricePerDroid = 3000;
let quantityDroids = prompt('Укажите количество дроидов');

if(quantityDroids === null){
    console.log('Отменено пользователем!')
}else{
    let totalPrice = pricePerDroid * quantityDroids;

    if(totalPrice > credits){
        console.log('Недостаточно средств на счету!');
    }else{
        let balance = credits - totalPrice;
        console.log(`Вы купили ${quantityDroids} дроидов, на счету осталось ${balance} кредитов.`);
    }
}

//Задание 5

let country = prompt('Укажите страну');
let countryLowerCase = country.toLowerCase();

switch(countryLowerCase){
    case 'китай':
        alert(`Доставка в ${country} будет стоить 100 кредитов`);
    break;

    case 'чили':
        alert(`Доставка в ${country} будет стоить 250 кредитов`);
    break;

    case 'австралия':
        alert(`Доставка в ${country} будет стоить 170 кредитов`);
    break;

    case 'индия':
        alert(`Доставка в ${country} будет стоить 80 кредитов`);
    break;

    case 'ямайка':
        alert(`Доставка в ${country} будет стоить 120 кредитов`);
    break;

    default: alert('В вашей стране доставка не доступна');
}


//Задание 6

let input;
let total = 0;

while(input !== null){
    input = prompt('Введите число');
    total += input*1;
}
    alert(`Общая сумма чисел равна ${total}`);


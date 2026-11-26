function showWeather(city, temp) {
    console.log(`Сейчас в ${city} температура — ${temp} градусов по Цельсию`);
}

showWeather('уфа', 18);

const LIGHT_SPEED = 299792;

function checkSpeed(speed) {
    if (speed > LIGHT_SPEED) {
        console.log('Сверхсветовая скорость');
    } else if (speed === LIGHT_SPEED) {
        console.log('Скорость света');
    } else {
        console.log('Субсветовая скорость');
    }
}

checkSpeed(299792);

const product = 'Увлажняющий мусс';
const price = 2750;

function buyProduct(budget) {
    if (budget >= price) {
        console.log(`${product} приобретён. Спасибо за покупку!`);
    } else {
        console.log(`Вам не хватает ${price - budget} ₽, пополните баланс`);
    }
}

buyProduct(4000);

function greetUser(name) {
    console.log(`Привет, ${name}! Добро пожаловать в наш каталог товаров.`);
}

greetUser('ahi0102');

const myName = 'ahi0102';
let myAge = 17;
const myCity = 'уфа';

console.log(myName);
console.log(myAge);
console.log(myCity);
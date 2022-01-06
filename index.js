// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {

    cats.push("Ralph");

}
destructivelyAppendCat();

function destructivelyPrependCat() {

    cats.unshift("Bob");

}
destructivelyPrependCat();

function destructivelyRemoveLastCat() {

    cats.pop();

}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {

    cats.shift();

}
destructivelyRemoveFirstCat();

function appendCat() {

    const newCats = [...cats, "Broom"];

    return newCats;

}
appendCat();

function prependCat() {

    const newCats2 = ["Arnold", ...cats];

    return newCats2;

}
prependCat();

function removeLastCat() {

    const RemoveLastCat = cats.slice(0,2);

    return RemoveLastCat;

}
removeLastCat();

function removeFirstCat() {

    const RemoveFirstCat = cats.slice(1,3);

    return RemoveFirstCat;

}
removeFirstCat();

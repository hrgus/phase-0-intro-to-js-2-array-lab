const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
     
    return cats.push(name);

}
destructivelyAppendCat('Ralph');



function destructivelyPrependCat(name) {

    return cats.unshift(name);

}
destructivelyPrependCat("Bob");



function destructivelyRemoveLastCat() {

    return cats.pop();

}
destructivelyRemoveLastCat();


// I have to figure this one out. What are you doing wrong here?
function destructivelyRemoveFirstCat() {

    return cats.shift();

}
destructivelyRemoveFirstCat();


// Needs to copy from "["Milo", "Otis", "Garfield"];"
// To new Array "["Milo", "Otis", "Garfield", "Broom"];"
function appendCat(name) {

    const copyOfCats = [...cats, name];

    return copyOfCats;

}
appendCat("Broom");



function prependCat(name) {

    const copyOfCats = [name, ...cats];

    return copyOfCats;

}
prependCat("Arnold");



function removeLastCat() {

    const copyOfCats = cats.slice(0, -1);

    return copyOfCats;

}
removeLastCat();



function removeFirstCat() {

    const copyOfCats = cats.slice(-2);
    
    return copyOfCats;

}
removeFirstCat();
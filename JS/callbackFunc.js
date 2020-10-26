setTimeout( function() { 
    console.log("start") 
}, 3000 );

console.log("end");


var exampleFunction = function(message){
    console.log( message );
};

exampleFunction( "Hello from exampleFunction" );


function parentFunction( callback ) {
    callback( "information from the parent function" );
}

parentFunction( exampleFunction );


// __________________________________________________________________________________-
const arr = [1,2,3,4];
arr.push(300); // even though arr is declared with `const` we can still push new values into it 


const arr = Object.freeze([1,2,3,4]);
arr.push(300); // we're no longer allowed to change `arr`


//_______________________________________________________

const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);



const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );

const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];

const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];


//SORTING

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
items.sort(); // this will throw an error 

const sortedItems = [...items].sort();

const numbers = [10, 5, 3, 12, 22, 8];
numbers.sort();
// this will return [10, 12, 22, 3, 5, 8 ]


//SORTING OBJECTS
const sortedGroceries = [...groceryList].sort( (a, b) => a.item > b.item );




// .map()
// One of functions that we'll be using most frequently is map. 
// Map will make a copy of an array and apply our own 
// twist to it... using a callback function that takes in each 
// element of the array returning what we want to do to each element

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );



//.filter()

const values = [1, 2, 3, 4, 5];
const evens = values.filter( val => val % 2 === 0 );

console.log(evens);

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );

console.log(oFoods);


const values = [1, 2, 3, 4, 5];
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );

console.log(oddCubes);
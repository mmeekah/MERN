// var foo;                  // 'foo' is a declaration, it's global and gets hoisted
// function magic(){         // 'magic()' also gets hoisted to the top
//     var foo;              // here 'foo' is declared within 'magic()' and gets hoisted to the top of its scope
//     foo = "hello world";  // we assign a value to our function scoped 'foo'
//     console.log(foo);     // we log it as 'hello world'
// }                       
// foo = "bar";              // here, we assign a value to the global 'foo'
// magic();                  // magic is called, the first console.log runs
// console.log(foo);         



// magicalUnicorns();
// var magicalUnicorns = function(){
//     console.log("Will it blend?");
// }
// console.log("Don't breathe this!");

// 1
var hello = 'world'; 
console.log(hello);                                   



// output: magnet
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// 3;output: supercool
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// 4-output: chicken =>half-chicken
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// 5, output: Error
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);


// 6, output:
// undefined
// rock
// r&b
// disco
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


// 7: ReferenceError: dojo is not defined
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// 8 - Bonus ES6: const
// output:
// TypeError, no 3rd attribute for object

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.status = "closed for now";
    }
    return dojo;
}
function Person(name){
    this.name = name;
}

//ES5
Person.prototype.myFriends5 = function(friends){

    var arr = friends.map(function(el) {
        return this.name + ' is friends with '+ el;
    }.bind(this));

    console.log(arr);
}


var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends5(friends);



//ES6

Person.prototype.myFriends6 = function(friends){

    var arr = friends.map(el => 
        `${this.name} is friends with  ${el}`
    );

    console.log(arr);
}


var friends = ['Me', 'Myself', 'I'];

new Person('Mika').myFriends6(friends);

//DECONSTRUCTING

//ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];

//ES6
const [name6, age6] = ['John', 26];
console.log(name6);
console.log(age6);


const obj = {
    firstName: 'Mika',
    lastName : 'Aitassova'
}

const {firstName, lastName} =  obj;
console.log(firstName);
console.log(lastName);




const {firstName : a, lastName : b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year){
    const age = new Date(). getFullYear() -  year;
    return [age, 65-age];
}

const [age2, retirement] = calcAgeRetirement(1999);

console.log("Person's age is -", age2);
console.log("Years left to Retirement -",retirement);


// ARRAYS

//ES5

const boxes =  document.querySelectorAll('.box')

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach( function (cur) {
    cur.style.backgroundColor = 'dodgerblue';
});



//ES6

const boxes =  document.querySelectorAll('.box')
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');



//ES5
for(var i =0; i< boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue'){
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!'
}




//ES6

for(const cur of boxesArr5){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue!'
}



//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function (cur) {
    return cur >= 18;
})

console.log(full)


console.log(full.indexOf(true));
console.log(ages[full.lastIndexOf(true)]);





//ES6
console.log(ages.findIndex(cur = cur>= 18));
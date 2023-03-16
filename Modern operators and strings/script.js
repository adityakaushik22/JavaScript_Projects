'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(a,b){
    return [this.starterMenu[a],this.mainMenu[b]]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function(ing1,ing2,ing3){
      console.log(`here's your delicious pasta with ${ing1},${ing2},${ing3}`);
  },
  orderPizza: function(item1,...items){
    console.log(item1)
    console.log(items)
  }
};


// destructuring the array. convert complex data structure and assigning variables to it.

const arr = [1,2,3,4]
const [a,b,c,d] = arr  
console.log(a,b,c,d); // 1 2 3 4

// const [first,second] = restaurant.categories

const [first, ,third] = restaurant.categories
console.log(first,third);

// getting values in variables by destructing
const [item1,item2] = restaurant.order(2,0)
console.log(item1,item2);

// destructuring objects

// we can also access the properties and can change the varialble name here we accessed the location and named the variable l.
const {location:l} = restaurant
console.log(l); //Via Angelo Tavanti 23, Firenze, Italy

// we can also pass the default values to these arguments in case these doesnt exist.

const {name:ac} = restaurant
console.log(ac);

// we can give default values like empty array if its not exist and we'll not get undefined in the console
// helpful if we dont have the hardcoded data.
const {menu = [], starterMenu: starters} = restaurant
console.log(menu, starters);


// Mutating values
let x = 111;
let y = 999;
const obj = {x:23,y:7,z:14};

// {a,b} = obj; // will give error if not wrapped around parenthesis
({x,y} = obj); 
console.log(x,y); // x becomes 23 and ..


// the spread operator


const arr1 = [7,8,9];
const badNewArr = [1,2,3,arr1[0],arr1[1],arr1[2]];
console.log(badNewArr);


const newarr = [1,2,...arr1]; // so these ...arr1 will spread the arry and will write one by one.
console.log(newarr);
// if not used ...arr1 it will give array inside array and will not spread the content in the given array [1,2,[arr1]] 

const newMenu = [...restaurant.mainMenu,'apple'];
console.log(newMenu); //[ 'Pizza', 'Pasta', 'Risotto', 'apple' ]

// spread operator can be used on array,strings maps, sets

const string = 'aditya'
const letters = [...string];
console.log(letters); //[ 'a', 'd', 'i', 't', 'y', 'a' ]


const ingredients = ['pista','cashew','kesar']

restaurant.orderPasta(...ingredients)


// can make new objects with properties of other object also and add our own

const newRestraunt = {...restaurant,founder:'aditya',foundedIn:1999}

console.log(newRestraunt); // have restraunt propertiers as well as new ones


// rest operator: its just like spread operator but spread unpacks the array and rest packs the array.
// spread operator is used on rigth side of =
// rest genrally on the left side

const arr2 = [1,2,[3,4]]
// unpack using rest


const [k,r,...others] = [1,2,3,4,5]; 
// k and r gets the value 1,2 while the other gets the rest 3,4,5
console.log(k,r,others) //1 2 [ 3, 4, 5 ]


const [item, ,item3,...others1] = [...restaurant.mainMenu,...restaurant.starterMenu]
// sp here we used the rest operator since its on left side  
//so from the mainmenu of restraunt we want item and item3 sicne there are 3 things in mainmenu we skipped the 2nd by using , , and thats the use of rest operator.

console.log(item,item3,others1);//Pizza Risotto [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]


function add(...num){
  let sum = 0
  for (let i = 0; i < num.length; i++) {
     sum += num[i];
  }
  console.log(sum);
}

add(2,3,4,5,6) //20
const elem = [5,6,7,8,9,10]
add(...elem)//45


// (||) or operator will always give the tryuthy value
console.log('' || 'hello'); // will print hello since its true and not null string.

// && operator shortcircuits on falsey value and returns the falsey one
console.log(0 && 'aditya'); // gives 0 
console.log(7 && 'aditya'); // both true so evaluation continues and gives the last value 'aditya

console.log('hello' && 23 && null && 'camerra'); // since we know && gives falsey value so here it will give null

// practical example

// so here we use dif condition to check if orderpizza exist in restraunt then inside the if code executes.
if(restaurant.orderPizza){
  restaurant.orderPizza('mushroom','spinach')
}

// now using operators

restaurant.orderPizza && restaurant.orderPizza('mushroom','spinach') // so && evaluates falsey values so both are true so las tstatement will happen so it will workj same as if else. its not necessary to use these operators.

// nullish operator (??) [null and undefined only]

const guessscore = restaurant.guest ?? 10 // so here it means if restarunt.huest is null or undefined then only it will print the other statement

// for of loop

const menu1 = [...restaurant.starterMenu,...restaurant.mainMenu]

for (const item of menu1) {
  console.log(item);
}

// if want with indexes
for (const item of menu1.entries()) {
  console.log(item);
}
// [ 0, 'Focaccia' ][ 1, 'Bruschetta' ][ 2, 'Garlic Bread' ][ 3, 'Caprese Salad' ][ 4, 'Pizza' ][ 5, 'Pasta' ][ 6, 'Risotto' ]


// with destructuring words
for (const [index,item] of menu1.entries()) {
    console.log(`${index+1} and ${item}`);
}




// arrays

let items = ['a','b','c','d','e']

// slice
//console.log(items.slice(2)); //[ 'c', 'd', 'e' ]
//console.log(items.slice(2,4)); // 4 index will not be included
//console.log(items.slice(-2)); // [d,e]
//console.log(items.slice(1,-2)); // [b,c]

// splice
//console.log(items.splice(2)); // works same but it will extract the elements from the original array as well removing the elements from original array
//console.log(items); //[ 'a', 'b' ] after spicing from 2nd index

//items.splice(1,2) // will remove the 1 and 2 index item only

// reverse: reverse the array but also affects the original

let items21 = ['j','k','l']

const letters1 = items.concat(items21)
//console.log(letters1);

//console.log(letters1.join('-')); //a-b-c-d-e-j-k-l


// at: easy for finding last element

//console.log(items[items.length-1]); // e
//console.log(items.slice(-1)[0]); // // it will return [e] without [0] so to get the arrays element we added [0] in front of it unless it gives the answer in array.
//console.log(items.at(-1)); // e


// optional chaining (?)
// so we can use the ? symbol to check if the property is there or not,
// this is helpful because if we try to get the property that is not present it will throw an error in console but with the ? symbol it will show undefined if the property is not present.
console.log(restaurant.openingHours.mon);
console.log(restaurant.openingHours?.mon);

const days = ['mon','tue','wed','thu','fri','sat','sun'];
// lets check on what days restraunt is open

for(const day of days){
  console.log(day);
  const open = restaurant.openingHours?.[day]?.open; // so here we checked for restraunt openinghours on day in single line with ? operator.
  console.log(open);
}

console.log(restaurant.order?.(0,1) ?? "methid not exist"); //[ 'Focaccia', 'Pasta' ]
// so here we checked if order function exist if not then execute the other part of the ?? operator. 

// we can also iterate on objects if they are not iterable

const values = Object.values(restaurant.openingHours);
const keys = Object.keys(restaurant.openingHours);
console.log(keys);

// sets in js
// does not contain duplicate values

const orderSet = new Set([
  'pasta',
  'pasta',
  'pizza',
  'risoto',
  'risoto',
  'apple'
]);

// in the parameter of set we have to pass the iterable. like arrays etc or even strings as strings are iterable
console.log(orderSet); //Set(4) { 'pasta', 'pizza', 'risoto', 'apple' }

console.log(new Set('aditya'));//Set(5) { 'a', 'd', 'i', 't', 'y' }

// set to array

const staff = ['Waiter','Chef','Waiter','Manager'];

const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);//[ 'Waiter', 'Chef', 'Manager' ]


// maps in js

const rest = new Map();
// we can use set to add the items in the map.
rest.set('name','classic');
rest.set('1','italy');
rest.set('2','portugal');

// we can chain the items
rest.set('categories',['classic','italy','portugal'])
    .set('open',11)
    .set('close',5)
    .set(true,'we are open');

// to get item

console.log(rest.get('name')); //classic
console.log(rest.get('categories')); //[ 'classic', 'italy', 'portugal' ]

rest.set([1,2],'hello');

console.log(rest.get([1,2])); // undefined because arrays are not the same objects in the heap and new object is created so thats why its not pointing to the array of map and hence giving undefined.

const array1 = [1,2];
rest.set(array1,'hello');
console.log(rest.get(array1));


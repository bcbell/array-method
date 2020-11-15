// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array.prototype.filter()
// 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's
let born = inventors.filter(inventor => inventor.year>= 1500 && inventor.year <1600)
console.log(born)


// Array.prototype.map()
// 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties

const firstLast = inventors.map(inventor => `${inventor.first} ${inventor.last}`) //map returns a product (map would be the final)
console.log(firstLast)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const sortedBirthdays = inventors.sort((x, y)=> (x.year - y.year))
console.log(sortedBirthdays)



// 4. Sort the inventors by years lived from shortest to longest-lived

const longestLived = inventors.sort((x,y)=> (x.passed - y.year > y.passed -x.year))

console.log(longestLived)
// Array.prototype.reduce()
// 5. How many years did all the inventors live?
let totalYears = 0
let sum =inventors.reduce(function(accumlation, currentValue){
    return accumlation +( currentValue.passed -currentValue.year)
} ,totalYears)

console.log(sum)

//sum equals inventors ages (passed-year)
const people = [
  'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
  'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
  'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
  'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
  'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
  'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
  'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
  'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
  'Blake, William'
];

// Array.prototype.map()
// 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".


   function newPeople(peoples){
       var list =[]
   

    for (i =0; i <peoples.length; i++){
       let a =peoples[i].split (',')[0]
        let b = peoples [i].split (',')[1]   
        let firstLast = b + " " + a
        list.push(firstLast)

    }
 return list.sort()
}

console.log(newPeople(people))

let firstLastName =people.map(pep =>pep.split(',').reverse().join(" ")) //function people will remove the "," (split), reverse the names (reverse) and join them back together (join)

console.log(firstLastName)

const data = [
  'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
  'bike', 'walk', 'car', 'van', 'car', 'truck'
];

// Array.prototype.reduce()
// 7. Count the number of instances for each of the data items.
// Hint:  Return an object where the keys are 'car', 'truck', etc. and the values are the count.

let vehicles= data.reduce((acc, vehicle)=>{
    acc[vehicle]=acc[vehicle] ? acc[vehicle] + 1 : 1;
    return acc
}, {}) //<= inital value of acc
//acc= {}; key
//vehicle ="car" ; value

//let vehicles = date.reduce((acc, vehicle){
    //if (acc[vehicle]){
        //acc[vehicle]= acc[vehicle] +1
//}else{
    // acc[vehicle] =1
//}
//return acc;
//})

//acc [vehicle] = in the empty object does a value for key "car" exist?
//if it does then put a value in that key of the existing value 'car' + 1
//if it does not then assign a value of 1 to acc [vehicle]

const devs = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

// Array.prototype.some()
// 8. Check if at least one person is 19 or older?

let devAges = 0
devAges = devs.some(dev => 2020- dev.year)
console.log(devAges)


// Array.prototype.every()
// 9. Check if everyone is 19 or older?
let devAge = 0

devAge= devs.every(dev=> 19 >= dev.year)
console.log(devAges)


const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.find()
// 10. Find the comment with the id of 823423
let commentID = 0
commentID = comments.find(({id})=>id=== 823423)
console.log(commentID)


// Array.prototype.findIndex()
// 11. Find the index of the comment with an id of 123523

commentIdLocator = comments.findIndex(({id})=>id ==="123523")

console.log(commentIdLocator)

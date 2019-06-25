console.log('window is loaded');

// The questions!
// 1. Data types
// Refresher
// So far we have seen:
//
// Strings
// Numbers
// Booleans
// Arrays
// Objects
// When these datatypes are combined, we get a data structure, for example, an array that contains objects that each contain booleans.
//
// Suppose you are tasked with creating some software, and it is up to you to determine which datatypes and what data structure to use. For each of the following, write which data types you would use to represent the data, and then give a small example of the data structure:
//
// A light switch that can be either on or off.
//Boolean: switch = true || false;
// A user's email address.
//string: "user@email.com"
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//object: spaceship {hull:, lasers:, tractor beam:, warp:}
// A list of student names from our class.
//array: names = ["Bill", "jim", "steve"]
// A list of student names from our class, each with a location.
//array of objects: studentNameAndLocation = [{name: jim, location: here},{name:bill, location: there}]
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
//array of objects, and the objects all have an array: studentNameLocationTv = [{name:jim, location:here, tv:["JAG","Buffy","Judge Judgy"]},{name:bill, location: there, tv:["Darkwing Duck","The West Wing","Westworld"]}]
// 🔴 Commit: "data types"
//
// 2. Take it Easy
// Make an array that holds all of the colors of the rainbow.
// Write code that will access "blue" from the rainbow array.
// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
// Write code that will access your hobby from the object that you just created.
// 🔴 Commit: "data structures"
//
// 3. Crazy Object!
const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}
// Use crazyObject to log the following.
//
// "omg my mouth is burning"
// "Pretty pretty prettayyyyy good"
// "Swearing at Larry and Jeff"
// "Chicken Teriyaki Boyyyyyy"
// The object the contains the name funkhauser
// 🔴 Commit: "crazyObject"
//
// 4. Object-ception
// With the following object:

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}
// Change the value of limbo to null.
//
// 🔴 Commit: "object-ception"

// 5-7. Bond Films
// Copy the following bondFilms array of objects above into your js file. Use loops and conditionals and functions in order to complete the below:

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];
// Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.
// 🔴 Commit: "bondTitles array"
//
// Create a new array oddBonds, of only the Bond films released on odd-numbered years.
// 🔴 Commit: "oddBonds"
//
// Determine the total cumulative gross of the Bond franchise, and console.log the result.
// Hint: To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt() also.
//
// 🔴 Commit: "bond films gross"
//
// Congrats! You have completed the homework
//
// Hungry For More?
// Console log the single movie object that contains the actor who starred in the least number of films.
// Expected result:

{
  "title" : "On Her Majesty's Secret Service",
  "year" : 1969,
  "actor" : "George Lazenby",
  "gross" : "$505,899,782"
}
// hint: Objects by definition have unique keys. Later in the problem you could create a new object wherein all the Bond actors are keys, and unique, with no doubles. hint within a hint: If you need to iterate over an object, remember you can use Object.keys() or a for ... in loop

// 🔴 Commit "humdinger"

// Hungry For Quite a bit more?
// Complete this advanced object lab using weather data, committing as you go.
//
// Hungry for CSS stuff?
// Some tasty CSS videos:
//
// Box Model, 7:17
// CSS Display, 6:24
// Positioning, 11:57
// Units of measure I, 10:25
// Units of measure II, 14:27

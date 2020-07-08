// Using .forEach & .map

// Problem:
// What you have
const vikingList = [
    { age: 20, name: 'Ragnar' },
    { age: 24, name: 'Rollo' },
    { age: 56, name: 'Borg' },
    { age: 88, name: 'Thor' }
];

// What you need
[20, 24, 56, 88];

// Both of the following functions give the same result ([20, 24, 56, 88])
// but they use two different methods, .forEach & .map respectively.
//
// These methods (or in build functions that just exist in JS and can be used anywhere)
// are pre-built loops that do specific things. It allows you to avoid using the old
// for (let i = 0...) stuff.

// ------------------------------------------------------------------------------------

// .forEach
// .forEach will just loop over every element of an array. It is up to you to add logic
// to the result and return valid data.
const forEachExample = vikingList => {
    let vikingAges = []; // Create an array to .push values to during the .forEach loop iteration

    vikingList.forEach(individualViking => {
        // Call .forEach on the vikingList array argument & name each value found at each iteration 'individualViking'
        vikingAges.push(individualViking.age); // Push each individualViking's age to the vikingAges let.
    });

    return vikingAges;
};

// ------------------------------------------------------------------------------------

// .map
// .map loops over an array and BY DEFAULT return the result in an array too
const mapExample = vikingList => {
    return vikingList.map(individualViking => {
        // Call .map on the vikingList array argument and return the result of the whole .map method
        return individualViking.age; // For each interation of the .map method return the individualViking age.
    });
};

// ------------------------------------------------------------------------------------

// We would call these functions by doing the following:

forEachExample(vikingList);
mapExample(vikingList);

// EXTRA CREDIT!!!
// We can also simplify the .map function a bit further because arrow functions return their result by default

const mapExampleSimplified = vikingList => vikingList.map(individualViking => individualViking.age);

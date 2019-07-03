
// /dummy data
var data = [
    {
        mood: "happy",
        fish: "robin",
        colours: ["blue", "green"]
    },
    {
        mood: "tired",
        fish: "panther",
        colours: ["green", "black", "orange", "blue"]
    },
    {
        mood: "sad",
        fish: "goldfish",
        colours: ["green", "red"]
    }
]





//BSAIC DATA PROCESSING

// ES5  (example ok)
// var myColours = [];
// for (let i = 0; i < data.length; i++) {
//     myColours.push(data[i].colours);
// }
// console.log(myColours);



// // es6+    (example not ok -REDO!)
// var myColours = colours.map((e) => {
//     return e.colours
// })
// console.log(myColours);


// FLATTEN ARRAY
// var flattenedArray = [];
// var coloursArray = [
//     ["blue", "green"],
//     ["green", "black", "orange", "blue"],
//     ["green", "red"]
// ];

// for (let i = 0; i < coloursArray.length; i++) {
//     for (let j = 0; j < coloursArray[i].length; j++) {
//         flattenedArray.push(coloursArray[i][j]);
//     }
// }
// console.log(flattenedArray)



// FLATETN ARRAY (with reduce and concat)
var flattenedArray = [];
var coloursArray = [
    ["blue", "green"],
    ["green", "black", "orange", "blue"],
    ["green", "red"]
];
flattenedArray = coloursArray.reduce((total, subArray) => {
    return total.
        concat(subArray)
}, []);
console.log(flattenedArray)

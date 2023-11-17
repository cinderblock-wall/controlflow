console.log("========Part 1========");

const radius = 5;
const pi = 3.1415;
const area = pi * radius * radius;
let plant = 0.8;
let start = 0.8 * 20;

let w = 3; //number of weeks

let currentArea = (start*(2)**(w-1));

if (currentArea > 62.8) {
    console.log("Prune", w, currentArea);

} else if (currentArea > 39.25 && currentArea < 62.8) {
    console.log("Monitored", w);

} else {
    console.log("Plant", w, currentArea);
}
   
w = 1;
console.log("Week 1", (start*(2)**(w-1)));

w = 2;
console.log("Week 2", (start*(2)**(w-1)));

w = 3;
console.log("Week 3", (start*(2)**(w-1)));

//The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?

console.log("=======Part 2========");

console.log("Additional space for 100 plants with a span of 10 weeks =", 80*(2)**(10-1));

let week100 = (80*(2)**(10-1));

console.log("Radius would equal to " , Math.sqrt((week100 / pi)));

// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.

console.log("========Part 3========");

let x = 10;

try {
	if (x < 0) {
		console.log("Negative!");
	} else {
		throw "Error - Not enough space in garden.";
	}
} catch (error) {
	console.log(error);
}

console.log("Reduce number of plants");
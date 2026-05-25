const students = [
    {name: 'John', passed: true}, 
    {name: 'Jane', passed: false}
];

// 1. forEach - רק לבצע פעולה (הדפסה) על כל אחד
students.forEach(student => {
    console.log(`${student.name}'s record has been reviewed.`);
});

let scores = [45, 65, 88, 92, 55];

// 2. find - מוצא את *הראשון* שגדול מ-85
let firstHigh = scores.find(score => score > 85); // יחזיר 88

// 3. every - בודק אם *כולם* עונים על התנאי (מעל 40)
let areAllAbove40 = scores.every(score => score > 40); // יחזיר true

// 4. some - בודק אם יש *לפחות אחד* שעונה על התנאי (מתחת ל-50)
let anyBelow50 = scores.some(score => score < 50); // יחזיר true (בגלל ה-45)

console.log("Use the find method to locate and return the first score that is strictly greater than 85: " + firstHigh)
console.log("Use the every method to check if all scores in the array are above 40: " + areAllAbove40)
console.log("Use the some method to check if any scores are below 50: " + anyBelow50)
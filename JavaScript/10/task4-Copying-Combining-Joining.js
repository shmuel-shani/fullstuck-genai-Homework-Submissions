let original = [1, 2, 3];

// 1. שתי דרכים מודרניות להעתיק מערך בלי לייצר באגים של ייחוס:
let copy1 = [...original]; // דרך 1: Spread Operator (שלוש נקודות ש"שופכות" את התוכן)
let copy2 = original.slice(); // דרך 2: שימוש ב-slice ריק שמחזיר חיתוך של כל המערך
console.log("Copying Arrays with Spread: " + copy1);
console.log("Copying Arrays with Slice: " + copy2);

let group1 = ['Alice', 'Bob'];
let group2 = ['Charlie', 'Dave'];

// 2. חיבור שני מערכים (Concat)
// אפשר לעשות את זה עם group1.concat(group2) או בעזרת שלוש נקודות:
let allUsers1 = group1.concat(group2);
let allUsers2 = [...group1, ...group2];

console.log("Combine Arrays with concat: " + allUsers1);
console.log("Combine Arrays with Spread: " + allUsers2);


// 3. הפיכת המערך למחרוזת טקסט מחוברת (Join)
let joinedUsers = allUsers2.join(" - ");
console.log("Convert the allUsers array into a single string with join method: " + joinedUsers); // "Alice - Bob - Charlie - Dave"






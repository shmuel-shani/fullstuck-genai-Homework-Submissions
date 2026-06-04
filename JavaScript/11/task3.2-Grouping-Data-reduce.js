const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 }
];

const groupedByAge = people.reduce((acc, person) => {
  // acc הוא הקופה המצטברת שלנו (האובייקט)
  
  // אם עדיין אין באובייקט "מגירה" לגיל הזה, נייצר אותה בתור מערך ריק
  if (!acc[person.age]) {
    acc[person.age] = [];
  }
  
  // נדחוף את השם של הבן אדם לתוך המגירה של הגיל שלו
  acc[person.age].push(person.name);
  
  // הכי חשוב ב-reduce! להחזיר את הקופה כדי שתעבור לסיבוב הבא
  return acc;
}, {}); // מתחילים עם אובייקט ריק

console.log(groupedByAge); 
// מדפיס: { '25': ['Alice', 'Bob'], '30': ['Charlie'] }





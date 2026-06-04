const person = { name: "Clark Kent", occupation: "Reporter" };
const powers = { flight: true, strength: "superhuman" };

// שימוש ב-Spread כדי לפוצץ את הקירות של שניהם ולשפוך לאובייקט חדש
const superHero = { ...person, ...powers };

console.log(superHero); 
// מדפיס: { name: 'Clark Kent', occupation: 'Reporter', flight: true, strength: 'superhuman' }
const inventory = [
  { item: "Laptop", price: 1200, quantity: 5 },  // שווי: 6000
  { item: "Mouse", price: 25, quantity: 50 },    // שווי: 1250
  { item: "Keyboard", price: 100, quantity: 20 } // שווי: 2000
];

const totalValue = inventory.reduce((totalBox, currentItem) => {
  // מחשבים את שווי הפריט הנוכחי
  const itemValue = currentItem.price * currentItem.quantity;
  
  // מחזירים את הקופה + השווי החדש כדי שיעבור לסיבוב הבא
  return totalBox + itemValue;
}, 0); // מתחילים מקופה ששווה 0

console.log(totalValue); // מדפיס: 9250



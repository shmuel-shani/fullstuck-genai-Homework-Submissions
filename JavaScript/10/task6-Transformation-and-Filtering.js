const products = [
    {id: 1, price: 20}, 
    {id: 2, price: 50}, 
    {id: 3, price: 15}
];

// אפשרות א': בשני שלבים
const expensiveProducts = products.filter(product => product.price >= 20);
const expensiveIds = expensiveProducts.map(product => product.id);

console.log("without Chaining - step 1 - filter: ", expensiveProducts);
console.log("without Chaining - step 2 - map: ", expensiveIds);

// אפשרות ב': בשרשור (הדרך המקצועית והמועדפת בתעשיה)
const finalIds = products
    .filter(product => product.price >= 20)  // קודם מסננים (נשארו מוצרים 1 ו-2)
    .map(product => product.id);             // מתוך מה שנשאר, מוציאים רק את ה-id

console.log("with Chaining: ", finalIds); // [1, 2]




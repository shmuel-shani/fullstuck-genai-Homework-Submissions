let tasks = ['wash dishes', 'do laundry'];

// 1. הוספה לסוף התור
tasks.push('clean room'); 
console.log("add to the end (with push): " + tasks, "lightblue");
// המערך עכשיו: ['wash dishes', 'do laundry', 'clean room']

// 2. הוספה לתחילת התור
tasks.unshift('buy groceries');
console.log("add to the beginning (with unshift): " + tasks);
// המערך עכשיו: ['buy groceries', 'wash dishes', 'do laundry', 'clean room']

// 3. מחיקה מהסוף ושמירה במשתנה
let completedTask = tasks.pop(); 
console.log("Remove the last item and store it in a variable called completedTask (with pop): " + tasks);
// completedTask = 'clean room'

// 4. מחיקה מההתחלה ושמירה במשתנה
let skippedTask = tasks.shift(); 
console.log("Remove the first item and store it in a variable called skippedTask (with shift): " + tasks);
// skippedTask = 'buy groceries'



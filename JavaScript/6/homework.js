// --- פונקציית עזר: כתיבה ללוח המודעות בדף ---
// הוספנו כאן את המשתנה color שיקבל צבע, עם צבע ברירת מחדל לבן
function writeToPage(text, color = "white") {
    // אנחנו מבקשים מהדפדפן: "מצא לי את האלמנט עם ה-ID שנקרא results-board"
    const board = document.getElementById('results-board');
    
    // אנחנו יוצרים אלמנט פסקה (p) חדש
    const newLine = document.createElement('p');
    
    // מכניסים לתוך הפסקה את הטקסט שקיבלנו
    newLine.textContent = text;
    
    // צובעים את השורה בצבע שקיבלנו מהפונקציה
    newLine.style.color = color;
    
    // "תולים" את הפסקה החדשה בתוך הלוח
    board.appendChild(newLine);
}

// ==========================================
// --- תרגיל 1: Primitives vs. Reference Types ---
// צבע: תכלת (LightBlue)
// ==========================================
let person1 = {
    name: "Shmuel",
    age: 25
};

let person2 = person1; 
person2.age = 99;

writeToPage("Ex 1 (Object): Person 1 age is now: " + person1.age, "lightblue"); 
writeToPage("Ex 1 (Object): Person 2 age is now: " + person2.age, "lightblue");

let score1 = 85;
let score2 = score1; 
score2 = 100;        

writeToPage("Ex 1 (Number): Score 1 stays: " + score1, "lightblue");
writeToPage("Ex 1 (Number): Score 2 changed to: " + score2, "lightblue");


// ==========================================
// --- תרגיל 2: המרת סוגים (Type Conversions) ---
// צבע: צהוב (Yellow)
// ==========================================
let a = "15"; 
let b = 10; 
let c = "2";
let result = Number(a) + b; 
writeToPage(`Ex 2: Result: ${result}, Type: ${typeof result}`, "yellow");
writeToPage(`Ex 2: Multiplication (a * c): ${a * c}`, "yellow"); 


// ==========================================
// --- תרגיל 4: אמת ושקר ---
// צבע: ירוק בהיר (LightGreen)
// ==========================================
const mixedValues = [0, "hello", "", null, 42, undefined, NaN, "false", [], {}];

for (let i = 0; i < mixedValues.length; i++) {
    let current = mixedValues[i];

    if (current) {
        writeToPage("Ex 4: [" + current + "] is Truthy", "lightgreen");
    } else {
        writeToPage("Ex 4: [" + current + "] is Falsy", "lightgreen");
    }
}
writeToPage("Ex 4: כפי שניתן לראות -", "lightgreen");
writeToPage("המחרוזת 'false' היא Truthy", "lightgreen");
writeToPage("כי בג'אווה סקריפט כל מחרוזת שאינה ריקה היא אמת, גם אם כתוב בה המילה false.", "lightgreen");

writeToPage("Ex 4: כמו כן, ניתן לראות - שגם מערך ריק [ ] הוא Truthy", "lightgreen");
writeToPage("כי בג'אווה סקריפט אובייקטים ומערכים הם תמיד אמת, גם אם הם ריקים.", "lightgreen");


// ==========================================
// --- תרגיל 3: Block Scope ---
// צבע: ורוד (Pink) עבור ההדפסות התקינות, אדום עבור השגיאה
// ==========================================
let secretMessage = "Hello";

if (true) {
    let secretMessage = "Goodbye";
    var hackerMessage = "I am inside!";
    writeToPage("Ex 3 before: Inside the block: " + secretMessage, "pink"); 
}

writeToPage("Ex 3 before: Outside 1: " + secretMessage, "pink"); 
writeToPage("Ex 3 before: Outside 2: " + hackerMessage, "pink"); 

// --- חלק האתגר עם השגיאה ---
let secretMessage1 = "Hello";

if (true) {
    let secretMessage1 = "Goodbye";
    let hackerMessage1 = "I am inside!";
    writeToPage("Ex 3 after: Inside the block: " + secretMessage1, "pink"); 
}

writeToPage("Ex 3 after: Outside 1: " + secretMessage1, "pink"); 

// ==========================================
// --- הסבר: למה תרגיל 4 הוקדם לפני תרגיל 3? ---
// ==========================================
writeToPage("--------------------------------------------------", "orange");
writeToPage("הסבר: מדוע תרגיל 4 מופיע בקוד לפני הסוף של תרגיל 3?", "orange");
writeToPage("ב-JavaScript, כאשר המחשב נתקל בשגיאה קריטית (Error) שמונעת ממנו להמשיך, הוא פשוט 'קורס' ועוצר את קריאת הקובץ באותו רגע.", "orange");
writeToPage("מכיוון שהשורה הבאה (השורה האחרונה בתרגיל 3) מנסה לקרוא למשתנה hackerMessage1 שלא קיים מחוץ לבלוק שלו, הקוד הולך להתרסק.", "orange");
writeToPage("אם תרגיל 4 היה נכתב למטה, אחרי ההתרסקות, המחשב לעולם לא היה מגיע אליו והמסך שלנו היה נשאר ריק מתוצאות התרגיל. הקדמנו אותו כדי להבטיח שהוא ירוץ!", "orange");
writeToPage("--------------------------------------------------", "orange");

// השורה הבאה תזרוק שגיאה (Uncaught ReferenceError) ותעצור את כל מה שבא אחריה
writeToPage("Ex 3 after: Outside 2: " + hackerMessage1, "red");
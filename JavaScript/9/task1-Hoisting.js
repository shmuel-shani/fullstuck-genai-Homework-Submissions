// 1. אנחנו מנסים להפעיל את הפונקציות לפני שהן כתובות
calculateTotal();
calculateDiscount();

// 2. פונקציה רגילה (תעבוד מעולה)
function calculateTotal() {
    console.log("Hello!");
}

// 3. פונקציה בתוך משתנה (תקרוס ותזרוק שגיאה)
const calculateDiscount = function() {
    console.log("Goodbye!");
}

/* Question Answer:
הפונקציה הראשונה עבדה בגלל 
Hoisting 
המחשב העלה אותה לזיכרון לפני הריצה.
הפונקציה השנייה זרקה
ReferenceError
כי היא בתוך משתנה 
const
ומשתנים כאלה לא מאפשרים גישה אליהם לפני שורת ההגדרה שלהם למרות ה
Hoisting.
ReferenceError: Cannot access 'calculateDiscount' before initialization
*/
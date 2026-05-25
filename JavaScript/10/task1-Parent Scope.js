const person = {
    name: "Pinni",
    age: 23,
    delay(){
        // Arrow function used inside a setTimeout
        setTimeout(() => console.log(this), 4000);
    }
};


const user = {
    name: 'Alice',
    // Arrow function used directly as an object method
    greetArrow: () => {
        console.log("Hello, " + this.name);
    }
};


person.delay();
user.greetArrow();

/* Question Answer:

לפונקציית חץ אין
this
משלה.
היא תמיד לוקחת את ה
this
של הסביבה שעטפה אותה ברגע שהיא נוצרה 

1.	באובייקט person - 
הפונקציה delay
היא פונקציה רגילה, ולכן יש לה
this 
משלה שמצביע על
person.
פונקציית החץ שבתוך 
הsetTimeout-
מסתכלת החוצה אל 
delay
ולוקחת את 
ה this-
שלה - הכל עובד מושלם.



2.	באובייקט user - 
כאן הגדרנו את פונקציית החץ
greetArrow
ישירות על האובייקט. 
הבעיה היא שאובייקטים בג'אווה סקריפט לא מייצרים סביבה משל עצמם. 
לכן, פונקציית החץ מסתכלת "החוצה" מחוץ לאובייקט ונופלת ישר לתוך האזור הגלובלי
(הדפדפן/Window).
מכיוון שאין לדפדפן מאפיין בשם
name
הוא מדפיס 
undefined


*/

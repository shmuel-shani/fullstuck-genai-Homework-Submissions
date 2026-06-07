class CarWash {
    // 1. משתנה סטטי - סופר את כל השטיפות בכל המכונות
    static totalWashes = 0;

    // 2. הבנאי - שומר את פרטי הרכב שנכנס כרגע
    constructor(carModel, washType) {
        this.carModel = carModel;
        this.washType = washType;
    }

    // 3. פונקציות פרטיות - הלוגיקה הפנימית של המכונה
    #spray() {
        console.log("Spraying water...");
    }

    #applysoap() {
        console.log("Applying soap...");
    }

    #dry() {
        console.log("Drying car...");
    }

    // 4. הפונקציה הפומבית - כפתור ההפעלה של המכונה (הפשטה!)
    startWash() {
        // המכונה מפעילה את הפונקציות הפנימיות שלה
        this.#spray();
        this.#applysoap();
        
        // מייבשים רק אם הלקוח שילם על שטיפה מלאה
        if (this.washType === 'full') {
            this.#dry();
        }

        // מעלים את המונה הכללי (הסטטי) של התחנה ב-1
        CarWash.totalWashes += 1;

        // מדפיסים את קבלת הסיום
        console.log(`${this.carModel} wash complete. Total washes today: ${CarWash.totalWashes}`);
    }
}

// בדיקה: בואו ניצור שתי מכוניות
const car1 = new CarWash("Toyota", "basic");
car1.startWash(); // שטיפה בסיסית, מונה השטיפות יהיה 1

console.log("-------------------");

const car2 = new CarWash("BMW", "full");
car2.startWash(); // שטיפה מלאה, מונה השטיפות יהיה 2
// 1. יצירת האובייקט והפונקציה
const paymentGateway = {
    gatewayName: "Stripe",
    processPayment() {
        console.log(`Processing payment through ${this.gatewayName}`);
    }
};

// בדיקה שהכל עובד תקין
paymentGateway.processPayment(); 


// 2. הבאג: תולשים את הפונקציה החוצה למשתנה גלובלי
const externalProcessor = paymentGateway.processPayment;
externalProcessor(); // זה ידפיס undefined כי הפונקציה איבדה את ה-this שלה

// 3. התיקון: קושרים את הפונקציה חזרה לאובייקט בעזרת bind
const boundProcessor = paymentGateway.processPayment.bind(paymentGateway);
boundProcessor(); // עכשיו זה שוב יעבוד וידפיס Stripe!

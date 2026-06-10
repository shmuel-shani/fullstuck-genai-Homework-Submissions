// === 1. התראה בסיסית ===
function Notification(sender, message) {
    this.sender = sender;
    this.message = message;
    this.sent = false; // כשבשורה חדשה נוצרת, היא עוד לא נשלחה (false)
}
Notification.prototype.send = function() {
    console.log("send() not implemented");
};
// פונקציה כללית על המדף: מפעילה את השליחה, משנה את המצב ל'נשלח בהצלחה' ומדפיסה לוג
Notification.prototype.log = function() {
    this.send(); // פולימורפיזם - יפעיל את ה-send הספציפי של הילד
    this.sent = true; // משנים את השלט ל-true
    console.log(`[LOG] notification from ${this.sender} sent: ${this.sent}`);
};

// === 2. התראת אימייל ===
function EmailNotification(sender, message, toEmail) {
    Notification.apply(this, [sender, message]);
    this.toEmail = toEmail;
}
EmailNotification.prototype = Object.create(Notification.prototype);
EmailNotification.prototype.constructor = EmailNotification;
// דורסים את פונקציית השליחה עבור אימייל
EmailNotification.prototype.send = function() {
    console.log(`Email to ${this.toEmail}: ${this.message}`);
};

// === 3. התראת SMS ===
function SMSNotification(sender, message, phone) {
    Notification.apply(this, [sender, message]);
    this.phone = phone;
}
SMSNotification.prototype = Object.create(Notification.prototype);
SMSNotification.prototype.constructor = SMSNotification;
// דורסים את פונקציית השליחה עבור SMS
SMSNotification.prototype.send = function() {
    console.log(`SMS to ${this.phone}: ${this.message}`);
};

// === 4. התראת פוש ===
function PushNotification(sender, message, deviceId) {
    Notification.apply(this, [sender, message]);
    this.deviceId = deviceId;
}
PushNotification.prototype = Object.create(Notification.prototype);
PushNotification.prototype.constructor = PushNotification;
// דורסים את פונקציית השליחה עבור פוש בטלפון
PushNotification.prototype.send = function() {
    console.log(`Push to device ${this.deviceId}: ${this.message}`);
};


// === 5. הפעלה בלולאה ===
const email = new EmailNotification("Facebook", "Someone liked your photo", "user@gmail.com");
const sms = new SMSNotification("Bank", "Your account is in overdraft!", "050-1234567");
const push = new PushNotification("Whatsapp", "New message from Mom", "device_9988");

const notificationsList = [email, sms, push];

console.log("--- Sending Notifications ---");
for (let i = 0; i < notificationsList.length; i++) {
    notificationsList[i].log(); // מפעיל לכולם את ה-log הכללי, שמפעיל את ה-send המיוחד שלהם
    console.log("-------------------");
}

// === 6. בונוס: סינון וספירה ===
// פונקציית filter היא כמו מסננת. היא עוברת על כל ההודעות ברשימה
// ובודקת: "האם המשתנה sent שלך שווה ל-true?". מי שכן, נשאר בתוך הרשימה החדשה.
const sentNotifications = notificationsList.filter(function(item) {
    return item.sent === true;
});

// בודקים כמה הודעות הצליחו לעבור את המסננת
console.log(`Total successful notifications sent: ${sentNotifications.length}`);
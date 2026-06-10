// === 1. אמצעי תשלום בסיסי (ההגדרה הכללית) ===
function PaymentMethod(ownerName) {
    this.ownerName = ownerName;
}
// שמים על המדף הוראה ריקה: "כאן צריך לבצע תשלום כלשהו"
PaymentMethod.prototype.pay = function(amount) {
    console.log("pay() not implemented");
};
// שמים על המדף הוראה כללית: "כדי להוציא קבלה, תפעיל תשלום ואז תשלח קבלה לשם של הבן אדם"
PaymentMethod.prototype.receipt = function(amount) {
    this.pay(amount); // פקודת הקסם! המחשב יחפש את ה-pay הספציפי של הילד שמפעיל אותה עכשיו
    console.log(`Receipt sent to ${this.ownerName}`);
};

// === 2. כרטיס אשראי ===
function CreditCard(ownerName, cardNumber) {
    PaymentMethod.apply(this, [ownerName]);
    this.cardNumber = cardNumber;
}
CreditCard.prototype = Object.create(PaymentMethod.prototype);
CreditCard.prototype.constructor = CreditCard;

// הילד (CreditCard) כותב על המדף שלו הגדרה משלו לפקודת pay
CreditCard.prototype.pay = function(amount) {
    const last4Digits = String(this.cardNumber).slice(-4);
    console.log(`Charging ${amount} NIS to card ending in ${last4Digits}`);
};

// === 3. פייפאל ===
function PayPal(ownerName, email) {
    PaymentMethod.apply(this, [ownerName]);
    this.email = email;
}
PayPal.prototype = Object.create(PaymentMethod.prototype);
PayPal.prototype.constructor = PayPal;

// גם פייפאל כותב הגדרה משלו לפקודת pay
PayPal.prototype.pay = function(amount) {
    console.log(`Sending ${amount} NIS via PayPal to ${this.email}`);
};

// === 4. העברה בנקאית ===
function BankTransfer(ownerName, iban) {
    PaymentMethod.apply(this, [ownerName]);
    this.iban = iban;
}
BankTransfer.prototype = Object.create(PaymentMethod.prototype);
BankTransfer.prototype.constructor = BankTransfer;

// גם העברה בנקאית כותבת הגדרה משלה לפקודת pay
BankTransfer.prototype.pay = function(amount) {
    console.log(`Transferring ${amount} NIS from IBAN ${this.iban}`);
};


// === 5. הבדיקה הגדולה בלולאה ===
const card = new CreditCard("Shmuel", "4580123456789944");
const paypal = new PayPal("Shmuel", "shmuel@gmail.com");
const bank = new BankTransfer("Shmuel", "IL1200100000123456");

// אוספים את שלושתם לתוך ארנק אחד (מערך/רשימה)
const wallet = [card, paypal, bank];

console.log("--- Processing Checkout ---");
for (let i = 0; i < wallet.length; i++) {
    // אנחנו קוראים בדיוק לאותה פונקציה (receipt) עבור כולם!
    wallet[i].receipt(500); 
    console.log("-------------------");
}
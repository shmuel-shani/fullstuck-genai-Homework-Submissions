// === שלב 1: הסבא - רכב כללי ===
function Vehicle(brand, speed) {
    this.brand = brand;
    this.speed = speed;
    this.running = false; 
}

// שמים את ההוראות להניע ולכבות על המדף המשותף (Prototype)
Vehicle.prototype.start = function() {
    this.running = true;
    console.log(this.brand + " engine started");
};

Vehicle.prototype.stop = function() {
    this.running = false;
    console.log(this.brand + " engine stopped");
};


// === שלב 2: האבא - מכונית רגילה ===
function Car(brand, speed, doors) {
    // 1. מעתיקים את רכיבי הסבא (brand, speed) לכיס של המכונית
    Vehicle.apply(this, [brand, speed]);
    this.doors = doors; // מוסיפים רכיב חדש בכיס: מספר דלתות
}

// 2. קושרים את ספר ההוראות של המכונית לספר ההוראות של הרכב
Car.prototype = Object.create(Vehicle.prototype);

// 3. מדביקים מדבקה נכונה על כריכת הספר, שיהיה כתוב "ספר של מכונית"
Car.prototype.constructor = Car;

// שמים הוראה חדשה על המדף של המכונית: איך לפתוח בגאז'
Car.prototype.openTrunk = function() {
    console.log(this.brand + " trunk is open");
};


// === שלב 3: הנכד - מכונית חשמלית ===
function ElectricCar(brand, speed, doors, batteryLevel) {
    // 1. מעתיקים את כל רכיבי האבא (brand, speed, doors) לכיס של החשמלית
    Car.apply(this, [brand, speed, doors]);
    this.batteryLevel = batteryLevel; // מוסיפים רכיב חדש: סוללה
}

// 2. קושרים את ספר ההוראות של החשמלית לספר של המכונית הרגילה
ElectricCar.prototype = Object.create(Car.prototype);

// 3. מדביקים מדבקה נכונה על הכריכה
ElectricCar.prototype.constructor = ElectricCar;

// שמים הוראה חדשה על המדף של החשמלית: איך להטעין סוללה
ElectricCar.prototype.charge = function() {
    this.batteryLevel = 100;
    console.log(this.brand + " is fully charged");
};


// === שלב 4: בדיקות ===
const basicVehicle = new Vehicle("Generic-Truck", 60);
const myGasCar = new Car("Toyota", 120, 4);
const myTesla = new ElectricCar("Tesla", 200, 4, 50);

myTesla.start();      // הטסלה מניעה! (היא הלכה למדף של הסבא Vehicle ומצאה שם את start)
myTesla.openTrunk();  // הטסלה פותחת בגאז'! (היא הלכה למדף של האבא Car ומצאה את openTrunk)
myTesla.charge();     // הטסלה מטעינה! (זה נמצא על המדף הפרטי שלה)
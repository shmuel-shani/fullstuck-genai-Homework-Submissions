const calculateTotal = (discount, ...prices) => {
  // 1. קודם נסכום את כל המחירים שארזנו למערך
  const sum = prices.reduce((total, currentPrice) => total + currentPrice, 0);
  
  // 2. נחשב את סכום ההנחה עצמה (למשל אם הסכום 100 וההנחה 20, זה ייתן 20)
  const discountAmount = sum * (discount / 100);
  
  // 3. נחזיר את המחיר הסופי
  return sum - discountAmount;
};

// בדיקה: 20% הנחה על פריטים שעולים 100, 50, ו-50 (סך הכל 200 דולר)
console.log(calculateTotal(20, 100, 50, 50)); // מדפיס: 160



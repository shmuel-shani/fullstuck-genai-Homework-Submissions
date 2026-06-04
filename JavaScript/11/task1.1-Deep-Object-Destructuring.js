const userProfile = {
  id: 402,
  username: "code_ninja",
  location: {          // זו מגירה שיש בתוכה עוד מגירות
    country: "USA",
    city: "Seattle"
  },
  preferences: {       // זו מגירה שיש בתוכה מערך (רשימה)
    hobbies: ["cycling", "reading", "gaming"]
  }
};

// הפתרון - חילוץ הנתונים:
const { 
  username: handle, // חילצנו ושינינו את השם ל-handle
  location: { city }, // נכנסנו פנימה לתוך location ושלפנו רק את city
  preferences: { hobbies: [firstHobby] } // נכנסנו ל-hobbies ושלפנו את האיבר הראשון במערך
} = userProfile;

// עכשיו יש לנו 3 משתנים חדשים ורגילים לחלוטין שאפשר להשתמש בהם:
console.log(handle);     // מדפיס: "code_ninja"
console.log(city);       // מדפיס: "Seattle"
console.log(firstHobby); // מדפיס: "cycling"





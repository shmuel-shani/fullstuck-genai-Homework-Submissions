const scores = [88, 92, 100];

// קודם כל נהפוך את המערך כדי שהציון הכי גבוה יהיה ראשון
const sortedScores = scores.reverse(); // עכשיו המערך הוא: [100, 92, 88]

// עכשיו נחלץ: הראשון הולך ל-firstPlace, ואת "כל השאר" נארוז בעזרת Rest
const [firstPlace, ...runnerUps] = sortedScores;

console.log(firstPlace); // מדפיס: 100
console.log(runnerUps);  // מדפיס: [92, 88]




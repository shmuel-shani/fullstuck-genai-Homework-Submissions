let months = ['Jan', 'March', 'April', 'June'];

// 1. שימוש ב-
// splice 
// כדי להכניס את פברואר
// ההוראות: לך לאינדקס 1, אל תמחק שום דבר (0), ותכניס את 
// 'Feb'

months.splice(1, 0, 'Feb');
// המערך המקורי שונה ועכשיו הוא: ['Jan', 'Feb', 'March', 'April', 'June']

// 2. שימוש ב-
// slice 
// כדי לגזור את מרץ ואפריל.
// הערה: מרץ יושב באינדקס 2, אפריל באינדקס 3. 
// slice 
// חותך מההתחלה שנתנו לו, ועד לאינדקס הסיום (לא כולל!).
//  לכן ניתן לו 4 בסוף.
let springMonths = months.slice(2, 4);


console.log(months);       // המערך המקורי נשאר שלם עם 5 החודשים!
console.log(springMonths); // ['March', 'April']
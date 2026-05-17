const requestsQueue = [
  { id: 1, type: "AI_PROMPT", status: "pending", priority: 1, payload: { model: "claude", tokens: 150, stream: true }, user: { role: "student", active: true } },
  { id: 2, type: "DB_QUERY", status: "pending", priority: 3, payload: { query: "SELECT *", limit: 10 }, user: { role: "admin", active: true } },
  { id: 3, type: "SEND_EMAIL", status: "corrupted", priority: 2, payload: null, user: { role: "guest", active: false } },
  { id: 4, type: "AI_PROMPT", status: "pending", priority: 5, payload: { model: "gpt-4", tokens: null, temp: undefined }, user: { role: "admin", active: true } },
  { id: 5, type: "CRITICAL_HALT", status: "fatal", priority: 0, payload: { error: "Memory Overflow" }, user: { role: "system", active: true } }
];

// === שלב 1 - סינון ראשוני ===

const actionLogs = ["init", "auth_check", "load_modules", "connect_db", "ready"];

function processQueue(queue, logs) {
    // 1. אנחנו מכינים "חדר המתנה" חדש וריק. 
    // לפה נכניס רק את החבילות שעברו את הסינון.
    const validRequests = [];
    
    // 2. לולאת for...of: עוברת על כל חבילה (req) מתוך התור (queue)
    for (const req of queue) {
        
        // 3. בדיקת התנאים: האם החבילה מושחתת? או אולי אין לה בכלל תוכן?
        if (req.status === "corrupted" || req.payload === null || req.payload === undefined) {
            
            console.log(`[Filter] Skipping Request ID ${req.id} (Corrupted/Missing Payload)`);
            
            // 4. מילת הקסם! continue אומרת: "תדלג עליו וקפוץ מיד לסיבוב הבא של הלולאה"
            continue; 
        }
        
        // 5. אם המחשב הגיע לשורה הזו, זה אומר שהוא *לא* נכנס ל-if.
        // כלומר, החבילה תקינה! נדחוף אותה לתוך "חדר ההמתנה" שלנו.
        validRequests.push(req); 
    }

    // הדפסה זמנית רק כדי שנראה שעשינו עבודה טובה:
    console.log("Good packages waiting in level 1:", validRequests.length);


// נפעיל את הפונקציה כדי לבדוק//
//processQueue(requestsQueue, actionLogs);//

// === שלב 2: ניהול התור (ריקון חדר ההמתנה) ===
    // הלולאה תרוץ *כל עוד* האורך של מערך החבילות התקינות גדול מ-0
    while (validRequests.length > 0) {
        
        // 1. נשלוף את החבילה הראשונה בתור (היא תימחק מהתור ותישמר במשתנה currentReq)
        const currentReq = validRequests.shift();

        // 2. נוהל חירום! אם סוג החבילה הוא פצצה (CRITICAL_HALT)
        if (currentReq.type === "CRITICAL_HALT") {
            console.error("FATAL ERROR: CRITICAL_HALT encountered! Halting all processes.");
            // ה-break שובר את לולאת ה-while במקום. שום חבילה נוספת לא תיבדק!
            break; 
        }

        // 3. הדפסה זמנית רק כדי לראות מי נכנס לטיפול
        console.log(`Now checking Request ID in level 2: ${currentReq.id}`);
//    }
    
//    console.log("\nQueue processing is finished!");
//}

// מפעילים את הפונקציה
// כשאנחנו קוראים לפונקציה אנחנו קוראים ל-requestsQueue
// אבל אנחנו קוראים גם ל-actionLogs כדי לקבל גם את היומן שאותו נצטרך בשלב 6 
//processQueue(requestsQueue, actionLogs);



        // === שלב 3: אישור ביטחוני (Business Logic) ===
        // אנחנו משתמשים בסוגריים עגולים () כדי לקבץ את התנאים בדיוק לפי דרישות המרצה
        const isApproved = 
            (currentReq.user.role === "admin" || currentReq.priority > 2) 
            && 
            (currentReq.user.active === true) 
            && 
            !(currentReq.payload.model === "claude" && currentReq.payload.tokens < 200);

        // עכשיו בודקים את התוצאה: אם היא true, נדפיס מאושר. אם היא false, נדפיס נדחה.
        if (isApproved) {
            console.log(`[Request ${currentReq.id} APPROVED] Passed security check!`);
            // === שלב 4: תיקון נתונים (רק למאושרים!) ===
            // הלולאה עוברת על כל "מפתח" (key) בתוך אובייקט הנתונים
            for (const key in currentReq.payload) {
                // אנחנו בודקים האם הערך של המפתח הנוכחי הוא ריק
                if (currentReq.payload[key] === null || currentReq.payload[key] === undefined) {
                    // אם כן - נדרוס אותו עם המילה המבוקשת
                    currentReq.payload[key] = "MISSING_DATA";
                }
            }
            
            // הדפסה זמנית כדי לראות את התוכן המתוקן של החבילה
            console.log(`[Request ${currentReq.id}] Fixed Payload:`, currentReq.payload);
            // ==========================================

            // ==========================================
            // === שלב 5: ניתוב הבקשה (Switch Case) ===
            // אנחנו בודקים מה כתוב בתוך הסוג של הבקשה הנוכחית
            switch (currentReq.type) {
                case "AI_PROMPT":
                    console.log(`[Request ${currentReq.id} ROUTING] Routing to LLM Engine...`);
                    break;
                case "DB_QUERY":
                    console.log(`[Request ${currentReq.id} ROUTING] Executing Secure Query...`);
                    break;
                case "SEND_EMAIL":
                    console.log(`[Request ${currentReq.id} ROUTING] Adding to Mail Delivery Queue...`);
                    break;
                default: // מקרה ברירת מחדל: אם הגיע סוג שאנחנו לא מכירים
                    console.log(`[Request ${currentReq.id} ROUTING] Unknown request type.`);
                    break;
            }
            // ==========================================


        } else {
            console.log(`[Request ${currentReq.id} DENIED] Failed security check.`);
        }
        
        console.log("------------------------"); // רק קו מפריד שיהיה נוח לקרוא את הפלט
    }
    
    console.log("\nQueue processing is finished!");

    // ==========================================
    // === שלב 6: בדיקת יומן מהסוף להתחלה ===
    console.log("\n--- System Health Check: Last 3 Logs ---");
    // רצים מהאינדקס האחרון כלפי מטה (i--) עד שעוברים 3 צעדים
    for (let i = logs.length - 1; i >= logs.length - 3; i--) {
        // בודקים שהאינדקס לא ירד מתחת לאפס (ליתר ביטחון)
        if (i >= 0) {
            console.log(`Log index [${i}]: ${logs[i]}`);
        }
    }
    // ==========================================
}

processQueue(requestsQueue, actionLogs);
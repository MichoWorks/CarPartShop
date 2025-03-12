
# 🚗 **MichoCarParts**  
🔧 **חנות מקוונת למכירת חלקי חילוף ואביזרים לרכב**  

---

![MichoCarParts Screenshot](src/assets/screenshot.png)

---

## 📌 **תוכן עניינים**  
- [תיאור הפרויקט](#-תיאור-הפרויקט)  
- [תכונות עיקריות](#-תכונות-עיקריות)  
- [דרישות מקדימות](#-דרישות-מקדימות)  
- [התקנה והרצה](#-התקנה-והרצה)  
- [מבנה הפרויקט](#-מבנה-הפרויקט)  
- [טכנולוגיות בשימוש](#-טכנולוגיות-בשימוש)  
- [יוצר](#-יוצר)  

---

## 📝 **תיאור הפרויקט**  
**MichoCarParts** הוא אתר חנות מקוונת למכירת חלקי חילוף לרכב.  
האתר מציג קטלוג מוצרים מסודר לפי קטגוריות, עם אפשרות להוספת מוצרים לסל וקנייה.  

---

## ✨ **תכונות עיקריות**  
✅ דף מוצרים עם ניווט בין הקטגוריות.  
✅ דף מוצר מפורט עם תמונה, תיאור ומחיר.  
✅ אפשרות להוספת מוצרים לסל הקניות.  
✅ ניווט בין מוצרים - **מוצר הבא / חזרה**.  
✅ חוויית משתמש משופרת עם עיצוב מודרני.  

---

## ⚙ **דרישות מקדימות**  
לפני התקנת הפרויקט, ודא שיש לך את התוכנות הבאות מותקנות במערכת:  
- [Node.js](https://nodejs.org/) (מומלץ גרסה 16 ומעלה)  
- [Angular CLI](https://angular.io/cli)  
- [JSON Server](https://www.npmjs.com/package/json-server)  

להתקנת Angular CLI ו-JSON Server:  
```bash
npm install -g @angular/cli json-server
```

---

## 🚀 **התקנה והרצה**  
1️⃣ **שכפל את הריפו**:  
```bash
git clone https://github.com/MichoWorks/MichoCarParts.git
cd MichoCarParts
```
  
2️⃣ **התקן את התלויות**:  
```bash
npm install
```
  
3️⃣ **הפעל את הפרויקט**:  
```bash
npm start
```
🔹 **האתר ירוץ על** `http://localhost:4200/`  
🔹 **שרת הנתונים (JSON Server) ירוץ על** `http://localhost:3000/`  

---

## 📂 **מבנה הפרויקט**  
```
MichoCarParts/
│-- src/
│   │-- app/
│   │   │-- components/   # קומפוננטות חוזרות
│   │   │-- pages/        # דפי האתר (דף מוצרים, דף פרטים וכו')
│   │   │-- services/     # שירותים (API לקריאה מה-JSON Server)
│   │   │-- models/       # מודלים של הנתונים (Product, User)
│   │-- assets/           # תמונות וקבצים סטטיים
│   │-- environments/     # קבצי קונפיגורציה
│-- db.json               # קובץ ה-JSON שמדמה את הדאטה בייס
│-- package.json          # תלותים והרצות הפרויקט
│-- angular.json          # קובץ קונפיגורציה של Angular
│-- README.md             # קובץ תיעוד הפרויקט
```

---

## 🛠 **טכנולוגיות בשימוש**  
🔹 **Frontend** - Angular, TypeScript, SCSS  
🔹 **Backend (דמוי דאטה-בייס)** - JSON Server  
🔹 **ניהול תהליכים** - Concurrently  

---

## 👨‍💻 **יוצר**  
💡 **MichoWorks** | [GitHub](https://github.com/MichoWorks)  

🚀 **תהנה מהפרויקט, ותודה שהצטרפת אלינו!** 🚗💨  

---

🎯 **אם יש לך שאלות או הצעות לשיפור, אל תהסס לפנות אליי!** 🚀
```


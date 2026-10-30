//function showTime() {
//	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
//}
//showTime();
//setInterval(function () {
//	showTime();
//}, 101);

const y = sessionStorage.getItem("savedScore");
var x = Number(y)

document.createElement('testid')

function test() {
  document.getElementById('testid').innerHTML = x;
}
test();
var inputv = 1
function inputt() {
    let inputv = document.getElementById('inputtest');
    x = inputv.value
    x = Number(x)
    test()

}

function inputhack() {
    let inputtest = document.getElementById('inputtest');
    let x = inputtest.value
    x = Number(x)
    test()
    sessionStorage.setItem("savedScore", x);
    window.location.href = "index.html";
  
}
function showAlert() {
  //alert("Button was clicked via inline HTML!");
  x += 1
  test()
  
}


window.addEventListener('beforeunload', (event) => {
    // 1. ביטול פעולת הסגירה האוטומטית כברירת מחדל
    event.preventDefault();
    
    // 2. הגדרת מאפיין returnValue (נדרש עבור דפדפנים מסוימים כמו כרום)
    event.returnValue = ''; 
});

window.addEventListener('beforeunload', (event) => {
    // 1. ביטול פעולת הסגירה האוטומטית כברירת מחדל
    event.preventDefault();
    
    // 2. הגדרת מאפיין returnValue (נדרש עבור דפדפנים מסוימים כמו כרום)
    event.returnValue = ''; 
});

// עטיפת כל הקוד בתוך פונקציה סגורה
(() => {
    let score = 0; // המשתנה הזה מוגן מה-Console הרגיל!

    function addPoints() {
        score += 10;
        console.log("הניקוד הנוכחי:", score);
    }

    // הדבקת מאזין לכפתור בתוך הסגירה
    document.getElementById("gameButton").addEventListener("click", addPoints);
})();



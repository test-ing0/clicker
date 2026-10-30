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
    
    test()
    sessionStorage.setItem("savedScore", x);
    window.location.href = "index.html";
  
}
function showAlert() {
  //alert("Button was clicked via inline HTML!");
  x += 1
  test()
  
}

const b = document.getElementById("button1");
// עטיפת כל הקוד בתוך פונקציה סגורה
(() => {

    let score = 0
    if (sessionStorage.getItem("savedpoint")){
      score = sessionStorage.getItem("savedpoint")
      score=Number(score)
      
    }
    
    let hackb = document.getElementById("hackb")
    if (hackb) {
      hackb.addEventListener("click",hack)
    }
    function hack() {
      let inputhack = document.getElementById("hackinput")
      inputhack = inputhack.value
      score = Number(inputhack)
      sessionStorage.setItem("savedpoint",score)
      window.location.href = "index.html";
    }

    function addPoints() {
        score += 1;
        document.getElementById("testid").innerHTML = score
        sessionStorage.setItem("savedpoint",score)
        
    }
    document.getElementById("testid").innerHTML = score
    b.addEventListener("click" , addPoints)
    
    // הדבקת מאזין לכפתור בתוך הסגירה
    //document.getElementById("gameButton").addEventListener("click", addPoints);
})();




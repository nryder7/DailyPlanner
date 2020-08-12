$("#currentDay").text(moment().format("MMMM Do YYYY"));
//$("#time").text(moment().format('LT'))
$("#hour").text(moment().format('HH:mm:ss'))


var hourMinute = document.querySelector("#hour")
//var hourMinute = (moment().format('HH:mm'));
//var testTime = document.querySelector(".hour")
var testTime1 = document.querySelector("#testTime1")
var testTime2 = document.querySelector("#testTime2")
var testTime3 = document.querySelector("#testTime3")
var testTime4 = document.querySelector("#testTime4")
var testTime5 = document.querySelector("#testTime5")
var testTime6 = document.querySelector("#testTime6")
var testTime7 = document.querySelector("#testTime7")
var testTime8 = document.querySelector("#testTime8")
var testTime9 = document.querySelector("#testTime9")
var testTime9 = document.querySelector("#testTime9")
//console.log(testTime.childNodes[0]);

var currentTime = hourMinute.childNodes[0]
var compareTime1 = testTime1.childNodes[4]
var compareTime2 = testTime2.childNodes[4]
var compareTime3 = testTime3.childNodes[4]
var compareTime4 = testTime4.childNodes[4]
var compareTime5 = testTime5.childNodes[4]
var compareTime6 = testTime6.childNodes[4]
var compareTime7 = testTime7.childNodes[4]
var compareTime8 = testTime8.childNodes[4]
var compareTime9 = testTime9.childNodes[4]
var compareTime10 = testTime10.childNodes[4]

//var compareTime = testTime.childNodes[0]
//console.log(hourMinute.childNodes[0]);
//var adjustTime = parseInt(hourMinute.childNodes[0]);
//console.log(adjustTime);

if (currentTime> compareTime1) {
    testTime1.nextElementSibling.setAttribute("class", "past")
}   else if (currentTime<compareTime2) {
    testTime1.nextElementSibling.setAttribute("class", "future")
}   else {
    testTime1.nextElementSibling.setAttribute("class", "present")
}

if (currentTime> compareTime2) {
    testTime2.nextElementSibling.setAttribute("class", "past")
}   else if (currentTime<compareTime3) {
    testTime2.nextElementSibling.setAttribute("class", "future")
}   else {
    testTime2.nextElementSibling.setAttribute("class", "present")
}

if (currentTime> compareTime3) {
    testTime3.nextElementSibling.setAttribute("class", "past")
}   else if (currentTime<compareTime4) {
    testTime3.nextElementSibling.setAttribute("class", "future")
}   else {
    testTime3.nextElementSibling.setAttribute("class", "present")
}

if (currentTime> compareTime4) {
    testTime4.nextElementSibling.setAttribute("class", "past")
}   else if (currentTime<compareTime5) {
    testTime4.nextElementSibling.setAttribute("class", "future")
}   else {
    testTime4.nextElementSibling.setAttribute("class", "present")
}
if (currentTime> compareTime5) {
    testTime5.nextElementSibling.setAttribute("class", "past")
}   else if (currentTime<compareTime6) {
    testTime5.nextElementSibling.setAttribute("class", "future")
}   else {
    testTime5.nextElementSibling.setAttribute("class", "present")
}

if (currentTime> compareTime6) {
    testTime6.nextElementSibling.setAttribute("class", "past")
}   else if (currentTime<compareTime7) {
    testTime6.nextElementSibling.setAttribute("class", "future")
}   else {
    testTime6.nextElementSibling.setAttribute("class", "present")
}

if (currentTime> compareTime7) {
    testTime7.nextElementSibling.setAttribute("class", "past")
}   else if (currentTime<compareTime8) {
    testTime7.nextElementSibling.setAttribute("class", "future")
}   else {
    testTime7.nextElementSibling.setAttribute("class", "present")
}
if (currentTime> compareTime8) {
    testTime8.nextElementSibling.setAttribute("class", "past")
}   else if (currentTime<compareTime9) {
    testTime8.nextElementSibling.setAttribute("class", "future")
}   else {
    testTime8.nextElementSibling.setAttribute("class", "present")
}
if (currentTime> compareTime9) {
    testTime9.nextElementSibling.setAttribute("class", "past")
}   else if (currentTime<compareTime10) {
    testTime9.nextElementSibling.setAttribute("class", "future")
}   else {
    testTime9.nextElementSibling.setAttribute("class", "present")
}
/*
if (currentTime< ) {
    testTime10.nextElementSibling.setAttribute("class", "past")
}   else if (currentTime<('22:59:59')) {
    testTime10.nextElementSibling.setAttribute("class", "future")
}   else {
    testTime10.nextElementSibling.setAttribute("class", "present")
}
*/

var container = document.querySelector(".container");

for (var i = 0; i < 10; i++) {
    var timeContent = localStorage.getItem(i)
    if (timeContent !== null) {
        container.children[i].children[1].setAttribute("placeholder", timeContent);
    }
}



/*var setLocalTest = localStorage.setItem(0,"work time");
var setLocalTest = localStorage.setItem(1,"food time");
var setLocalTest = localStorage.setItem(2,"nap time");
var setLocalTest = localStorage.setItem(3,"tv time");
var setLocalTest = localStorage.setItem(4,"talk time");
*/


/*
container.addEventListener("submit", function(event) {
    event.preventDefault();
    var userInput = parseInt(event.target.value);
    var input = event.target.previousElementSibling.setAttribute("placeholder", FormData)
    localStorage.setItem(userInput, input);
})
*/
/*
function buttonClick() {
    event.stopPropagation();
    event.preventDefault();
    if (event.target.matches("button")) {
        var userInput = parseInt(event.target.value);
        event.target.previousElementSibling.setAttribute("placeholder", input)
        localStorage.setItem(userInput, input);
        console.log(event.target.previousElementSibling.placeholder);
    }
}
*/
/*
$(".container").on("click", function() {
    event.stopPropagation()
    alert("I've been clicked!");
    if ($(this)) {
        var userInput = parseInt(this.value);
    }
});
*/
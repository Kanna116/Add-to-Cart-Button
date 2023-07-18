var button = document.querySelector("#button");
var cartIcon = document.querySelector("#button #cartIcon")
var firstText = document.querySelector("#button #first");
var secondText = document.querySelector("#button #second");
var bag = document.querySelector("#bag")

function animateMove() {
    firstText.style.transform = "translateX(200px)"
    cartIcon.style.transform = "translateX(60px)"
    bag.style.animationName = "throwBag"
    var stageTwo = setTimeout(function nextStep() {
        secondText.style.transform = "translateX(175px)"
        cartIcon.style.transform = "translateX(130px)"
    }, 2000)
    button.onclick = function reverse() {
        cartIcon.style.transform = "translateX(0px)"
        firstText.style.transform = "translateX(0px)"
        secondText.style.transform = 'translateX(-60px)'
    }
}
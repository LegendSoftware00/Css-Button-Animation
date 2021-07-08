var container = document.querySelector(".container");
var btn = container.querySelector("#btn");
var bouble = container.querySelector(".bouble");

btn.addEventListener("click",btnAnm);
btn.addEventListener("mousedown", function(){
    btn.style.transform = "scale(0.9)";
});
btn.addEventListener("mouseup", function(){
    btn.style.transform = "scale(1)";
})

function btnAnm() {
    bouble.style.animation = "boubleAnm 1s";
    btn.style.animation = "btnMainAnm 1s";
    function removeAnm(){
        bouble.style.animation = "none";
    }
    setTimeout(removeAnm, 1000);
}
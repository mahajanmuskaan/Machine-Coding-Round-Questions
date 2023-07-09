let button = document.getElementById("modal-btn");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close");
let body = document.querySelector(".body");

button.addEventListener("click", () => {
    modal.style.display = "block";
    modal.style.backgroundColor = "white";
    body.style.backgroundColor="rgba(0,0,0,0.4)"
})

close.addEventListener("click", () => {
    modal.style.display = "none";
    body.style.backgroundColor = "white";
})
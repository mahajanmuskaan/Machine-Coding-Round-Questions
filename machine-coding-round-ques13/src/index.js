let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");
let count = 0;

increment.addEventListener("click", () => {
    let numberToIncrement = document.getElementById("number").value;
    console.log(numberToIncrement);
    count = count + parseInt(numberToIncrement);
    document.getElementById("counter").innerText = count;
});

decrement.addEventListener("click", () => {
    let numberToIncrement = document.getElementById("number").value;
    console.log(numberToIncrement);
    count = count - parseInt(numberToIncrement);
    if (count < 0) {
        document.getElementById("counter").innerText = parseInt(0);
    }
    else {
        document.getElementById("counter").innerText = count;
    }
});

reset.addEventListener("click", () => {
    count = 0;
    document.getElementById("counter").innerText = count;
})
let num = 0;
const totalStars = document.querySelectorAll(".star").length;
document.querySelectorAll(".star").forEach((element) => {
    element.addEventListener("mouseover", (e) => {
        const hoverIndex = parseInt(e.target.id);
        for (let i = 0; i < totalStars; i++) {
            const item = document.getElementById(i);
            if (i <= hoverIndex) {
                item.style.color = "yellow";
            } else {
                item.style.color = "black";
            }
        }
    });
    element.addEventListener("click", (e) => {
        if (!e.target.classList.contains("selected")) {
            for (let i = 0; i <= element.id; i++) {
                const item = document.getElementById(i);
                item.classList.add("selected");
                item.style.color = "yellow";
                num = parseInt(e.target.id) + 1;
                const countnumber = document.getElementById("count");
                countnumber.innerText = `Rating Count: ${num}`;
            }
        }
        else {
            for (let i = parseInt(e.target.id) + 1; i < totalStars; i++) {
                const item = document.getElementById(i);
                item.classList.remove("selected");
                item.style.color = "black";
                num = parseInt(e.target.id) + 1;
                const countnumber = document.getElementById("count");
                countnumber.innerText = `Rating Count: ${num}`;
            }
        }
    })
    element.addEventListener("mouseout", (e) => {
        for (let i = 0; i < totalStars; i++) {
            const item = document.getElementById(i);
            if (!item.classList.contains("selected")) {
                item.style.color = "black";
            }
            else {
                item.style.color = "yellow";
            }
        }
    });
});

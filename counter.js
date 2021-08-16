const buttons = document.querySelectorAll(".btn");
const counterValue = document.querySelector(".counter span");
let count = 0;

buttons.forEach( (btn) => {
    btn.addEventListener("click" , () => {
        const classList = btn.classList;
        if (classList.contains("increment")) count++;
        else if (classList.contains("decrement")) count--;
        else count = 0;

        if (count > 0) counterValue.style.color = "#34A853";
        else if (count < 0 ) counterValue.style.color = "#EA4335";
        else counterValue.style.color = "black";
        counterValue.textContent = count;
    })
});

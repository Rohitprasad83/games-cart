const slider = document.querySelector(".slider");
const sliderOutput = document.querySelector(".slider__output");
slider.addEventListener("change", () => {
    sliderOutput.innerText = ` Price Range is ₹1000 to ₹${slider.value}`;
})
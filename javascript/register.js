const pass = document.querySelector("#pass");
const showPassword = document.querySelector(".show__password");
const confirmPassword = document.querySelector("#confirm__password");
showPassword.addEventListener("click", () => {
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }

    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
    } else {
        confirmPassword.type = "password";
    }
})
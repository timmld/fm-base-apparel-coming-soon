const submitBtn = document.querySelector(".b-form__submit");
const emailInput = document.querySelector(".b-form__email");
const errorMsg = document.querySelector(".b-form__error-msg");

function isValid(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    } else {
        return false;
    };
};

submitBtn.addEventListener('click', () => {
    if (!isValid(emailInput.value)) {
        emailInput.classList.add("b-form__email--error");
        errorMsg.textContent = "Please provide a valid email";
    } else {
        emailInput.classList.remove("b-form__email--error");
        errorMsg.textContent = "";
    };
});
const refs = {
    loginForm: document.querySelector(".login-form"),
}

refs.loginForm.addEventListener("submit", loginSubmitHandler);

function loginSubmitHandler(event) {
    event.preventDefault();
    const login = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();
    if (login === "" || password === "") {
       return alert("All form fields must be filled in");
    }
    const loginData = {
        login,
        password,
    }
    console.log(loginData);
    event.target.reset()
}
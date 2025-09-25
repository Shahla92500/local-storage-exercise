const form = document.getElementById("loginForm");
const message = document.getElementById("message");
const rememberMe = document.getElementById("rememberMe");
const logoutBtn = document.getElementById('logout');
const userName = document.getElementById('username');
const passWord = document.getElementById('password');


form.addEventListener("submit", (e)=> {

    e.preventDefault();

    const userN = document.getElementById("username").value;
    const passW = document.getElementById("password").value;
    console.log(`username: ${userN}, Password: ${passW}`);
    localStorage.setItem("password", passW);
    localStorage.setItem("User Name ", userN);
    if (rememberMe.checked){
        localStorage.setItem("savedUsername",userN);
        localStorage.setItem("SavedPassword",passW);
    } else {
        localStorage.removeItem("savedUsername");
        localStorage.removeItem("SavedPassword");
    }
    message.textContent = `Welcome, ${userN}`;
    
});
form.addEventListener("click", (e) =>{
    localStorage.clear()
    message.textContent = "You are logged out"    
    // if (!rememberMe.checked) {
    //     userName.value = '';
    //     passWord.value = '';
    // }
});
if (localStorage.getItem("savedUsername")){
    document.getElementById('username').value = localStorage.getItem('savedUsername');
    document.getElementById('password').value = localStorage.getItem('savedPassword');
    message.textContent= `Welcome, ${localStorage.getItem('savedUsername')}`;
    rememberMe.checked = true;
} else {
    rememberMe.checked = false;
}

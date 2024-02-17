let SignUpBox = document.getElementById('SingUpBox')
let SignInBox = document.getElementById('SignInBox')
let SignUpButton = document.getElementById('SingUp-button')
let SignInButton = document.getElementById('SignIn-button')
let btnAppear = document.getElementById('Entered')
let logined = false


let users = [
    {username: "12" , password: "12"}
];
function SignIn() {
    let usernameIn = document.getElementById('UsernameIn').value;
    let passwordIn = document.getElementById('PasswordIn').value;
    
    if(SignInBox.style.display == 'flex') {
        SignInBox.style.display = 'none'
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        const user = users.find(users => users.username == usernameIn && users.password == passwordIn);
        if (user) {
            alert('Login successful!');
            logined = true
            DOIT()
            // Redirect to another page or perform other actions upon successful login
        } else {
            alert('Invalid username or password. Please try again.');
        }
    }
    else 
    {
        SignInBox.style.display = 'flex'
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }

}
function SignUp() {
    if(SingUpBox.style.display == 'flex') {
        SignUpBox.style.display = 'none'
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        addUsername()
    }
    else 
    {
        SingUpBox.style.display = 'flex'
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }

}

function addUsername() {
    let usernameUp = document.getElementById('UsernameUp').value;
    let passwordUp = document.getElementById('PasswordUp').value;
    if(usernameUp !="" && passwordUp != ""){
        users.push({ username: usernameUp , password: passwordUp})
        console.log(users);
    }
    else{
        alert(`Write something pal`)
    }
}

function DOIT() {
    if(logined == true) {
        SignInButton.style.display = "none"
        SignUpButton.style.display = "none"
        btnAppear.style.display = "flex"
    }
}

function Move() {
    document.getElementById("Curces").scrollIntoView();
}
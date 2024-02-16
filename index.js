let SingUpBox = document.getElementById('SingUpBox')
let inputName = document.getElementById('Username')
let inputPassword = document.getElementById('Password')

const database = [
    {
        name: '',
        password: ''
    },
    {
        name: '',
        password: ''
    },
    {
        name: '',
        password: ''
    },
    {
        name: '',
        password: ''
    },
    {
        name: '',
        password: ''
    },
    {
        name: '',
        password: ''
    },
    {
        name: '',
        password: ''
    },
    {
        name: '',
        password: ''
    },
    {
        name: '',
        password: ''
    },
    {
        name: '',
        password: ''
    },

    {
        name: '',
        password: ''
    },
]

function SingThisManUp() {
    if(SingUpBox.style.display == 'flex') {
        SingUpBox.style.display = 'none'
        database.name += inputName.value
        database.password += inputPassword.value
    } else {
        SingUpBox.style.display = 'flex'
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }
}

var validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
userNameInput = document.getElementById('userName')
userEmailInput = document.getElementById('userEmail')
userPasswordInput = document.getElementById('userPassword')
mainBtn = document.getElementById('mainBtn')
parg = document.getElementById('parg')
signUp = document.getElementById('signUp')
logOut = document.getElementById('logOut')
var usersList

if (localStorage.getItem('usersList') !== null) {
    usersList = JSON.parse(localStorage.getItem('usersList'))
    console.log(usersList)

} else {
    usersList = []
}
signUp.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector('input').classList.replace("d-none", "d-block")
    document.getElementById('parg').innerHTML = `<p class="text-white text-center pt-3" >You have an account ? <a id="signIn" href="" class="text-white "> Sign In </a></p>`
    document.getElementById('mainBtn').innerHTML = 'Sign Up'

})


mainBtn.addEventListener('click', function () {

    var userInfo = {
        userName: userNameInput.value,
        userEmail: userEmailInput.value,
        userPassword: userPasswordInput.value
    }
    if (mainBtn.innerHTML == "Sign Up") {
        usersList.push(userInfo)
        localStorage.setItem('usersList', JSON.stringify(usersList));
        resetInputs()
    } else {
        signIn()
    }
})

function resetInputs() {
    userEmailInput.value = null
    userNameInput.value = null
    userPasswordInput.value = null
}



function signIn() {
    for (i = 0; i < usersList.length; i++) {
        if (userEmailInput.value == usersList[i].userEmail &&
            userPasswordInput.value == usersList[i].userPassword) {
            document.getElementById('correct').classList.replace('d-block','d-none')
            document.getElementById('head').innerHTML = `Welcome ${usersList[i].userName}`
            document.getElementById('inputs').classList.add('d-none')
            document.getElementById('parg').classList.add('d-none')
            document.getElementById('nav').classList.remove('d-none')

        }
        else {
            document.getElementById('correct').classList.replace('d-none','d-block')
           
        }

    }

}
console.log(usersList)



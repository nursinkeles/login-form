const loginForm = document.querySelector('#login-form');
const loginForm2 = document.querySelector('#login-form2');

const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const rememberInput = document.querySelector('#remember-me');

const usernameInput2 = document.querySelector('#username2');
const passwordInput2 = document.querySelector('#password2');
const emailInput = document.querySelector('#email');
const confirmInput = document.querySelector('#confirm');

const newAcc = document.querySelector('#new-acc');
const icon = document.querySelector('.eye');
const footer = document.querySelector('footer');

//LOGIN FORM
const formData = {
    username :'',
    password : '',
    rememberMe: false
}

usernameInput.addEventListener('input', (event)=> {
    formData.username = event.target.value;
});

passwordInput.addEventListener('input', (event)=> {
    formData.password = event.target.value;
});

rememberInput.addEventListener('change', (event)=> {
    formData.rememberMe = event.target.checked;
});


loginForm.addEventListener('submit', (event)=> {
    event.preventDefault();

    if(formData.username == ""){
        console.log("hatalı");
        usernameInput.classList.add('red');
        setTimeout(()=> usernameInput.classList.remove('red'),2000);
    }
    if(formData.password == ""){
        console.log("hatalı");
        passwordInput.classList.add('red');
        setTimeout(()=> passwordInput.classList.remove('red'),2000);
    }

    console.log('LOGIN FORM', formData);
    event.target.reset();
});

//REGISTER FORM
const formData2 = {
    username :'',
    email :'',
    password : '',
    confirm:''
}

usernameInput2.addEventListener('input', (event)=> {
    formData2.username = event.target.value;
});

emailInput.addEventListener('input', (event)=> {
    formData2.email = event.target.value;
});
passwordInput2.addEventListener('input', (event)=> {
    formData2.password = event.target.value;
});
confirmInput.addEventListener('input', (event)=> {
    formData2.confirm = event.target.value;
});

loginForm2.addEventListener('submit', (event)=> {
  
    event.preventDefault();

    if(formData2.username == ""){
        console.log("hatalı");
        usernameInput2.classList.add('red');
        setTimeout(()=> usernameInput2.classList.remove('red'),2000);
    }
    if(formData2.email == ""){
        console.log("hatalı");
        emailInput.classList.add('red');
        setTimeout(()=> emailInput.classList.remove('red'),2000);
    }
    if(formData2.password == ""){
        console.log("hatalı");
        passwordInput2.classList.add('red');
        setTimeout(()=> passwordInput2.classList.remove('red'),2000);
    }
    if(formData2.confirm == ""){
        console.log("hatalı");
        confirmInput.classList.add('red');
        setTimeout(()=> confirmInput.classList.remove('red'),2000);
    }

    //PASSWORD CONTROL
     if(formData2.password != formData2.confirm){
         console.log("hatalı");
         passwordInput2.classList.add('red');
         setTimeout(()=> passwordInput2.classList.remove('red'),2000);
    }else{
    console.log('REGISTER FORM', formData2);
     }
     

    event.target.reset();
});

 icon.addEventListener('click', () => {
     passwordInput.type = passwordInput.type == 'password' ? 'text' : 'password';
 });

 newAcc.addEventListener('click', () => {
     loginForm.style.display='none';
     footer.style.display='none';
     loginForm2.style.display='block';
 });

 


const loginBtnlink = document.querySelector('.loginBtn-link');
const recoverBtnlink = document.querySelector('.recoverBtn-link');
const registerBtnlink = document.querySelector('.registerBtn-link');


const wrapper = document.querySelector('.wrapper');

// Muda para a tela de cadastro
registerBtnlink.addEventListener('click', () => {
    wrapper.classList.remove('login-active', 'recover-active');
    wrapper.classList.add('register-active');
});

// Muda para a tela de recuperação de senha
recoverBtnlink.addEventListener('click', () => {
    wrapper.classList.remove('login-active', 'register-active');
    wrapper.classList.add('recover-active');
});

// Muda para a tela de login
loginBtnlink.addEventListener('click', () => {
    wrapper.classList.remove('register-active', 'recover-active');
    wrapper.classList.add('login-active');
});
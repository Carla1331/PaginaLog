const loginBtnlink = document.querySelector('.loginBtn-link');
const registerBtnlink = document.querySelector('.registerBtn-link');
const recoverBtnlink = document.querySelector('.recoverBtn-link');
const returnBtnlink = document.querySelector('.recoverReturn-link'); 

const wrapper = document.querySelector('.wrapper');


loginBtnlink.addEventListener('click', () => {
    wrapper.classList.remove('register-active', 'recover-active');
    wrapper.classList.add('login-active');
});


registerBtnlink.addEventListener('click', () => {
    wrapper.classList.remove('login-active', 'recover-active');
    wrapper.classList.add('register-active');
});

recoverBtnlink.addEventListener('click', () => {
    wrapper.classList.remove('login-active', 'register-active');
    wrapper.classList.add('recover-active');
});

returnBtnlink.addEventListener('click', () => {
    wrapper.classList.remove('register-active', 'recover-active');
    wrapper.classList.add('login-active');
});

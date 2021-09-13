import throttle from 'lodash.throttle';

const formInput = document.querySelector('.feedback-form');
const input = document.querySelector('[name="email"]');
const textArea = document.querySelector('textarea');

formInput.addEventListener('input', throttle(save, 500, { trailing: true }));
updateForm()

function save (event) {
    event.preventDefault();
    localStorage.setItem('email', formInput.elements.email.value)
    localStorage.setItem('message', formInput.elements.message.value)
}
function updateForm (){
    input.value = localStorage.getItem('email')
    textArea.textContent = localStorage.getItem('message');
}
formInput.addEventListener('submit', submit)
function submit(event){
    event.preventDefault();
    const {
        elements:{email, message}
    } = event.currentTarget;
    console.log(`Email:${email.value}, message:${message.value}`);
    event.currentTarget.reset();
    localStorage.clear();
    formInput.reset();
    
    updateForm()

}
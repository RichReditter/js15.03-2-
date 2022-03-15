const form = document.forms[0];
const firstNameInput = document.body.querySelector('input')
firstNameInput.addEventListener('input',function(){
    if(this.value.length > 3 ){
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        this.nextElementSibling.className = 'valid-feedback';
        this.nextElementSibling.textContent = 'Looks pretty good!!'
    } else {
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
        this.nextElementSibling.className = 'invalid-feedback'
        this.nextElementSibling.textContent = 'Oh no!'
    }
})

const lastNameInput = document.body.querySelector('#validationCustom02')
lastNameInput.addEventListener('input',function(){
    if(this.value.includes(' ')){
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
        this.nextElementSibling.className = 'invalid-feedback'
        this.nextElementSibling.textContent = 'Horrible... Change please your last name '
    }
})

const zip = document.body.querySelector('#validationCustom05')
zip.addEventListener('input',function(){
    if( this.value === Number.parseInt(this.value).toString()){
        this.classList.remove('is-invalid');
        this.classList.add('is-valid');
        this.nextElementSibling.className = 'valid-feedback';
        this.nextElementSibling.textContent = 'Looks pretty good!!'
        
    }
    else{
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
        this.nextElementSibling.className = 'invalid-feedback'
        this.nextElementSibling.textContent = 'Oh no!'
    }
})

const button = document.body.querySelector('button')
const select = document.querySelector('select')
const radioButton = document.querySelector('#invalidCheck')

button.addEventListener('click',function(){
        if( (select.selectedIndex > 0) ){
            select.classList.remove('is-invalid');
            select.classList.add('is-valid');
            select.nextElementSibling.className = 'valid-feedback';
            select.nextElementSibling.textContent = 'Looks pretty good!!'
        }
        if( (radioButton.isChecked)){
            select.classList.remove('is-invalid');
            select.classList.add('is-valid');
            select.nextElementSibling.className = 'valid-feedback';
            select.nextElementSibling.textContent = 'Looks pretty good!!'
        }
        event.preventDefault()
        
})

button.addEventListener('click', function(){
    if( (radioButton.isChecked)){
        radioButton.classList.remove('is-invalid');
        radioButton.classList.add('is-valid');
        radioButton.nextElementSibling.className = 'valid-feedback';
        radioButton.nextElementSibling.textContent = 'Looks pretty good!!'
    }
    else{
        radioButton.classList.remove('is-valid');
        radioButton.classList.add('is-invalid');
        radioButton.nextElementSibling.className = 'invalid-feedback'
        radioButton.nextElementSibling.textContent = 'Oh no!'
    }
    event.preventDefault()
})




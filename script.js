const emaiForm = document.getElementById('email-form');
const emailFiled = document.getElementById('email-falid');

emaiForm.addEventListener('submit', e=>{
    e.preventDefault();
    const emailValue = emailFiled.value;
    
    
    //check valid email 
    if(!validEmail(emailValue))
    {
        emaiForm.classList.add('error');
        emaiForm.classList.remove('success');
    }
    else{
        emaiForm.classList.remove('error');
        emaiForm.classList.add('success');
        document.body.innerHTML = `<h1 style='margin: 50px 50px;'>Thank You</h1>`

    }


});


function validEmail(email)
{
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
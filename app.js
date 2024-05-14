const formValTool = {
    
}


const form = {
    form : document.querySelector('#test') ,
    submitBttn : document.querySelector('button[type = submit]'),
    password : document.querySelector('#password') ,
    cPassword : document.querySelector('#cPassword') ,

    confirmPass : function(){
        return this.password.value == this.cPassword.value ? true : false ;
    },
    
}

function validate(){
    if(form.confirmPass()){
        return true ;
        
    } else {
        console.log('false');
        return false;
    }
}
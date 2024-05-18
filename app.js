
const APP = {
    setListeners : function(){
        let form = document.querySelector('form');
        form.noValidate = true;

        let email = document.querySelector('#email');
        let password = document.querySelector('#password');
        let Cpass = document.querySelector('#cPassword');
        
        password.addEventListener('blur' , e=>{
            this.testingInput(password);
            this.confirmPass(password , Cpass);
        });

        Cpass.addEventListener('blur' , e=>{
            this.confirmPass(password , Cpass);
        });

        email.addEventListener('blur' , e=>{
            this.testingInput(email);
        });
        
        form.addEventListener('submit' , eve =>{
            eve.preventDefault(); //stop submition
            //valid
            if(form.checkValidity()){
                if(this.confirmPass(password , Cpass)){
                    form.submit();
                }
            }
            //invalid 
            else {
                this.testingInput(password);
                this.testingInput(email);
            }
        });
    } ,

    testingInput : function(input){
        //valid input value
        if(input.checkValidity() == true){
            //style input
           this.switchValidityStyle(input , "valid"); 
           //style error msg input
           let errorMsg = input.parentElement.lastElementChild;
           this.switchValErrorMSg(errorMsg , "error-msg-hide" , "error-msg-show" , 'valid');
           
        } 
        //invalid input's value 
        else {
            //style input
            this.switchValidityStyle(input , "invalid");
            //style error msg field
            let errorMsg = input.parentElement.lastElementChild;
            this.switchValErrorMSg(errorMsg , 'error-msg-hide' , "error-msg-show" , 'invalid');
    
        }
    },
    confirmPass : function(pass , cPass){
        if(cPass.value != '' || pass.value != ""){
            if(pass.value == cPass.value){
                //same
                this.switchValidityStyle(cPass , 'valid');
                let errorMsg = cPass.parentElement.lastElementChild;
                this.switchValErrorMSg(errorMsg , 'error-msg-hide' , "error-msg-show" , 'valid');
                return true ;
        
                
            } else {
                // different
                this.switchValidityStyle(cPass , 'invalid')
                let errorMsg = cPass.parentElement.lastElementChild;
                this.switchValErrorMSg(errorMsg , 'error-msg-hide' , "error-msg-show" , 'invalid');
                return false ;
            }
        }
    },
    switchValidityStyle : function(input , status = 'valid' ){
            //was selected before 
        if(input.classList.contains("invalid") || input.classList.contains('valid')){
            if(status == 'valid'){
                //switch to valid if it was invalid
                if(input.classList.contains('invalid')){
                    input.classList.remove('invalid');
                    input.classList.add('valid');
                }
            } else if (status == 'invalid'){
                //switch to invalid if it was valid
                if(input.classList.contains('valid')){
                    input.classList.remove('valid');
                    input.classList.add('invalid'); 
                }
            }
        } 
        //no select before
        else {
            input.classList.add(status);
        }
    },
    switchValErrorMSg : function(tag , hideClassName , showClassName , validity){
        if(validity == 'valid'){
            //valid
                if(tag.classList.contains(hideClassName) || tag.classList.contains(showClassName)){
                    if(tag.classList.contains(showClassName)){
                        tag.classList.remove(showClassName);
                        tag.classList.add(hideClassName)
                    }
                } else {
                    tag.classList.add(hideClassName);
                }
        
        }else if (validity == 'invalid') {
            //invalid
            if(tag.classList.contains(hideClassName) || tag.classList.contains(showClassName)){
                if(tag.classList.contains(hideClassName)){
                    tag.classList.remove(hideClassName);
                    tag.classList.add(showClassName)
                }
            } else {
                tag.classList.add(showClassName);
            }
        }
    }

};


window.addEventListener('load' , APP.setListeners());
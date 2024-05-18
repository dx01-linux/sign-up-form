// validation after submition 
// validate after change 




//after change testingInput 
//if input is correct style valid  
//if not display a mssg and style invalid

/*
    parent must be a div with small at the end.
    small must have two class , one hide other unhide
    test input must have two class , valid & invalid
    style input & small baed on validity 

*/
function testingInput(input){
    //switch between css class valid & invalid for input
    function switchValidityStyle(input , status = 'valid' ){
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
    }
    //switch between hide and show css class for small tag > error msg
    function switchValErrorMSg(tag , hideClassName , showClassName , validity){
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
     // valid
    if(input.checkValidity() == true){
        //style input
       switchValidityStyle(input , "valid"); 
       //style error msg input
       let errorMsg = input.parentElement.lastElementChild;
       switchValErrorMSg(errorMsg , "error-msg-hide" , "error-msg-show" , 'valid');
       
    } 
    //invalid
    else {
        //style input
        switchValidityStyle(input , "invalid");
        //style error msg field
        let errorMsg = input.parentElement.lastElementChild;
        switchValErrorMSg(errorMsg , 'error-msg-hide' , "error-msg-show" , 'invalid');

    }
}
function runTest(){
    //valid frist selection
    //valid from valid 
    //valid from invalid
    
    //invalid frist selection
    //invalid from invalid 
    //invalid from valid

    function setting(name , clean = true , inptVal = ''){
        console.log(`setting : ${name} `);
        console.log(`input val : ${inptVal}`);
        if(clean == true){
            //clean value
            password.value = '';
            //add new val
            password.value = inptVal;
        }
        
        //run testingInput 
        testingInput(password , '8 characters , one special , one digit , one upper case')
        console.log('result' + password.classList);
    }
    //valid
    setTimeout(e=>{
        setting('validFirstSel' , true , 'diX@ny22****' );
    } , 5000)    
    setTimeout(e=>{
        setting('validFromValid' , false);
    } , 8000)
    setTimeout(e=>{
        setTimeout(e=>{
            password.value = '';
            password.value = 'dx';
            testingInput(password);
        } , 1000);
        setTimeout(e=>{
            setting('validFromInvalid' , true , 'diX@ny22****');
        } , 5000);
    } , 1000);
    // invalid

    // setTimeout(e=>{
    //     setting('invalidFirstSel' , true , 'dx' );
    // } , 5000)    
    // setTimeout(e=>{
    //     setting('invalidFromInvalid' , false);
    // } , 8000);
    // setTimeout(e=>{
    //     setTimeout(e=>{
    //         password.value = '';
    //         password.value = 'diX@ny22****';
    //         testingInput(password);
    //     } , 1000);
    //     setTimeout(e=>{
    //         setting('invalidFromValid' , true , 'dx');
    //     } , 5000);
    // } , 1000);
}



let password = document.querySelector('#password');
password.addEventListener('blur' , e=>{
    testingInput(password);
});


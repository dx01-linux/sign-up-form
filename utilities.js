// properties : take {} with atributes names and values && need properties must have type atribute with element type ex : prop = {type : 'div'}
// styles : take {} with inline style properties names and value 
function setElement(parentId , properties = {tag : "div"} , styles = {}){
    const toolKit = {
            setAttributes : function(element , atributes = {}){
                // get keys
                let keys = Object.keys(atributes); 
                //asign key value to an atribute of element if key is not equal to type
                keys.forEach(key => {
                    if(key != "tag"){
                        if(key == 'innerText'){
                            this.setInnerText(element , atributes[key]);
                        } else {
                            element.setAttribute(key , atributes[key]);
                        }
                    }
                });
            },
            setInnerText : function(element , text){
                let textNode = document.createTextNode(text);
                element.appendChild(textNode);
            } ,
            setInlineStyle : function(element , rules = {} ){
                //check if rules is an empty object
                if(Object.keys(rules).length != 0){
                    // get keys
                    let keys = Object.keys(rules); 
                    //asign key values to style atribute of element
                    keys.forEach(key => {
                        element.style[key] = rules[key];
                        
                    });
                }
            }
    }
    //create element 
    let element = document.createElement(properties.type);
    //assign atributes
    toolKit.setAttributes(element , properties);
    //assign inlineStyle 
    toolKit.setInlineStyle(element , styles);
    //append to parent
    document.querySelector(`#${parentId}`).appendChild(element);
}

function modifyCssVar(element , properties = {}){
    //set var
    Object.keys(properties).forEach(key => {
        element.style.setProperty(key , properties[key]);
    });
}
//test regular expresions
function validRegex(reg , string = ''){
    return reg.test(string);
}




export function qs(selector) { 
    let element = document.querySelector(selector);
    return element
}

/*
add a touchend event listener to an element for mobile with a click event fallback for desktops
@param  {string} elementSelector The selector for the element to attach the listener to
@param {function} callback The callback function to run
*/

export function onClick(elementSelector, callback, parm=null) { 
    if(parm == null){
        elementSelector.addEventListener("click", callback);
    }
    else{
        elementSelector.addEventListener("click", function() {callback(parm);});
    }
}

// function message(text){
//     alert(text);
// }

// onClick(qs('#test'), message, "text");


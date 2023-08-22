var buffer = '';
var memory = '';

var myScreen = document.getElementById("screen");
var secScreen = document.getElementById("equation");


function updatedisp(){
    myScreen.value = buffer;
    console.log(buffer);
    secScreen.innerHTML = memory;
}

function clearall(){
    buffer = '';
    memory = '';
    updatedisp();
}

function percentage(){
    buffer += ('%');
    updatedisp();
}

function divide(){
    buffer += ('/');
    updatedisp();
}

function multiply(){
    buffer += ('*');
    updatedisp();
}

function subtract(){
    buffer += ('-');
    updatedisp();
}

function add(){
    buffer += ('+');
    updatedisp();
}

function equals(){
    // buffer += ('=');
    memory = buffer + " equals";
    buffer = "" + eval(buffer) +"";
    updatedisp();
}

function backspace(){
    buffer.pop;
    updatedisp();
}

function period(){
    buffer += ('.');
    updatedisp();
}

function seven(){
    buffer += ('7');
    updatedisp();
}

function eight(){
    buffer += ('8');
    updatedisp();
}

function nine(){
    buffer += ('9');
    updatedisp();
}

function six(){
    buffer += ('6');
    updatedisp();
}

function five(){
    buffer += ('5');
    updatedisp();
}

function four(){
    buffer += ('4');
    updatedisp();
}

function three(){
    buffer += ('3');
    updatedisp();
}

function two(){
    buffer += ('2');
    updatedisp();
}

function one(){
    buffer += ('1');
    updatedisp();
}

function zero(){
    if(buffer !== '') 
    buffer += ('0');
    updatedisp();
}


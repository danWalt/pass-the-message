function main(){
    createElements();
    let container_div = document.getElementsByClassName('container')
    let button = document.getElementById('submit-button')
    button.addEventListener('click', () => changeText())


}




function changeText(){
    let box = document.getElementById('input-box');
    let lastMessage_text = document.getElementById('last-message');
    if(box.value){
        lastMessage_text.innerHTML = box.value;
        box.value = '';
    }
    else {
        lastMessage_text.innerHTML = 'No input submitted';
        setTimeout(() => {lastMessage_text.innerHTML = ''}, 2000);



    }
}


function createElements(){
    let body = document.getElementsByTagName("BODY")[0];
    let container_div = document.createElement('div');
    container_div.classList.add('container');
    createHead(container_div);
    createBoxInput(container_div);
    createSubmitButton(container_div);
    createLastMessage(container_div);
    createDoThisProject(container_div);
    body.appendChild(container_div);
}

function createHead(container_div){
    let head_div = document.createElement('div');
    let head_text = document.createTextNode('A Message You Would Like To Pass')
    head_div.classList.add('headline');
    head_div.setAttribute('id', 'head')
    container_div.appendChild(head_div);
    head_div.appendChild(head_text);
}

function createBoxInput(container_div){
    let box_div = document.createElement('div');
    box_div.classList.add('box-div');
    let box_input = document.createElement('input');
    box_input.classList.add('input-box');
    box_input.setAttribute('id', 'input-box');
    box_input.setAttribute('type', 'text');
    box_div.appendChild(box_input);
    container_div.appendChild(box_div)
}

function createSubmitButton(container_div){
    let submit_button = document.createElement('button');
    let submit_text = document.createTextNode('Submit');
    submit_button.classList.add('submit-button');
    submit_button.setAttribute('id', 'submit-button');
    submit_button.appendChild(submit_text);
    container_div.appendChild(submit_button);
}


function createLastMessage(container_div){
    let lastMessage_div = document.createElement('div');
    let lastMessage_text = document.createTextNode('Last Message Delivered');
    lastMessage_div.classList.add('last-message');
    lastMessage_div.setAttribute('id', 'last-message');
    lastMessage_div.appendChild(lastMessage_text);
    container_div.appendChild(lastMessage_div);
}

function createDoThisProject(container_div){
    let doThisProject_div = document.createElement('div');
    let doThisProject_text = document.createTextNode('DO THIS PROJECT!');
    doThisProject_div.classList.add('do-this');
    doThisProject_div.setAttribute('id', 'do-this');
    doThisProject_div.appendChild(doThisProject_text);
    container_div.appendChild(doThisProject_div);
}




main();

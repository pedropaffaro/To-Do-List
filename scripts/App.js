var cont = 0;

function handleAddItems(){
    const userText = document.querySelector('#input-text');
    
    if(userText.value == ""){
        alert("Error");
    }
    else{
        const id = `checkbox${cont}`;

        const  button = document.createElement('input');
        button.setAttribute('type', 'button');
        button.setAttribute('value', 'Delete');
        button.addEventListener("click", function(){
            deleteItems(id);
        });

        const div = document.querySelector('#list');
        const divChild = document.createElement('div');
        const divCheckbox = document.createElement('div');
        const label = document.createElement('label');

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');

        const span = document.createElement('span');
        span.innerHTML = userText.value;

        checkbox.setAttribute('id', id);
        label.setAttribute('for', id);
        label.setAttribute('class', id);

        div.appendChild(divChild);
        divChild.appendChild(label);
        label.appendChild(divCheckbox);
        divCheckbox.appendChild(checkbox);
        divCheckbox.appendChild(span);
        label.appendChild(button);

        userText.focus();

        cont++;

        userText.value = "";
    }
}

function deleteItems(id){
    const item = document.querySelector(`.${id}`);
    item.remove();
}
let c = (s)=>document.querySelector(s);

const form = document.forms.list;

form.addEventListener('submit', e => {
    e.preventDefault();

    const { add } = form;
    let result = add.value;

    if(!result) {
        return;
    } else {
        let li = createLi(result);
        let button = createButton(li);

        removeList(button, li);
    };
});

function createLi (result) {
    let li = document.createElement('li');
    
    c('#ul').appendChild(li);
    li.append(result);

    return li;
}

function createButton(li) {
    let button = document.createElement('button');

    li.append(button);
    button.innerHTML = "Apagar";

    return button;
}

function removeList(button, li) {
    button.addEventListener('click', () => {
        if(li.parentNode) li.parentNode.removeChild(li);
    });
}




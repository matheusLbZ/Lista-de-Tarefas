let c = (s)=>document.querySelector(s);
let cs = (s)=>document.querySelectorAll(s);

const form = document.forms.list;

form.addEventListener('submit', e => {
    e.preventDefault();
    const { add } = form;
    let result = add.value;

    if(!result) {
        return;
    } else {
        let li = document.createElement('li');
        let button = document.createElement('button');

        c('ul').appendChild(li);

        li.append(result);
        li.append(button);
        button.innerHTML = "Apagar";
        
        button.addEventListener('click', () => {
            if(li.parentNode) li.parentNode.removeChild(li);
        });
    };
});




let c = (s)=>document.querySelector(s);
let l = (e)=> document.createElement(e);

const form = document.forms.list;

form.addEventListener('submit', e => {
    e.preventDefault();

    const { add, time } = form;

    if(!add.value ||!time.value) {
        return alert("Tente Novamente!");
    } else {
        cloneTasks(add, time);
        clearInput(add, time);
    };
});

window.addEventListener('scroll', ()=> {
    c('.subtitle').classList.toggle('subtitle-background', window.scrollY > 0);
})

function cloneTasks(add, time) {
    let clone = c('section.task').cloneNode(true);

    clone.querySelector('div.yourTask h3').append(`Às ${time.value}: ${add.value}`);

    c('main div.list').appendChild(clone);
};

function clearInput(add, time) {
    add.value = '';
    add.focus();

    time.value = '';
    time.focus();
}
let c = (s)=>document.querySelector(s);
let l = (e)=> document.createElement(e);

const form = document.forms.list;

form.addEventListener('submit', e => {
    e.preventDefault();

    const { add, time } = form;
    let result = add.value;
    let resultTime = time.value;

    if(!result ||!resultTime) {
        return alert("Por Favor! Ensira a Tarefa e o Horário que você deseja executa-la!");
    } else {
        cloneTasks(result, resultTime);
    };
});

function scrollTask() {
    window.addEventListener('scroll', ()=> {
        if(window.scrollY > 0) {
            c('.subtitle').style.backgroundColor = "bisque";
        } else {
            c('.subtitle').style.backgroundColor = "transparent";
        }
    })
}
scrollTask();

function cloneTasks(result, resultTime) {
    let clone = c('section.task').cloneNode(true);

    clone.querySelector('div.yourTask h3').append(`Às ${resultTime}: ${result}`);

    c('main div.list').appendChild(clone);
};
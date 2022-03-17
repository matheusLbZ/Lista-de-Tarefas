let c = (s)=>document.querySelector(s);
let l = (e)=> document.createElement(e);

const form = document.forms.list;

form.addEventListener('submit', e => {
    e.preventDefault();

    const { add, time } = form;
    let result = add.value;
    let resultTime = time.value;

    if(!result ||!resultTime) {
        return alert("Por Favor, ensira o horário e a tarefa");
    } else {
        let pomodoro = createPomodoro();
        let task = createTask(result, resultTime);
        let buttons = createButtons();
        let section = createSection(pomodoro, task, buttons);
        
        removeTask(section);
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

function createSection (pomodoro, task, buttons) {
    let section = l('section');

    c('.list').append(section);
    section.setAttribute('class', 'task');
    section.append(pomodoro, task, buttons);
}

function createPomodoro () {
    let pomodoro = l('div');
    let p = l('p');
    let span = l('span');

    pomodoro.setAttribute('class', 'pomodoro');
    pomodoro.append(p, span);

    p.append('POMODORO:');
    span.append('00:00:00');

    return pomodoro;
}

function createTask (result, resultTime) {
    let task = l('div');
    let h3 = l('h3');

    task.setAttribute('class', 'yourTask');
    task.appendChild(h3);
    h3.append(`Às ${resultTime}: ${result}`);

    return task;
};

function createButtons() {
    let buttons = l('div');
    let pomodoro = l('button');
    let remove = l('button');

    buttons.setAttribute('class', 'buttons');
    pomodoro.setAttribute('id', 'pomodoro');
    remove.setAttribute('id', 'remove');

    buttons.append(pomodoro, remove);
    pomodoro.append('Iniciar Pomodoro');
    remove.append('Apagar');

    return buttons;
}

function removeTask(section) {
    let remove = c('#remove');

    remove.addEventListener('click', e=> {
        e.preventDefault();
        console.log(remove)
        
        section.removeChild(section)
    });
};


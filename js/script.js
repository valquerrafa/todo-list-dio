const input = document.getElementById('input');
input.value = '';
const submit = document.getElementById('submit');
const list = document.getElementById('list');

submit.addEventListener('click', () => {
    try {
        document.getElementById('invalid-input').remove();
    } catch (error){}
    
    let task = input.value;
    input.value = '';
    
    if (task !== '') {
        const taskList = document.getElementsByClassName('task');

        if (taskList.length == 0) {
            list.innerHTML += `<input class="task" type="checkbox">${task}</input><br>`;
        } else {
            let exist = false
            for (let i = 0; i < taskList.length; i++) {
                if (task === taskList[i].nextSibling.data) {
                    exist = true
                }
            }

            if (!exist) {
                list.innerHTML += `<input class="task" type="checkbox">${task}</input><br>`;
            } else {
                const divQuestion = `
                <div id="question">
                    <p>A tarefa já existe. Deseja adicioná-la novamente?</p>
                    <div id=buttons>
                        <button id="insert">Sim</button>
                        <button id="no-insert">Não</button>
                    </div>
                </div>`;
                const body = document.getElementsByTagName('body')[0];

                body.insertAdjacentHTML('beforeend', divQuestion);

                const question = document.getElementById('question');
                const insertButton = document.getElementById('insert');
                const noInsertButton = document.getElementById('no-insert');
                
                insertButton.addEventListener('click', () => {
                    question.remove();
                    list.innerHTML += `<input class="task" type="checkbox">${task}</input><br>`;
                });
                noInsertButton.addEventListener('click', () => {
                   question.remove();
                });
            }
        }
    } else {
        const invalidInput = '<p id="invalid-input">A tarefa não pode ser um espaço em branco.</p>';
        const body = document.getElementsByTagName('body')[0];

        body.insertAdjacentHTML('beforeend', invalidInput);
    }
});
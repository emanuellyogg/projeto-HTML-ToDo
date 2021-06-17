let data = [{ //criando uma Array de json (objetos)
  id: 1,
  title: "Levantar as 07:00 horas"
}, {
  id: 2,
  title: "café da manhã saudável"
}, {
  id: 3,
  title: "treinar 15 min"
}, {
  id: 4,
  title: "Estudar"
}, {
  id: 5,
  title: "Organizar a casa"
}];

function renderTodo() {

  document.querySelector('.todo').innerHTML = ''; // limpar o campo depois de add nova tarefa 

  data.forEach(task => { //data. é a Array. FOREACH passa em cada elemento da Array e vai executando cada item da lista

    let li = document.createElement('li');

    // label foi adicionado para clicar no title e fazer o checkbox
    li.innerHTML = `
      <input type="checkbox" id="task-${task.id}">
      <label for="task-${task.id}">${task.title}</label> 
      <button type="button">x</button>
    `;

    //evento para quando o item for marcado, ele ficará riscado da lista
    li.querySelector('input').addEventListener("change", e => {

      //SE o checkbox for selecionado, adicionar a class riscar da lista. SE NÃO, remover a class riscar da lista
      if (e.target.checked) {
        li.classList.add('complete');
      } else {
        li.classList.remove('complete');
      }

    });

    //no meu li procurar um botão que tem ai dentro e add um evento click nele
    li.querySelector('button').addEventListener('click', e => {

      //meu botão excluir a tarefa, parametros para encontrar o tarefa que deve ser excluída.
      let button = e.target;
      let li = button.parentNode;
      let input = li.querySelector('input');
      let id = input.id;
      let idArray = id.split('-');
      let todoId = idArray[1];
      let title = li.querySelector('label').innerText;

      //SE clicar em excluir, FAÇA a exclusão da tarefa
      if (confirm(`Deseja realmente excluir a tarefa "${title}"?`)) {

        data = data.filter(task => task.id !== parseInt(todoId));

        renderTodo();

      };

    });

    document.querySelector('.todo').append(li);

  });
}

document.querySelector('#new-task').addEventListener('keyup', e => { //escutar o evento keyup "enter" para add nova tarefa

  if (e.key === 'Enter') { //SE acontecer o evento key Enter, FAÇA tal coisa

    data.push({ // enviar os dados para add nova tarefa
      id: data.length + 1,
      title: e.target.value
    });

    e.target.value = ""; //depois de enviar os dados, limpar o campo.

    renderTodo();

  }

});

renderTodo();
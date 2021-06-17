function calculaTabuada() { //declaração de uma função: função de calcular a tabuada

  let tabuada = document.querySelector("#tabuada tbody");
  let valorA = parseInt(document.querySelector("#valorA").value); //função parseInt para transformar em número 

  tabuada.innerHTML = ''; //limpar o conteudo da tabela antes de passar pelo FOR

  for (let valorB = 0; valorB <= 10; valorB++) { //dentro do FOR posso declarar as minhas variáveis e as condições

    let resultado = valorA * valorB;

    let template = `
      <td>${valorA}</td>
      <td>x</td>
      <td>${valorB}</td>
      <td>=</td>
      <td>${resultado}</td>
    `;

    let tr = document.createElement('tr'); //comando para criar uma linha

    tr.innerHTML = template; //propriedade para visualizar string

    tabuada.append(tr); //propriedade para adicionar no final a variável tr

  }

}

calculaTabuada(); //chamar a função calcular a tabuada

document.querySelector("#valorA").addEventListener('change', calculaTabuada); //evento "ouvinte" para receber o valor do input e passar na função calculaTabuada. Evento "change" pois o valor poderá ser alterado.
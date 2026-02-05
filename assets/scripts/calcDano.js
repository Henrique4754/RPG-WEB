const guerreirosEmBatalha = ["."];
let targetIndex = 0; //ajuda a identificar o index do array, e atribui um "id" para cada objeto.

document.getElementById("submit").addEventListener("click", function () {
  const guerreiro = {
    nome: "",
    pontosVida: 0,
    danoRecebido: 0,
    vidaRestante: 0,
  };
  const guerreiroNome = document.getElementById("nome").value; //Acesa o input de entrada de nome
  guerreiro.nome = guerreiroNome; //Atribui o input nome a propriedade nome dentro do objeto "guerreiro"

  const pontosVida = document.getElementById("total-life").value; //Acessa o input de entrada da quantidade de vida do personagem
  guerreiro.pontosVida = pontosVida;//Atribui o input total-life a propriedade pontosVida dentro do objeto "guerreiro"

  const battleBoard = document.getElementById("battle-board"); //Acessa a div battle-board dentro do arquivo html

  if (guerreiroNome == "" || pontosVida == "") { //Verifica os dois inputs de entrada (nome e total-life) se ambos estão vazios ou se um dos dois está vazio. e emite um window.alert
    window.alert(
      "Você precisa preencher os campos:" +
        "\n" +
        "Nome do Guerreiro e Pontos de Vida",
    );
  } else { //Se os dois inputs citados acima estiverem preenchidos corretamente, os códigos abaixo são executados.
    const selection = document.getElementById("target"); //Acessa o input select dentro do html
    const newTarget = document.createElement("option"); //Cria um elemento "option" dentro da variavel newTarger
    targetIndex = targetIndex + 1; //Quando ativado, soma +1 a si proprio fazendo o contador andar de acordo com a quantidade de Objetos Guerreiro criadas dentro do arrat guerreirosEmBatalha
    newTarget.value = targetIndex; //Anexa o valor atual de targetIndex no value da option criada dentro do input select
    newTarget.textContent = guerreiroNome; //Anexa o nome atual do guerreiro dentro como nome da option dentro do input select
    selection.appendChild(newTarget); //Coloca o elemento option dentro do input select

    guerreirosEmBatalha.push(guerreiro); //Anexa o objeto novo dentro do array guerreirosEmBatalha

    const card = document.createElement("div"); //cria uma div dentro da variavel card
    card.className = "char-card"; //Coloca uma class="" para a div acima
    card.id = targetIndex; //Cria um id="" para a mesma div, fazendo com que cada dic se torne unica para cada index de guerreiro
    card.innerHTML = `
    <p>Guerreiro: <span>${guerreirosEmBatalha[targetIndex].nome}</span></p>
    <p>Vida Total: <span id="vida-total-${targetIndex}">${guerreirosEmBatalha[targetIndex].pontosVida}</span></p>
    <p>Vida Perdida: <span id="vida-perdida-${targetIndex}">${guerreirosEmBatalha[targetIndex].danoRecebido}</span></p>
    <p>Vida Restante: <span id="vida-restante-${targetIndex}">${guerreirosEmBatalha[targetIndex].vidaRestante}</span></p>
    `;//Escreve as informações calculadas e colhidas dentro dos elementos no HTML
    battleBoard.appendChild(card); //Coloca tudo dentro da variavel card dentro do da div battle-board, declarada acima na linha 17
    //Abaixo zeramos os dois inputs de entrada, preparando ambos para inserir novos dados
    document.getElementById("nome").value = "";
    document.getElementById("total-life").value = "";

    console.log(guerreiro, guerreirosEmBatalha, targetIndex);
  }
});

function teste() {
  const target = parseInt(document.getElementById("target").value);
  const damage = parseInt(document.getElementById("damage-taken").value);

  let nomeObjProp = guerreirosEmBatalha[target].nome;
  let vidaTotalObjProp = parseInt(guerreirosEmBatalha[target].pontosVida);
  let danoRecebidoObjProp = parseInt(guerreirosEmBatalha[target].danoRecebido);
  let vidaRestanteObjProp = parseInt(guerreirosEmBatalha[target].vidaRestante);
  danoRecebidoObjProp = danoRecebidoObjProp + damage;
  vidaRestanteObjProp = vidaTotalObjProp - danoRecebidoObjProp;

  const vidaPerdida = (document.getElementById(
    "vida-perdida-" + target,
  ).innerText = danoRecebidoObjProp);
  const vidaRestante = (document.getElementById(
    "vida-restante-" + target,
  ).innerText = vidaRestanteObjProp);

  document.getElementById("target").value = "";
  document.getElementById("damage-taken").value = "";
  console.log({
    nomeObjProp,
    vidaTotalObjProp,
    danoRecebidoObjProp,
    vidaRestanteObjProp,
  });

  console.log({ damage, target, vidaPerdida, vidaRestante });
}

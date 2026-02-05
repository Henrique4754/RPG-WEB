const guerreirosEmBatalha = ["."];
let targetIndex = 0; //ajuda a identificar o index do array

document.getElementById("submit").addEventListener("click", function () {
  const guerreiro = {
    nome: "",
    pontosVida: 0,
    danoRecebido: 0,
    vidaRestante: 0,
  };
  const guerreiroNome = document.getElementById("nome").value;
  guerreiro.nome = guerreiroNome;
  
  const pontosVida = document.getElementById("total-life").value;
  guerreiro.pontosVida = pontosVida;
  
  const battleBoard = document.getElementById("battle-board");
  if (guerreiroNome == "" || pontosVida == "") {
    window.alert(
      "Você precisa preencher os campos:" +
      "\n" +
      "Nome do Guerreiro e Pontos de Vida",
    );
  } else {
    const selection = document.getElementById("target");
    const newTarget = document.createElement("option");
    targetIndex = targetIndex + 1;
    newTarget.value = targetIndex;
    newTarget.textContent = guerreiroNome;
    selection.appendChild(newTarget);
    
    guerreirosEmBatalha.push(guerreiro);
    
    const card = document.createElement("div");
    card.className = "char-card";
    card.id = targetIndex;
    card.innerHTML = `
    <p>Guerreiro: <span>${guerreirosEmBatalha[targetIndex].nome}</span></p>
    <p>Vida Total: <span id="vida-total-${targetIndex}">${guerreirosEmBatalha[targetIndex].pontosVida}</span></p>
    <p>Vida Perdida: <span id="vida-perdida-${targetIndex}">${guerreirosEmBatalha[targetIndex].danoRecebido}</span></p>
    <p>Vida Restante: <span id="vida-restante-${targetIndex}">${guerreirosEmBatalha[targetIndex].vidaRestante}</span></p>
    
    `;
    battleBoard.appendChild(card);
    document.getElementById("nome").value = "";
    document.getElementById("total-life").value = "";
    
    console.log(guerreiro, guerreirosEmBatalha, targetIndex);
  }
});

function teste(){
  let target = parseInt(document.getElementById('target').value)
  let damage = parseInt(document.getElementById('damage-taken').value)

  let nomeObjProp = guerreirosEmBatalha[target].nome
  let vidaTotalObjProp = parseInt(guerreirosEmBatalha[target].pontosVida)
  let danoRecebidoObjProp = parseInt(guerreirosEmBatalha[target].danoRecebido)
  let vidaRestanteObjProp = parseInt(guerreirosEmBatalha[target].vidaRestante)
  danoRecebidoObjProp = danoRecebidoObjProp + damage
  vidaRestanteObjProp = vidaTotalObjProp - danoRecebidoObjProp

  const vidaPerdida = document.getElementById('vida-perdida-'+ target).innerText = (danoRecebidoObjProp)
  const vidaRestante = document.getElementById('vida-restante-' + target).innerText = (vidaRestanteObjProp)

  console.log({nomeObjProp, vidaTotalObjProp, danoRecebidoObjProp,vidaRestanteObjProp})

  console.log({damage, target, vidaPerdida, vidaRestante}) 
}
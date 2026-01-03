// Calculadora de pericias:
function pericia() {
  const classSelection = document.getElementById("classe");
  const valorClasse = parseInt(classSelection.value);

  const levelSelection = document.getElementById("nivel");
  const valorNivel = parseInt(levelSelection.value);

  const intMod = document.getElementById("intMod");
  const valorIntMod = parseInt(intMod.value);

  const valorPrimNivel = parseFloat((valorClasse + valorIntMod) * 4);
  const valorNivelSub = parseFloat((valorClasse + valorIntMod) * valorNivel);

  const totalPoints = valorPrimNivel + valorNivelSub;

  document.getElementById("primeironivel").textContent = valorPrimNivel;
  document.getElementById("subsequentes").textContent = valorNivelSub;
  document.getElementById("totalpontos").textContent = totalPoints;

  if (valorClasse === " ") {
    alert("Por favor selecione uma classe!");
    return;
  }
  console.log(
    valorClasse,
    valorNivel,
    valorIntMod,
    valorPrimNivel,
    valorNivelSub
  );
}
// Função de realizar o envio do valor preenchido ao apertar enter.
document
  .getElementById("valorDado")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // Impede o comportamento padrão (como submissão de formulário)
      event.preventDefault();
      // Simula o clique no botão
      document.getElementById("calcularBtnAtbr").click();
    }
  });

document
  .getElementById("calcularBtnAtbr")
  .addEventListener("click", function () {
    const diceValueInput = document.getElementById("valorDado");
    const diceValue = parseInt(diceValueInput.value);
    const totalPointsBruto = (diceValue - 10) / 2;
    const totalPointsLimpo = Math.floor(totalPointsBruto);
    const atbrList = document.getElementById("ultimosValoresList");

    // função para armazenar os valores inseridos no input dentro da <ul>
    function listaAtbr() {
      const quantidadeLi = document.getElementById("ultimosValoresList").querySelectorAll("li").length;
      let novoItem = document.createElement("li");
      if (quantidadeLi >= 6) {
        alert("Você atingiu o número máximo de atributos!");
      } else {
        if (diceValue <= 11) {
          novoItem.textContent = "1";
        } else {
          novoItem.textContent = totalPointsLimpo;
        }
        atbrList.appendChild(novoItem);
      }
    }

    // Conserta o bug de zerar os modificadores, antes com a fórmula de cálculo tirada do livro do jogador, os inputs abaixo de 11 estavam retornando valor zero, quando de acordo com as regras deveria ser 1.
    if (diceValue <= 11) {
      document.getElementById("atributoFinal").textContent = "1";
      listaAtbr();
    } else {
      document.getElementById("atributoFinal").textContent = totalPointsLimpo;
      listaAtbr();
    }
    document.getElementById("valorDado").value = "";
  });

function limparHistorico() {
  document.getElementById("ultimosValoresList").innerHTML = "";
  document.getElementById("atributoFinal").innerHTML = 0;
}

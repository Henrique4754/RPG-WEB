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

    if (diceValue <= 11) {
      document.getElementById("atributoFinal").textContent = "1"
    } else {
      document.getElementById("atributoFinal").textContent = totalPointsLimpo;
    }
    document.getElementById('valorDado').textContent= ""
  });

const numVirg = 23.5;

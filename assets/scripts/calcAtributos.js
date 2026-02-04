document
  .getElementById("calcularBtnAtbr")
  .addEventListener("click", function () {
    const diceValueInput = document.getElementById("valorDado"); //Acessa e pega o valor de texto que o usuário coloca no text-input
    const diceValue = parseInt(diceValueInput.value); //Converte o valor colocado para um valor numeral
    const totalPointsBruto = (diceValue - 10) / 2; //Váriavel que armazena o resuldado do uso da formula de cálculo retirada do livro, Valor do input menos 10 dividido para 2
    const totalPointsLimpo = Math.floor(totalPointsBruto); //de acordo com as regras do livro, quando temos um número com virgula devemos arredondar para baixo. Essa váriavel pega o valor resultante da formula e faz o arredondamento
    const atbrList = document.getElementById("ultimosValoresList"); //Acessa a lista de valores que irá armazenar até 6 valores resultantes do uso da formula de cálculo.
    const rolagemList = document.getElementById("ultimasRolagensList"); //Acessa a lista de valores que irá armazenar o valor que o usuário coloca no text-input.
    // função para armazenar os valores inseridos no input dentro da <ul> e limitar a leitura se ja existirem até 6 valores armazenados.
    function listaAtbr() {
      const quantidadeLi = document
        .getElementById("ultimosValoresList")
        .querySelectorAll("li").length;

      let novoItem = document.createElement("li");
      let novaRolagem = document.createElement("li");

      if (quantidadeLi >= 6) {
        alert("Você atingiu o número máximo de atributos!");
      } else {
        if (diceValue <= 11) {
          novoItem.textContent = "1";
          novaRolagem.textContent = "1";
        } else {
          novoItem.textContent = totalPointsLimpo;
          novaRolagem.textContent = diceValue;
        }
        atbrList.appendChild(novoItem);
        rolagemList.appendChild(novaRolagem);
      }
    }

    // Conserta o bug de zerar os modificadores, antes com a fórmula de cálculo tirada do livro do jogador, os inputs abaixo de 11 estavam retornando valor zero, quando de acordo com as regras deveria ser 1.
    let inputVerification = document.getElementById("valorDado").value
    if (inputVerification === "") {
      window.alert("Você precisa inserir um valor!");
    } else {
      if (diceValue <= 11) {
        document.getElementById("atributoFinal").textContent = "1";
        listaAtbr();
      } else {
        document.getElementById("atributoFinal").textContent = totalPointsLimpo;
        listaAtbr();
      }
    }

    document.getElementById("valorDado").value = "";
  });

function limparHistorico() {
  document.getElementById("ultimosValoresList").innerHTML = "";
  document.getElementById("ultimasRolagensList").innerHTML = "";
  document.getElementById("atributoFinal").innerHTML = 0;
}
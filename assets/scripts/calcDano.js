document.getElementById("submit").addEventListener("click", function () {
  let nomeGuerreiro = document.getElementById("nome").value;
  let vidaTotalGuerreiro = document.getElementById("total-life").value;
  document.getElementById("total-life").value = "";
  document.getElementById("nome").value = "";


    const selection = document.getElementById('target')
    const newTarget = document.createElement('option')

    newTarget.value = ""
    newTarget.textContent = nomeGuerreiro

    selection.appendChild(newTarget)



});

function pericia() {
  const classSelection = document.getElementById("classe");
  const valorClasse = parseInt(classSelection.value);

  const levelSelection = document.getElementById("nivel");
  const valorNivel = parseInt(levelSelection.value);

  const intMod = document.getElementById("intMod");
  const valorIntMod = parseInt(intMod.value);

  const valorPrimNivel = parseFloat((valorClasse + valorIntMod) * 4)
  const valorNivelSub = parseFloat((valorClasse + valorIntMod) * valorNivel)

  if (valorClasse === " ") {
    alert("Por favor selecione uma classe!");
    return;
  }
  console.log(valorClasse, valorNivel, valorIntMod, valorPrimNivel, valorNivelSub);
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    // Alterna a classe 'ativo' no menu (abre/fecha)
    navMenu.classList.toggle("ativo");
    
    // Opcional: Alterna uma classe no próprio botão para fazer animação de X
    hamburger.classList.toggle("active"); 
});
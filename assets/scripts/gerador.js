import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

// 1. Configuração da API (Substitui pela tua chave real)
const API_KEY = "AIzaSyBwQDC6NRzQStstFDoSe2nTZVXNi9mRT-A";
const genAI = new GoogleGenerativeAI(API_KEY);

async function gerarImagem() {
    const promptInput = document.getElementById('promptInput');
    const container = document.getElementById('resultado');
    const loader = document.getElementById('loader');
    const btnTexto = document.querySelector('#btnGerar span');

    // Validação básica
    if (!promptInput.value.trim()) {
        alert("Escreve uma descrição primeiro!");
        return;
    }

    // 2. Iniciar Estado de Carregamento
    loader.style.display = "block";
    btnTexto.style.opacity = "0.5";
    container.innerHTML = '<div class="placeholder-text">A IA está a criar a tua obra...</div>';

    try {
        // 3. Conexão com o Modelo Gemini
        // Nota: Para geração de imagem direta, usa-se o modelo que suporta Imagen
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const promptFinal = `Age como um gerador de imagens. Cria uma imagem detalhada de: ${promptInput.value}`;
        
        const result = await model.generateContent(promptFinal);
        const response = await result.response;
        const output = response.text();

        // 4. Exibição do Resultado
        // Como o Gemini Texto pode retornar um link ou descrição:
        if (output.includes("http")) {
            container.innerHTML = `<img src="${output}" alt="Imagem Gerada">`;
        } else {
            // Caso ele retorne apenas texto (em modelos que não suportam saída direta de imagem)
            container.innerHTML = `
                <div style="padding: 20px;">
                    <p>O Gemini gerou uma descrição detalhada:</p>
                    <small>${output}</small>
                </div>`;
        }

    } catch (error) {
        console.error("Erro:", error);
        container.innerHTML = '<div class="placeholder-text" style="color: #ff4d4d;">Erro ao gerar imagem. Verifica a tua chave API ou conexão.</div>';
    } finally {
        // 5. Finalizar Estado de Carregamento
        loader.style.display = "none";
        btnTexto.style.opacity = "1";
    }
}

// Tornar a função disponível para o HTML (devido ao type="module")
window.gerarImagem = gerarImagem;
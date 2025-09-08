// Dados dos produtos - você pode adicionar mais aqui!
const products = [
    {
        name: "Coleção Treinador Avançado de Escarlate e Violeta – Rivais Predestinados",
        description: "do Pokémon Estampas Ilustradas",
        image: "caminho/para/imagem1.jpg" // Substitua pelo caminho real
    },
    {
        name: "Coleção Desafio Estratégico de Escarlate e Violeta – Rivais Predestinados",
        description: "do Pokémon Estampas Ilustradas",
        image: "caminho/para/imagem2.jpg"
    },
    {
        name: "Combo de pacotes de booster de Escarlate e Violeta – Rivais Predestinados",
        description: "do Pokémon Estampas Ilustradas",
        image: "caminho/para/imagem3.jpg"
    },
    {
        name: "Pacote de Booster de Escarlate e Violeta – Rivais Predestinados",
        description: "do Pokémon Estampas Ilustradas",
        image: "caminho/para/imagem4.jpg"
    }
];

// Pega o elemento onde os produtos serão inseridos
const productsContainer = document.getElementById('products-container');

// Gera o HTML para cada produto e o insere na página
function renderProducts() {
    let productsHTML = ''; // Variável para armazenar o HTML de todos os produtos

    products.forEach(product => {
        // Usa `template literals` (crase) para criar o HTML de forma fácil
        const productCard = `
            <div class="product-card">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </div>
                <div class="product-details">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <a href="#" class="btn-find-seller">ENCONTRAR UM REVENDEDOR</a>
                </div>
            </div>
        `;
        productsHTML += productCard; // Adiciona o HTML do produto à variável
    });

    productsContainer.innerHTML = productsHTML; // Insere todo o HTML de uma vez
}

// Chama a função para renderizar os produtos quando a página carregar
document.addEventListener('DOMContentLoaded', renderProducts);

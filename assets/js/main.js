document.addEventListener('DOMContentLoaded', () => {
    // Menu Hamburguer
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link (para mobile)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Botões "Adicionar ao Carrinho"
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = event.target.dataset.productId;
            alert(`Produto ${productId} adicionado ao carrinho! (Funcionalidade completa de carrinho precisaria de backend)`);
            // Aqui você integraria com uma lógica de carrinho de verdade,
            // como adicionar um item a um array, atualizar um contador, etc.
        });
    });

    // Animação de Scroll Suave para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

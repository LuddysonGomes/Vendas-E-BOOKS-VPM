// Lista de produtos com links e imagens
const products = [
    { 
        name: "Como Parar De Ter Vicio Em Nicotina", 
        link: "https://https://pay.cakto.com.br/zaxgsph_288135www.example.com/cadeira-gamer", 
        image: "https://goread.abril.com.br/wp-content/uploads/2023/11/Veja-1029-1988-05-25-low-1.jpg" 
    },
    { 
        name: "Como parar de ter ansiedade", 
        link: "https://pay.cakto.com.br/pfuya7y_287894", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpuaOa7tJkHgfFXy_ijC7B4R1S_FPv30Zpg&s" 
    },
    { 
        name: "Curso para iniciantes no Marketing Digital", 
        link: "https://pay.cakto.com.br/ext9sxu_287931", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMAMum4nyIqlK0WKpSHjVgQA7ChILEEMDMw&s" 
    },
    { 
        name: "Como Esmagrecer em Casa com Exercicios e Dieta", 
        link: "https://pay.cakto.com.br/iz94zsk_287832", 
        image: "https://zsfonseca.com/wp-content/uploads/2024/06/4-2-1024x1024.png" 
    },
    { 
        name: "Desenvolvimento Pessoal", 
        link: "https://pay.cakto.com.br/7fguvk2_287885", 
        image: "https://nicandrocampos.com.br/wp-content/uploads/2023/08/Imagem-Destacada-blog-27.jpg.webp" 
    },
    { 
        name: "Segredos da Mente Milionária", 
        link: "https://pay.cakto.com.br/x7zcphk_288264", 
        image: "https://m.media-amazon.com/images/I/81UoxawH+nL._AC_UF1000,1000_QL80_.jpg" 
    },
];

// Função para renderizar os links de produtos na página
function displayProducts() {
    const productList = document.getElementById('product-list');
    
    // Limpar a lista de produtos, caso haja algum item na página
    productList.innerHTML = '';

    products.forEach((product, index) => {
        const li = document.createElement('li');
        
        // Adiciona animação de AOS
        li.setAttribute('data-aos', 'fade-up');
        li.setAttribute('data-aos-delay', `${index * 100}`); // Atraso para dar um efeito mais fluido

        const link = document.createElement('a');
        link.href = product.link;
        link.target = "_blank";

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const name = document.createElement('span');
        name.textContent = product.name;

        link.appendChild(img);
        link.appendChild(name);
        li.appendChild(link);
        productList.appendChild(li);
    });
}

// Chama a função para exibir os produtos
displayProducts();

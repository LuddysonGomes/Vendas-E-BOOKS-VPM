// Lista de links de produtos que só você pode editar diretamente
const products = [
    { name: "Curso para iniciantes no Marketing Digital", link: "https://pay.cakto.com.br/ext9sxu_287931" },
    { name: "Desenvolvimento Pessoal", link: "https://pay.cakto.com.br/7fguvk2_287885" },
    { name: "Como Esmagrecer Em Casa Com Exercicios e Dieta", link: "https://pay.cakto.com.br/iz94zsk_287832" },
{name: "Como parar de ter ansiedade", link: "https://pay.cakto.com.br/pfuya7y_287894" },
{name: "Como Parar De Ter Vicio Em Nicotina", link: "https://pay.cakto.com.br/zaxgsph_288135"},
{name: "Como diminuir o uso de cigarros", link: "https://pay.cakto.com.br/3ch5eoq_288145"},
];

// Função para renderizar os links na página
function displayProducts() {
    const productList = document.getElementById('product-list');
    
    // Limpar a lista de produtos, caso haja algum item na página
    productList.innerHTML = '';

    // Adicionar os links na lista
    products.forEach(product => {
        const li = document.createElement('li');

        const link = document.createElement('a');
        link.href = product.link;
        link.target = "_blank";
        link.textContent = product.name;

        li.appendChild(link);
        productList.appendChild(li);
    });
}

// Chamar a função para exibir os produtos
displayProducts();

// 1. "Save the data" - Vamos mover os dados em html e salvar em javascript

// Primeiro uma variável para salvar os dados, em seguida vamos criar algo que corresponda aos nossos dados. Neste caso, temos uma lista de produtos, portanto vamos criar um array porque um array representa uma lista. Os produtos da lista tem muitos valores, como imagem, nome e preço, então usaremos um objeto para representar cada produto, porque um objeto nos permite agrupar vários valores.

let products = [{
  image: 'imagens/products/athletic-cotton-socks-6-pairs.jpg" class="product-image',
  name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
  rating: {
    stars: 45,
    count: 87
  },
  // como JS tem problemas para fazer contas com números decimais ou flutuantes (como 10.90). portanto uma prática recomendada ao calcular o dinheiro é calcular em centavos em vez de dólares
  priceCents: 1090
}, /*em seguida o proximo produto*/ {
  image: 'imagens/products/intermediate-composite-basketball.jpg" class="product-image',
  name: 'Intermediate Size Basketball',
  rating: {
    stars: 40,
    count: 127
  },
  priceCents: 2095
}, {
  image: 'imagens/products/adults-plain-cotton-tshirt-2-pack-teal.jpg" class="product-image"',
  name: "Adults Plain Cotton T-Shirt - 2 Pack",
  rating: {
    stars: 45,
    count: 56
  },
  priceCents: 799,
}] 
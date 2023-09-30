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
}, /*segundo produto neste objeto*/ {
  image: 'imagens/products/intermediate-composite-basketball.jpg" class="product-image',
  name: 'Intermediate Size Basketball',
  rating: {
    stars: 40,
    count: 127
  },
  priceCents: 2095
}, {
  image: 'imagens/products/adults-plain-cotton-tshirt-2-pack-teal.jpg" class="product-image',
  name: 'Adults Plain Cotton T-Shirt - 2 Pack',
  rating: {
    stars: 45,
    count: 56
  },
  priceCents: 799
}]

// 2. "Generate the HTML" - Agora vamos usar esses dados para gerar o HTML, em vez de escrever o HTML manualmente

// Para gerá-lo, podemos criar um loop no array. Para cada um desses produtos (> dentro do objeto > dentro do array), vamos criar algum HTML

// A maneira como o forEach funciona é pegar cada objeto, salvá-lo nestre parâmetro (abaixo) chamado 'products' e, em seguida, executar a função. Então ele pega o primeiro objeto, salva-o no produto, executa a função, pega o segundo objeto... e assim por diante.

products.forEach((products) => {
  let html = `
    <div class="product-container">
        <div class="product-image-container">
          <img src="${products.image}">
        </div>

        <div class="product-name limit-to-2-lines">
          ${products.name}
        </div>

        <div class="product-rating-container">
          <img src="imagens/rating/rating-${products.rating.stars}.png" class="product-rating-stars">
          <div class="product-rating-count link-primary">
            ${products.rating.count}
          </div>
        </div>

        <div class="product-price"> $${products.priceCents / 100} </div>

        <div class="product-quantity-container">
          <select data-testid="quantity-selector" >
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>
        
        <div class="added-to-cart" data-testid="added-to-cart">
          <img src="imagens/icons/checkmark.png">
          " Added "
        </div>

        <button class="add-to-cart-button button-primary" data-testid="added-to-cart-button">
          Add to Cart
        </button>
      </div>
  `
  console.log(html)
})
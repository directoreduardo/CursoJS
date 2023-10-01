// 2. "Generate the HTML" - Agora vamos usar esses dados para gerar o HTML, em vez de escrever o HTML manualmente

// Para gerá-lo, podemos criar um loop no array. Para cada um desses produtos (> dentro do objeto > dentro do array), vamos criar algum HTML

// A maneira como o forEach funciona é pegar cada objeto, salvá-lo nestre parâmetro (abaixo) chamado 'products' e, em seguida, executar a função. Então ele pega o primeiro objeto, salva-o no produto, executa a função, pega o segundo objeto... e assim por diante.

let productsHTML = '' // - para combinar todo esse HTML utilizando o 'padrão acumulador' (vide: productsHTML += `...`).: Percorremos um array e cada vez que adicionamos ao resultado, estamos acumulando o resultado.
products.forEach((products) => {
  productsHTML += `
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

        <div class="product-price"> $${(products.priceCents / 100).toFixed(2)} </div>

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
})
console.log(productsHTML)

//-------------------------------

// Agora o último passo é pegar esse HTML e colocar na página, e podemos fazer isso usando o DOM.

document.querySelector('.js-products-grid').innerHTML = productsHTML
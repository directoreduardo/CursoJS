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

        <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${products.id}">
          Add to Cart
        </button>
      </div>
  `
})
//-------------------------------

// Agora o último passo é pegar esse HTML e colocar na página, e podemos fazer isso usando o DOM.

document.querySelector('.js-products-grid').innerHTML = productsHTML

document.querySelectorAll('.js-add-to-cart').forEach((button) => { //para cada um desses buttons, adicionaremos um ouvinte de eventos (neste caso, o evento de click + a função que queremos executar quando clicamos neste botão)
  button.addEventListener('click', () => {
    //aqui precisamos resover como adicionar este produto ao cart (carrinho). Para resolver isso¹

    //o "dataset" (propriedade de conjuto de dados) basicamente nos fornece todos os atributos de dados anexados a este botão. Para acessar o ID do produto, basta digitar (.productId). Portanto, observe que o nome é convertido de Kebab case (product-id) para caixa Camel case.
    //***Antes, há um problema que temos que resolver aqui: não é bom usar o nome (product-nome/productName) do produto para identificá-lo no cart, porque em um site de comércio eletrônico, podemos na verdade ter dois produtos com o mesmo nome, mas de marcas diferentes. Então para concertar isso, devemos dar um ID pra cada produto (que já está colocado), e esse ID deve ser único. Então iremos dar um ID para esses produtos, ao invés de usar o nome.
    let productId = button.dataset.productId


    // [2] Para o produto de camiseta não ser repetido duas vezes e cada um deles tendo a quantidade (quantity) de 1 fixado. O que realmente queremos fazer é um produto de camiseta com quantidade 2 (e assim por diante), porque é assim que vamos exibi-lo na página de cart (orders.html). Faremos isso passo a passo. PRIMEIRO: verificar se o produto já está no cart (carrinho). SEGUNDO: se estiver, aumentaremos apenas a quantidade de um. TERCEIRO: se não estiver, iremos adicioná-lo no cart.
    //(PRIMEIRO). O "item" conterá o 'produtcId' e o 'quantity'. Se encontrarmos o item correspondente, iremos salvá-lo nesta variável (matchingItem).
    let matchingItem
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item
      }
    })
    //(SEGUNDO). Caso o produto esteja no cart, vamos aumentar a quantidade de itens correpondentes um a um.
    if (matchingItem) {
      matchingItem.quantity += 1
    } else {//(TERCEIRO). Caso o produto não esteja no cart, iremaos adicioná-lo ao carrinho
      // [1] Vamos empurrar (push) um objeto porque queremos um produto e a quantidade
      cart.push({
        productId: productId,
        quantity: 1
      })
    }

    // [4] Agora iremos tornar interativo a quantidade do carrinho no canto superior direito. Faremos isso passo a passo. PRIMEIRO: precisamos calcular a quantidade ou o número total de peodutos em nosso cart (carrinho). SEGUNDO: vamos colocar essa quantidade aqui na página.

    // PRIMEIRO: vamos calcular a quantidade total. Então isso vai percorrer (loop) cada objeto no cart. Em seguinda, precisamos de uma variável para armazenar a quantidade total. Então, à medida que percorremos (loop) esse array, adicionaremos a quantidade (quantity) de itens a essa variável (cartQuantity)
    let cartQuantity = 0
    cart.forEach((item) => {
      cartQuantity += item.quantity //isso irá somar todas as quantiade e salvá-las nesta variável (cartQuantity)
    })

    // SEGUNDO: agora que temos a quantidade total, vamos colocar aqui na página (canto superior direito, no icone do carrinho) e podemos fazer isso usando o DOM. Para usar o DOM, primeiro precisamos de um elemento HTML (neste caso, 'js-cart-quantity') onde vamos colocar essa quantidade (cartQuantity).
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity //recebe cartQuantity que calculamos acima

    //*console.log como exemplos na prática em que é necessario a constante avaliação
    console.log(cartQuantity)
    console.log(cart)
  })
})

//------------------------------------------------------
// ¹ Data Attribute. Um atributo de dados é apenas outro atributo HTML, exceto que o objetivo de um atributo de dados é permitir anexar qualquer informação a um elemento HTML. Vide: 'data-product-id="${products.id}"'. Um atributo de dados é apenas um atributo HTML. Isso significa que segue as mesmas regras de sintaxe. Temos os nome do atributo à esquerda (data-product-id) e um valor de atributo à direita ("${products.id}"). A única diferença é que os atributos de dados devem começar com 'data-' e, então, podemos dar a eles qualquer nome que quisermos. Portanto, o propósito de um atributo de dados é que possamos anexar qualquer informação a um elemento (podemos anexar a imagem do produto ou o preço e assim por diante).
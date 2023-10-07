import {cart} from '../data/cart.js'
import { products } from '../data/products.js'



cart.forEach((cartItem) => {
  //Primeiro precisamos usar o projectId (localizado no cart.js) para pesquisar o produto e obter os demais detalhes como imagem, nome e preço (tudo isso via ID). Para isso, vamos primiro retirar o projectId do cartItem antes. Portanto, criaremos uma variável projectId.
  let productId = cartItem.productId // Agora precisamos usar isso para procurar o produto completo - que se localiza dentro do arquivo project.js. Para isso precisamos importar o array products dentro do arquivo products.js, como já foi feito na segunda linha. Portanto vamos criar uma variável para salvar o resultado.
  let matchingProduct
  products.forEach((product) => {
    // Para cada produto aqui, vamos verificar se a propriedade ID é igual ao nosso productId.
    if (product.id === productId) {
      // Se forem igual, signifca que encontramos o produto correspondente e vamoas salvá-o nesta variável (matchingProduct)
      matchingProduct = product
    }
  })
  console.log(matchingProduct)

  `
  <div class="cart-item-container">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img src="imagens/products/athletic-cotton-socks-6-pairs.jpg" class="product-image">
      <div class="cart-item-details">
        <div class="product-name">
          Black and Gray Athletic Cotton Socks - 6 Pairs
        </div>
        <div class="product-price">
          $10.90
        </div>
        <div class="product-quantity">
          Quantity: <span class="quantity-label">2</span>

          <input type="number" class="new-quantity-input" value="2" data-testid="new-quantity-input">

          <span class="update-quantity-link link-primary">Update</span>

          <span class="save-quantity-link link-primary" data-testid="save-quantity-link">Save</span>

          <span class="delete-quantity-link link-primary">Delete</span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked class="delivery-option-input">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>

        <div class="delivery-option">
          <input type="radio" class="delivery-option-input">
          <div>
            <div class="delivery-option-date">
            Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>

        <div class="delivery-option">
          <input type="radio" class="delivery-option-input">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              9.99 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})
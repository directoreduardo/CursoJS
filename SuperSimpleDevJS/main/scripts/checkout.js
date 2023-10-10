import {cart} from '../data/cart.js'
import {products} from '../data/products.js'
import { formatCurrency } from './utils/money.js'


// Para combinar todo o HTML juntos, vamos criar uma cariável aqui para armazenar o resultado
let cartSummaryHTML = '' // e agora, cada vez que percorrermos (loop) o cart, adicionaremos o HTML (``) aqui para combiná-lo
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

  // Abaixo, por exemplo, em vez de gerar sempre a mesma imagem, vamos usar a imagem no matchingProduct.
  cartSummaryHTML += `
    <div class="cart-item-container">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
      </div>

      <div class="cart-item-details-grid">
        <img src="${matchingProduct.image}" class="product-image">
        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            Quantity: <span class="quantity-label">${cartItem.quantity}</span>

            <input type="number" class="new-quantity-input" value="2" data-testid="new-quantity-input">

            <span class="update-quantity-link link-primary">Update</span>

            <span class="save-quantity-link link-primary" data-testid="save-quantity-link">Save</span>

            <span class="delete-quantity-link link-primary js-delete-link">Delete</span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input type="radio" checked class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
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
            <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
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
            <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
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

// Agora vamos usar o DOM e colocar o elemento 'order-summary' em nosso javascript
document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML // e agora se salvarmos, estamos basicamente gerando todo esse HTML com javascript (acima) e depois colocando na página. Podendo agora remover os códigos 'cart-item-container' que se localizava no HTML e tudo ainda funcionará porque agora está sendo gerado por javascript
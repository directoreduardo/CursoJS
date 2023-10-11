// 3. Precisamo descobrir como adicionar o/um produto ao cart (carrinho). Um cart é basicamente apenas uma lista. E dentro desta lista temos o produto que queremos comprar e a quantidade de numero ou a quantidade desse produto que queremos comprar.

export let cart = JSON.parse(localStorage.getItem('cart')) // Aqui, precisamos pegar o cart do localStorage (vide [SAVE]) em vez de usar um valor padrão. getItem leva uma string e esse é o nome que salvamos no localStorage: que é cart. No entanto, localStorage só pode salvar string. Portanto, isso nos dará uma versão string do nosso cart e precisamos convertê-lo novamente em um array. Para convertê-lo, usamos o código JSON.parse() 

// A ultima coisa que precisamos fazer é quando usarmos o site pela primeira vez, talvez não tenhamos o cart no localStorage. Portanto, se não tivermos um cart salvo, o localStorage nos dará nulo (null). Nesta situação, se esse valor for null, queremos dar ao cart um valor padrão, que é o valor abaixo.
if (!cart) {
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  }]
}

// [SAVE] Proxima coisa que faremos é adicionar localStorage (armazenamento local) em nosso cart, pois, se excluirmos alguns produtos do nosso cart e depois atualizarmos, o cart volta a ser o que era antes. Isso porque nosso cart é apenas uma variável e as variáveis são redefinidas quando atualizamos a página ou quando vamos para uma página diferente. Esse é problema de ser apenas uma variável para salvar nosso cart. Então, primeiro, vamos criar uma função para salvar o cart no localStorage, pois podemos querer reutilizar esse código
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart)) //setItem leva duas strings, a primeira string é o nome de tudo o que queremos salvar (neste caso, o cart), e a segunda string são os dados que queremos salvar. Lembre-se que o localStorage só pode salvar string, portanto, para salvar nosso cart, precisamos primeiro convertê-lo em uma string (usando JSON.stringify())
}

export function addToCart(productId) {
  // [2] Para o produto de camiseta não ser repetido duas vezes e cada um deles tendo a quantidade (quantity) de 1 fixado. O que realmente queremos fazer é um produto de camiseta com quantidade 2 (e assim por diante), porque é assim que vamos exibi-lo na página de cart (orders.html). Faremos isso passo a passo. PRIMEIRO: verificar se o produto já está no cart (carrinho). SEGUNDO: se estiver, aumentaremos apenas a quantidade de um. TERCEIRO: se não estiver, iremos adicioná-lo no cart.
  //(PRIMEIRO). O "cartItem" conterá o 'produtcId' e o 'quantity'. Se encontrarmos o item correspondente, iremos salvá-lo nesta variável (matchingItem).
  let matchingItem
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem
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
   // [SAVE] Sempre que atualizamos o cart, precisamos salvar no localStorage para que não seja redefinido quando atualizarmos a página.
   saveToStorage()
}

// Esta função pegará o productId que temos e removerá do cart
export function removeFromCart(productId) {
  // Maneiras que podemos fazer isso. Primeiro podemos criar um novo array e, em seguida, podemos percorrer (loop) nosso cart e adicionar cada produto ao novo array, exceto este productId.
  //PRIMEIRO: vamos criar um novo array.
  let newCart = []
  //SEGUNDO: percorrer (loop) nosso cart.
  cart.forEach((cartItem) => {
    //TERCEIRO: adicionar cada cartItem ao novo array, exceto se ele tiver esse productId.
    if (cartItem.productId !== productId) {
      // Se não for igual ao productId que estamos tentando retirar, vamos adicioná-lo ao novo cart.
      newCart.push(cartItem) //portanto o resultado desse loop é que ele conterá todos os cartItem que não correspondem a esse productId (acima). E isso é a mesma coisa que remover esse (productId) do cart.
    }
  }) 
  // Agora, o ultimo passo é pegar nosso newCart e recolocar o cart lá acima (export let cart = [{}]).
  cart = newCart 

  // [SAVE] Sempre que atualizamos o cart, precisamos salvar no localStorage para que não seja redefinido quando atualizarmos a página.
  saveToStorage()
}


//-------------------------------------------
// Explicação do 'export' + o type="module" + o import::
//*******************************************
//*Módulos. Um módulo contém basicamente uma variável dentro de um arquivo, então essa variável não causará conflitos com nada fora do arquivo. Por exemplo, em nosso projeto criamos uma variável chamada cart e querermos conter essa variável dentro do arquivo js do cart para que não entre em conflito com a variável cart dentro do arquivo js da amazon (pois não podemos ter duas variáveis com o mesmo nome em JS, isso causa um erro e quebra o nosso site, e isso é chamado de conflito de nomenclatura (naming conflict)). Portanto podemos fazer isso usando um módulo, e para criar esse módulo, vamos simplesmente deletar esta linha de código que usa um script marcado para carregar o cart.js (<script src="scripts/data/cart.js"></script>). Então vamos deletar e salvar, e verá que o site está funcionando novamente. Como isso funciona?
// Quando usamos uma tag de <script>, ela executará todo o código dentro do cart.js. Portanto, esse código criará uma variável de cart e isso causará um naming conflict. Ao remover a tag de <script>, não estaremos mais executando o código dentro do cart.js, logo não estaremos mais criando uma variável de cart e isso não causará mais um naming conflict. Portanto, para criar um módulo, executamos duas etapas. PRIMEIRO: criamos um arquivo e escrevemos nosso código dentro dele. SEGUNDO: não carregue o arquivo com uma tag de <script>. Ao fazer isso, quasquer variáveis que criarmos dentro do arquivo estarão contidas dentro do arquivo e não causarão naming conflict
// Mas agora nos deparamos com outro problema em nosso código. Ao abrir o amazon.js, criamos a variável cart como exemplo, mas o que queremos fazer é manter a variável cart dentro de cart.js porque queremos manter todo o código relacionado ao cart dentro deste arquivo. Então, no amazon.js, vamos deletar o código. Entretanto, como não estamos mais carregando o cart.js usando a tag <script>, a variável cart não existe mais, ela está contida no cart.js e não podemos acessá-lo de fora. Agora vamos aprender como obter uma variável fora de um arquivo ou módulo. Pra isso, vamos seguir três passos. PRIMEIRO: adicionar um atributo type="module". SEGUNDO: exportar. TERCEIRO: importar.
// PRIMEIRO: o atributo type="module" basicamente permite que este arquivo obtenha variáveis fora de outros arquivos, ele habilita esse recurso. SEGUNDO: (exportar) vamos escolher quais variáveis podem ser acessadas fora deste arquivo (cart.js). Por exemplo, queremos acessar a variável cart forta do arquivo cart.js, para fazer isso, na frente da variável, vamos apenas digitar 'export' e espaço (export let cart = []). Então agora essa variável pode ser usada fora do cart.js. TERCEIRO (importar) vamos para o local onde vamos usar essa variável, que fica dentro do amazon.js, e no topo vamos dizer ao computador qual variável queremos obter de outro arquivo, então digitamos import, abre e fecha chaves, e entre as chaves vamos dar o nome da variável que queremos obter, no caso, a variável cart (import {cart}). Em seguida diremos ao computador de qual (from) arquivo queremos obter essa variável, então digitamos "from" e entre aspas simples (from '';), dentro dessas aspas vamos localizar o arquivo usando um filepath.
//Portanto, o primeiro passo é realmente tirar o arquivo amazon.js da pasta de 'scripts', e levar para a pasta de 'data'. Então, para sair da pasta atual onde este arquivo está, vamos digitar '..' - dois pontos representa a pasa fora desta pasta atual. Então vamos digitar uma barra ('../') para sair da pasta de scripts. Agora que estamos fora desta pasta, iremos para a pasta de 'data' e digitaremos cart.js. No final, o código de importação será este: import {cart} from '../data/cart.js'. O que esse código faz é retirar a variável cart fora do arquivo cart.js, e usaremos esse caminho para localizar esse arquivo
// Mais duas coisas que precisamos aprender sobre módulos. 1. Precisamos colocar todas as nossas importações no topo do arquivo. 2. Para que os módulos funcionem, precisamos usar um servidor ativo (live server). Se eu abrir o arquivo manualmente (C:/User/... assim por diante) o site não funcionará. Isso só ocorre porque os módulos não funcionam se abrirmos o arquivo HTML diretamente. Portanto, precisamos usar o Live Server.
// Beneficios do Modules. Evita o naming conflict pois agora temos o controle sobre quando ocorrem, . Assim, após o nome da variável que importamos, podemos digitar 'as' e depois um nome diferente, como 'myCart'. Basicamente, isso irá pegar a importação e renomeá-la para myCart para que não entre mais em conflito com o nome desta variável (cart). No fim, caso voce use a variável caso voce use a variável cart no amazon.js. A linha de importação ficaria, por exemplo, assim: import {cart as myCart} from '../data/cart.js'. Portanto, o segundo grande benefício dos módulos é que não precisamos nos preocupar com a ordem dos nosso arquivos. Antes, quando carregámos tudo com a tag <scripts>, tinhamos que ter certeza de carregar o cart.js primeiro porque precisamos que a variável cart seja criada para que então podessemos usá-la no amazon.js. Portanto, módulos são a melhor maneira de organizar nosso código, especialmente em projetos maiores.
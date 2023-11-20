// Para deixar o script mais "seguro", vamos usar o esquema (function(){}())
(function(){
  "use strict"

  let counter = 1 // na primeira vez que o script for executado, o contador (counter) será 1 e irá ter um aparecimento gradual (fade in) no primeiro parágrafo
  function contentRotator() {
    $(`#container p:nth-child(${counter})`).fadeIn(2000, /* o nth-child funciona melhor com 1 do que 0. Após a conclusão da animação fadein de dois segundos, voce deve adicionar uma função retorno de chamada (callback). O resto do script ficará entre as duas chaves.*/ function() {
      // esta instrução if verificará se você está no último parágrafo da div. observe o uso da palavra-chave "this" e do método is(), que retorna verdadeiro ou falso
      if($(this). is("#container p:last-child")) { //- se está no ultimo parágrafo
        // (1) esperar três segundos
        setTimeout(function() {
          // (2) fadeout no paragrafo
          $(`#container p:nth-child(${counter})`).fadeOut(2000, function() {
            // (3) definir o counter devolta a 1
            counter = 1
            // (4) executar o contentRotator de novo
            contentRotator()
          })
        }, 3000)
      } else { //- se não chegou no ultimo paragrafo
        // (1) esperar três segundos
        setTimeout(function(){
          // (2) fadeout no paragrafo
          $(`#container p:nth-child(${counter})`).fadeOut(2000, function() {
            // (3) incrementar o counter
            counter++
             // (4) executar o contentRotator de novo
            contentRotator()
          })
        }, 3000)
      }
    })
  } 

  contentRotator()

}())
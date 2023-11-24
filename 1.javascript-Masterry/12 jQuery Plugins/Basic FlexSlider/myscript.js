$(window).on('load',function() { //por que não apenas "load(function(){})"? - porque, caso a versão do jQuery atualize, por exemplo, essa que estou usando é a 3.7.1, provavelmente daria erro e só aceitaria a versão anterior. Usando esse metodo acima, acaba sendo funcional para versões mais atuais
  $(".flexslider").flexslider({
    //- adicionando anmiações customizadas (todos os exemplos estão no site: woo.com/flexslider/). Exemplos:

    /* animation: 'slide',
    direction: 'vertical',
    reverse: true, */
    slideshowSpeed: 3000,
    pauseOnHover: true // basicamente acelerei a 'mostragem de slide automatica' pra cada 3 segundos, e adicionei um 'pausar a mostragem' ao mover o mouse acima do slide
    
  }) // esta função (flexslider()) apenas existe porque nos temos o plugin, o plugin é a definição desta função. É uma adição do jQuery
})
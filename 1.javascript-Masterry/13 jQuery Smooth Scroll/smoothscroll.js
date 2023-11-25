$("nav ul li a").click(function() {
  const thisSection = $(this).attr("href")

  $("html").stop().animate({/* add animation here */}, 800)
})
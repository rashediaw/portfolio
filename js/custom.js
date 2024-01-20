$('.banner_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:".prve",
  nextArrow:".next",
  dots:true,
});



// backtotop start


$(window).scroll(function(){
  var scrolling = $(this).scrollTop();

  if(scrolling > 20){
    $(".becktotop i").fadeIn(500)
  }else{
    $(".becktotop i").fadeOut(500)
  }
})

$(".becktotop i").click(function(){
  $('html, body').animate({
    scrollTop:0
  },100)
})

// backToTop end

// akla start


$('.akla_slic').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots:true,
  arrows:false
});


// akla end
import $ from 'jquery';


export function swatches_load(){
  alert("heyyy")
  $(document).ready(function(){
    $('a').click(function(){
      var largeImage = $(this).attr('data-full');
      $('.selected').removeClass();
      $(this).addClass('selected');
      $('.full img').hide();
      $('.full img').attr('src', largeImage);
      $('.full img').fadeIn();


    }); // closing the listening on a click
    $('.full img').on('click', function(){
      var modalImage = $(this).attr('src');
      $.fancybox.open(modalImage);
    });
  }); //closing our doc ready
  


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
}

export function CustomFunction(elementid) {
    /*---customjs---*/


    

window.onscroll = function() {myFunction();filterScroll()};

var header = document.getElementById(elementid);
var sticky = header.offsetTop;

function myFunction() {
 if($(window).scrollTop() > 0) {//alert("ss");
  $('#myHeader').addClass("sticky");
   
  } else {
    $('#myHeader').removeClass("sticky");
  }
}
}

var prevScrollpos = window.pageYOffset;
function filterScroll() {
var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    $('.plp-filter-mobile').fadeIn();
    } else {
    $('.plp-filter-mobile').fadeOut();
    }
    prevScrollpos = currentScrollPos;
}

export function importAllImages(image){
  let images = {};
  image.keys().map((item, index) => { images[item.replace('./', '')] = image(item); });
  return images;
}



$(document).ready(function(){
  $(window).scroll(function () {  
    var nav = $('.navigationbar').offset().top; 
    if (($(window).scrollTop() > nav)) {   
     $('.product-desc').css('position','fixed');
     $('.product-desc').css('top','9%');
    } else {
      $('.product-desc').css('position','');
      $('.product-desc').css('top','');
    }
   if($("#sidebar").length !== 0) {//this.alert("gg");
    if ($('#sidebar').offset().top + $("#sidebar").height() > $("#footer").offset().top) {
      $('#sidebar').css('top',-($("#sidebar").offset().top + $("#sidebar").height()  - $("#footer").offset().top));
    }  
  } 
  if($("#tab-sec").length !== 0) { 
  var tab = $('#tab-sec').offset().top;
  if($(window).scrollTop() > tab) {
  $('#tab-sec .nav-tabs').addClass("subheader-sticky");
  }
  else{
  $('.pdp-extradetails .nav.nav-tabs').removeClass("subheader-sticky");
  }
       /*---tabs---*/
       $('.nav-item').click(function (){
        var tab = $('#tab-sec').offset().top;//alert(tab);
        $('html, body').animate({
          scrollTop:$('#tab-sec').offset().top - 68,
        },0)
      });
  } 


  });

  /*---focussearch---*/
  $("#searchFieldWeb").focus( function() {
    $(".search-icon").addClass("focus-style");
  });

  $("#searchFieldWeb").focusout( function() {
      $(".search-icon").removeClass("focus-style");
  });    
  });

  
  
$( document ).ready(function(){
    $( "#first" ).hover(function(){ // задаем функцию при наведении курсора на элемент	
      $( ".one" ).css( "background", "linear-gradient(to left, #9d35c0, #31aae2)" ) // задаем цвет заднего фона
              .text("1").css("color", "#fff"); // задаем текстовое содержимое
      }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
      $( ".one" ).css( "background", "#fff" ) // задаем цвет заднего фона
              .text("1").css("color", "#00aeef"); // задаем текстовое содержимое
    });
  });

  $( document ).ready(function(){
    $( "#second" ).hover(function(){ // задаем функцию при наведении курсора на элемент	
      $( ".two" ).css( "background", "linear-gradient(to left, #9d35c0, #31aae2)" ) // задаем цвет заднего фона
              .text("2").css("color", "#fff"); // задаем текстовое содержимое
      }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
      $( ".two" ).css( "background", "#fff" ) // задаем цвет заднего фона
              .text("2").css("color", "#00aeef"); // задаем текстовое содержимое
    });
  });


  $( document ).ready(function(){
    $( "#third" ).hover(function(){ // задаем функцию при наведении курсора на элемент	
      $( ".three" ).css( "background", "linear-gradient(to left, #9d35c0, #31aae2)" ) // задаем цвет заднего фона
              .text("3").css("color", "#fff"); // задаем текстовое содержимое
      }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
      $( ".three" ).css( "background", "#fff" ) // задаем цвет заднего фона
              .text("3").css("color", "#00aeef"); // задаем текстовое содержимое
    });
  });

  function openForm() {
        document.getElementById("myForm").style.display = "block";
      };
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      };

  
$('.slick_slider').slick({
  dots: true,
  dotsClass: "my-dots",
  slidesToShow: 1,
  slidesToScroll: 1,
});


$('.slider_icon').slick({
   slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: '<div class="sprite-next"><i class="fas fa-angle-right"></i></div>', // Кастомная стрелка "далее"
  prevArrow: '<div class="sprite-prev"><i class="fas fa-angle-left"></i></div>', // Кастомная стрелка "назад"
});

$('.tab-title').on('click', function() {
	$(this).siblings('.tab-content').slideToggle();
});

$('.slider_comment').slick({
  dots: true,
  dotsClass: "my-dots",
  slidesToShow: 1,
  slidesToScroll: 1,
});







(function () {
  'use strict';
  $('.accordion').on('click', '.title', function (event) {
      event.preventDefault();
      $('.title').not($(this)).siblings('.content').slideUp('normal');
      $('.title').not($(this)).removeClass("active");
      $(this).siblings('.content').slideToggle('normal');
      $(this).toggleClass("active");
  });
  $('.accordion .content').hide();
  $('.accordion .active').next().slideDown('normal');
})();



$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    var dropdownlink = this.el.find('.dropdownlink');
    dropdownlink.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };
  
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }
  }
  
  var accordion = new Accordion($('.accordion-menu'), false);
})


$(window).scroll(startCounter);

function startCounter() {
    if ($(window).scrollTop() > 5500) {
        $(window).off('scroll', startCounter);
        $('.number').each(function() {
            let $this = $(this);
            countTo = $this.attr('data-count');
            $({ countNum: $this.text() }).animate({
                countNum: countTo
            }, {
                duration: 4000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                }
            });
        });
    }
};



$(document).ready(function(){
      $("#menu").on("click","a", function (event) {
          //отменяем стандартную обработку нажатия по ссылке
          event.preventDefault();
          //забираем идентификатор бока с атрибута href
          var id  = $(this).attr('href'),
          //узнаем высоту от начала страницы до блока на который ссылается якорь
              top = $(id).offset().top;
          //анимируем переход на расстояние - top за 1500 мс
          $('body,html').animate({scrollTop: top}, 1500);
      });
  });
  
//   $(".hamburger_content").click(function () {
//     $(this).toggleClass("active");
//     $(".overlay").toggleClass("open");
//     // this line ▼ prevents content scroll-behind
//     $("body").toggleClass("locked");
// });

// $(".drawer-list a").click(function () {
//     $(".hamburger_content").toggleClass("active");
//     $(".overlay").toggleClass("open");
//     $("body").toggleClass("locked");
// });
$("#navToggle").click(function () {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  // this line ▼ prevents content scroll-behind
  $("body").toggleClass("locked");
});

$(".overlay a").click(function () {
  $("#navToggle").toggleClass("active");
  $(".overlay").toggleClass("open");
  $("body").toggleClass("locked");
});

   
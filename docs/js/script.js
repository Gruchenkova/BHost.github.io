$( document ).ready(function(){
    $( "#first" ).hover(function(){ // задаем функцию при наведении курсора на элемент	
      $( "#one" ).css( "background", "linear-gradient(to left, #9d35c0, #31aae2)" ) // задаем цвет заднего фона
              .text("1").css("color", "#fff"); // задаем текстовое содержимое
      }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
      $( "#one" ).css( "background", "#fff" ) // задаем цвет заднего фона
              .text("1").css("color", "#00aeef"); // задаем текстовое содержимое
    });
  });

  $( document ).ready(function(){
    $( "#second" ).hover(function(){ // задаем функцию при наведении курсора на элемент	
      $( "#two" ).css( "background", "linear-gradient(to left, #9d35c0, #31aae2)" ) // задаем цвет заднего фона
              .text("2").css("color", "#fff"); // задаем текстовое содержимое
      }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
      $( "#two" ).css( "background", "#fff" ) // задаем цвет заднего фона
              .text("2").css("color", "#00aeef"); // задаем текстовое содержимое
    });
  });


  $( document ).ready(function(){
    $( "#third" ).hover(function(){ // задаем функцию при наведении курсора на элемент	
      $( "#three" ).css( "background", "linear-gradient(to left, #9d35c0, #31aae2)" ) // задаем цвет заднего фона
              .text("3").css("color", "#fff"); // задаем текстовое содержимое
      }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
      $( "#three" ).css( "background", "#fff" ) // задаем цвет заднего фона
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



// let links = document.querySelectorAll('.tabs-links li');
// let content = document.querySelectorAll('.tabs-content li');
// for(let i=0; i <links.length; i++) {
//     (function(i) {
//        let link = links[i];
//        link.onclick = function() {
//            for(let j=0; j <content.length; j++) {
//               let opacity = window.getComputedStyle(content[j]).opacity;
//               if(opacity == "1") {
//                  content[j].style.opacity = "0";
//               }
//            }
//         content[i].style.opacity = "1";
//         }
//     })(i);
// }


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


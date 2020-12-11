$(".btn-click").click(function() {
    $("#callback-form").toggle();
    
});

$(".close-form").click(function() {
    $("#callback-form").toggle();
    
});



$(function() {
    //задание заполнителя с помощью параметра placeholder
    $("#phone").mask("+7(999)-999-99-99", {placeholder: "+7(___)-___-__-__" });
    
  });
  
  $(function() {
    //задание заполнителя с помощью параметра placeholder
    $("#phone1").mask("+7(999)-999-99-99", {placeholder: "+7(___)-___-__-__" });
    
  });
  
  
  $("#scroll").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $(".formwrap").offset().top  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$(function(){
  // Правильный пароль (замените на свой)
  const correctPassword = "09082004"; 
  
  // Проверка пароля при клике на кнопку
  $("#submitPassword").click(function() {
    checkPassword();
  });
  
  // Проверка пароля при нажатии Enter
  $("#passwordInput").keypress(function(e) {
    if (e.which === 13) { // Код клавиши Enter
      checkPassword();
    }
  });

  function checkPassword() {
    const enteredPassword = $("#passwordInput").val();
    
    if (enteredPassword === correctPassword) {
      // Пароль верный - скрываем модальное окно и показываем контент
      $("#passwordModal").fadeOut(400, function() {
        $("#content").fadeIn(600);
      });
    } else {
      // Пароль неверный - показываем сообщение об ошибке
      $("#errorMessage").fadeIn().delay(2000).fadeOut();
      $("#passwordInput").val("").focus(); // Очищаем поле ввода и фокусируемся на нем
    }
  }

  // Обработка клика по конверту (ваш существующий код)
  if (!$('.envelope').hasClass('open')){
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
    });
  }
});

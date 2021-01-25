$(document).ready(function(){
  var first = true;
  $( "#email-input" ).addClass('email-input:valid');
  $( "#email-input" ).focus(function() {
      var input = $(this).val();
      if(first){
          first=false;
          $(this).css({ "border": 'rgb(0, 142, 226) 1px solid'});
      }
      else if(isValid(input)){
          $(this).css({ "box-shadow": '0 0 5px rgb(0, 142, 226)'});
      }
      else{
          $(this).css({ "box-shadow": '0 0 5px #fc0000'});
      }
  });
  $( "#email-input" ).blur(function() {
      var input = $(this).val();
      $(this).css({ "box-shadow": 'none'});
      if(isValid(input)){
          $(this).css({ "border": 'rgb(0, 142, 226) 1px solid'});
          $('#placeholder').html('');
      }
      else{
          $(this).css({ "border": '#fc0000 1px solid'});
          $('#placeholder').html('A valid email is required'.fontcolor("red"));
      }
  });
  $('button.subscribe-button').click(function(){
      var input = $('#email-input').val();
      if(isValid(input)) {
        location.replace('success.html')
      }
  })

  var isValid = function(input){
      return /[a-zA-z0-9._]+@[a-zA-Z]+\.[a-zA-z]{2,4}/.test(input);
  }
});
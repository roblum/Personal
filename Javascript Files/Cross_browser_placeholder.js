jQuery(function($){
//Placeholders for Submit Form
$("#firstname").attr('placeholder', 'First name*');
$("#lastname").attr('placeholder', 'Last name*');
$('#city').attr('placeholder', 'City*');
$('#zip').attr('placeholder', 'Zip*');
$("#email").attr('placeholder', 'Email*');
$("#post").attr('placeholder', 'MM');
$("#cell").attr('placeholder', 'DD');
$("#birthday").attr('placeholder', 'Birthday*');
//Fix Placeholders
$('[placeholder]').parents('form').submit(function() {
  $(this).find('[placeholder]').each(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
      input.val('');
    }
  })
});
$('[placeholder]').focus(function() {
  var input = $(this);
  if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = $(this);
  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur();
});

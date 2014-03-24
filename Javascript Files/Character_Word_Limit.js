//Character Limit Script
jQuery(function($){
    $('<p id="numCount"></p>').appendTo('#sfield_entry');
    $('textarea').keypress(function(e) {
        if(e.which == '13') {
        return false;
    } else{
        var tval = $('textarea').val()
            ,tlength = tval.length
            ,set = 10
            ,remain = parseInt(set - tlength);
            $('p').text(remain);
            
            if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
                $('textarea').val((tval).substring(0, tlength - 1))
            }
    }
    });
});


//Word Count HTML
//<textarea id="entry"></textarea>
//<p id="pp"></p>

<script>
//Word Count Script
jQuery(function($){
$('<p id="pp">Words left: <span>400</span></p>').appendTo('#sfield_caption');

$('#caption').keyup(function() {
    var textValue = $('#caption').val().toString().split(" ")
        ,maxCount = 400
        ,textBoxLength = textValue.length
        ,wordsLeft = parseInt(maxCount - textBoxLength);
    $('#pp span').text(wordsLeft);
    if (wordsLeft < 0) {
        $('#pp').css('color','red');
    }else{$('#pp').css('color','black');}
    if (textValue[0] === ''){$('#pp span').text(maxCount);}
});
$("#caption").keypress(function(event) {
    if(event.which == '13') {
      return false;
    }
});

$('#form_submit_button').click(function(){
var wordsLeft = parseInt($('#pp span').html());
console.log(wordsLeft);
if (wordsLeft < 0){
alert("Please check your word count");
return false;
}
});

});
</script>

//MOBILE 
$('#form-submit-button').click(function(){
var wordsLeft = $('#caption').val().toString().split(" ").length;
if (wordsLeft > 400){
alert("Please check your word count");
return false;
}
});
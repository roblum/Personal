//Character Limit Script
jQuery(function($){
    $('<p id="numCount"></p>').appendTo('#sfield_entry');
    $('textarea').keypress(function(e) {
        if(event.which == '13') {
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

//Word Count Script
jQuery(function($){
$('#entry').keyup(function() {
    var textValue = $('#entry').val().toString().split(" ")
        ,maxCount = 10
        ,textBoxLength = textValue.length
        ,wordsLeft = parseInt(maxCount - textBoxLength);
    $('#pp').text('Words left: ' + wordsLeft);
    if (wordsLeft <= 0) {
        return false;
    }
});
$("#entry").keypress(function(event) {
    if(event.which == '13') {
      return false;
    }
});
});
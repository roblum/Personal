//Insert into DOM
//<a  href="#" class="popup" rel="popbox1" >Call to Action</a>

jQuery(document).ready(function($) {
        
        //Create positionPopBox function for reuse
        var positionPopBox = function(elem){
            console.log(elem);
            var popuprel = $(elem).attr('rel');
            $('#' + popuprel).fadeIn();
            $('#fadebg').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
            var topindent = ($('#' + popuprel).height() + 10) / 2;
            var leftindent = ($('#' + popuprel).width() + 10) / 2;
            $('#' + popuprel).css({
            'margin-top' : -topindent,
            'margin-left' : -leftindent
            });
        }

        var reposition = function(item, place){
            var popuprel = $(item).attr('rel');
            $('#' + popuprel).css('margin-top', place + 'px');
        }

        $('#fadebg , #closeButton').click(function() {
            $('#popbox1, #fadebg').fadeOut()
            return false;
        });

        $('body').on('click', '.popup', function() {
            if (/iPhone|iPod/i.test(navigator.userAgent)){
                window.open('https://offerpop.com/Contest.psp?c=614546&u=54823&a=194975693850063&p=94654814689&rest=1'); //Apple redirect location
            } else {
                var that = this;
                positionPopBox(that);
            }
        });
});

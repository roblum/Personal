Hackarounds

Target nameless element on page with style
$("div [style*='#888']").hide();

Target text node in nameless element
$(".CFile").contents().filter(function(){ return this.nodeType == 3; }).remove();
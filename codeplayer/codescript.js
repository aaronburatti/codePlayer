var windowHeight = $(window).height();

var menuBarHeight=$("#menubar").height();

var codeContainerHeight = windowHeight - menuBarHeight;

$(".codeContainer").height(codeContainerHeight+"px");

$(".toggles").click(function(){
  $(this).toggleClass("selected");
  var activeDiv =  $(this).html();

  $("#"+activeDiv+"Container").toggle();

  var showingDivs=$(".codeContainer").filter(function(){


    return($(this).css("display")!="none")
  }).length;

  var width = 100/showingDivs;

  $(".codeContainer").width(width+"%");

});

$("#run-button").click(function(){

  $("iframe").contents().find("html").html($("#htmlCode").val());

});

$("#run").click(function() {
$('#resultFrame').contents().find('html').html("<style>"+$
('#css').val()+"</style>"+$("#html").val());
document.getElementById('resultFrame').contentWindow.eval( $
('#js').val() );
});

$document.ready();

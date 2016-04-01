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

$document.ready();

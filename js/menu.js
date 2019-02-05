
  

 $(document).ready(function(){
  $(".a_item_r").click(function(){
    $(".a_item_r").removeClass("open_close_r");
    $(".a_contents_r a").css("display","none");
    $(this).next().slideUp(300);
    $(this).removeClass("selected");
    if($(this).next().css("display")=="none"){
      $(this).addClass("open_close_r");
      $(".a_contents_r").slideUp(300);
      $(this).next().slideDown(300);
      $("+.a_contents_r a",this).fadeIn(1500);
      $(".selected").removeClass("selected");
      $(this).addClass("selected");


    }
  });
});

$(document).ready(function(){
  $(".contact").click(function(){
    $(".a_item_r").removeClass("open_close_r");
    $(".a_contents_r a").css("display","none");
    $(this).next().slideUp(300);
    $(this).removeClass("selected");
    
    
  });
});
 
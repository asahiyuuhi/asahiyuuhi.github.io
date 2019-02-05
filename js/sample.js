

$(function() {
  var $win = $(window),
      $header = $('.com'),
      headerHeight = $header.outerHeight(),
      startPos = 0;

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > startPos && value > headerHeight ) {
      $header.css('top', '-' + headerHeight + 'px');
    } else {
      $header.css('top', '0');
    }
    startPos = value;
  });
});

$(function() {
  var $win = $(window),
      $main = $('article'),
      $nav = $('nav'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed';
      var windowWidth = $(window).width();
     var windowSm = 1096;
    if (windowWidth <= windowSm){

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
      $('nav h1').css('padding-left', '100px');
      $('nav h1').css('margin-top', '15px');
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
      $('nav h1').css('padding-left', '60px');
    }

  });
  }
});

$(function() {
  var $win = $(window),
      $main = $('article'),
      $nav = $('nav'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed';
      var windowWidth = $(window).width();
     var windowSm = 1096;
    if (windowWidth > windowSm){

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
      $('nav h1').css('padding-left', '200px');
      $('nav h1').css('text-align', 'left');
     
      $('nav h1').css('margin-top', '15px');
      $main.css('margin-top', navHeight);
    } else {
      $nav.removeClass(fixedClass);
      $main.css('margin-top', '0');
      $('nav h1').css('margin-left', '0px');
    }

  });
  }
});

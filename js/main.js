$('.carousel-item', '.show-neighbors').each(function(){
  var next = $(this).next();
  if (! next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
}).each(function(){
  var prev = $(this).prev();
  if (! prev.length) {
    prev = $(this).siblings(':last');
  }
  prev.children(':nth-last-child(2)').clone().prependTo($(this));
});

// Sticky Shares
(function($) {
	"use strict"

var $shares = $('.sticky-container .sticky-shares'),
$sharesHeight = $shares.height(),
$sharesTop,
$sharesCon = $('.sticky-container'),
$sharesConTop,
$sharesConleft,
$sharesConHeight,
$sharesConBottom,
$offsetTop = 150;

function setStickyPos () {
  if ($shares.length > 0) {
    $sharesTop = $shares.offset().top
    $sharesConTop = $sharesCon.offset().top;
    $sharesConleft = $sharesCon.offset().left;
    $sharesConHeight = $sharesCon.height();
    $sharesConBottom = $sharesConHeight + $sharesConTop;
  }
}

function stickyShares (wScroll) {
  if ($shares.length > 0) {
    if ( $sharesConBottom - $sharesHeight - $offsetTop < wScroll ) {
      $shares.css({ position: 'absolute', top: $sharesConHeight - $sharesHeight , left:0});
    } else if ( $sharesTop < wScroll + $offsetTop ) {
      $shares.css({ position: 'fixed', top: $offsetTop, left: $sharesConleft });
    } else {
      $shares.css({position: 'absolute', top: 0, left: 0});
    }
  }
}

$(window).on('scroll', function() {
  stickyShares($(this).scrollTop());
});

$(window).resize(function() {
  setStickyPos();
  stickyShares($(this).scrollTop());
});

/* simple hard-code default index method
    $('.collapse').on('hidden.bs.collapse', function () {
        $('.collapse').eq(0).collapse('show');
    })
*/


setStickyPos();

})(jQuery);

$('.collapse').on('hidden.bs.collapse', function () {
  // read the data-default value
  var defaultDiv = $($(this).data("parent")).data("default");
  // show the default panel
  $('.collapse').eq(defaultDiv-1).collapse('show');
})

$('.panel-collapse').on('shown.bs.collapse', function(e) {
  var $panel = $(this).attr("id")
  console.log($panel)
  $('html, body').animate({
    scrollTop: $('#' + $panel).offset().top -160
  }, 500);
});

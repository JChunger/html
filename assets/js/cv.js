$(document).scroll(function () {
    var y = $(this).scrollTop();
    var x1 = $('.main').height();
    var x2 = $('.main2').height();
    var x4 = $('.mainBioSection').height();
    var x3 = $('.main3').height();
    if (y > x1 + x2 + (x3/2) + 100) {
        $('.circle5').fadeIn();
        $('.circle6').fadeIn();
        $('.circle7').fadeIn();
        $('.circle8').fadeIn();
    } else {
        $('.circle5').fadeOut();
        $('.circle6').fadeOut();
        $('.circle7').fadeOut();
        $('.circle8').fadeOut();
    }
});

$(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $id.offset().top;
    $('body, html').animate({scrollTop: pos});
});
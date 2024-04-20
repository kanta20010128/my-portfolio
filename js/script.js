$('.works-item').slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    swipe: true,
    dots: false,
});


$('.works-html-1').click(function () {
    $('#works-html-1-modal').css('animation-name', 'slideIn');
    return false
});
$('.works-html-2').click(function () {
    $('#works-html-2-modal').css('animation-name', 'slideIn');
    return false
});
$('.works-html-3').click(function () {
    $('#works-html-3-modal').css('animation-name', 'slideIn');
    return false
});
$('.works-wordpress').click(function () {
    $('#works-wordpress-modal').css('animation-name', 'slideIn');
    return false
});
$('.works-photoshop').click(function () {
    $('#works-photoshop-modal').css('animation-name', 'slideIn');
    return false
});
$('.works-figma').click(function () {
    $('#works-figma-modal').css('animation-name', 'slideIn');
    return false
});


$('.close-btn').click(function () {
    $('#works-html-1-modal').css('animation-name', 'slideOut');
    $('#works-html-2-modal').css('animation-name', 'slideOut');
    $('#works-html-3-modal').css('animation-name', 'slideOut');
    $('#works-wordpress-modal').css('animation-name', 'slideOut');
    $('#works-photoshop-modal').css('animation-name', 'slideOut');
    $('#works-figma-modal').css('animation-name', 'slideOut');
    return false
});

$('.close-btn').click(function () {
    setTimeout(function(){
        $('#works-html-1-modal').css('display', 'none');
        return false
   },300);
   setTimeout(function(){
    $('#works-html-2-modal').css('display', 'none');
    return false
    },300);
    setTimeout(function(){
        $('#works-html-3-modal').css('display', 'none');
        return false
    },300);
    setTimeout(function(){
        $('#works-wordpress-modal').css('display', 'none');
        return false
    },300);
    setTimeout(function(){
        $('#works-photoshop-modal').css('display', 'none');
        return false
    },300);
    setTimeout(function(){
        $('#works-figma-modal').css('display', 'none');
        return false
    },300);
});


$('.works-modal-img img').click(function () {
    const imgSrc = $(this).attr('src');
    $('.bigImg').attr('src', imgSrc);
    $('.works-modal-bigimg').fadeIn();
    return false
});

$('.bigimg-close').click(function () {
    $('.works-modal-bigimg').fadeOut();
    return false
});

$('.works-modal-img-2 img').click(function () {
    const imgSrc = $(this).attr('src');
    $('.bigImg').attr('src', imgSrc);
    $('.works-modal-bigimg').fadeIn();
    return false
});

$('.bigimg-close').click(function () {
    $('.works-modal-bigimg').fadeOut();
    return false
});
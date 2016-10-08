$('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeOutExpo');
    event.preventDefault();
});

$('.message-btn').bind('click', function(event) {
    var anchor = $('.message-btn').attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top
    }, 1500, 'easeOutExpo');
    event.preventDefault();
});

$('.top-button').bind('click', function(event) {
    var anchor = $('.top-button').attr('target');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top
    }, 1500, 'easeOutExpo');
    event.preventDefault();
});

$('.top-button').hide();

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if(wScroll <= 0){
        $('.top-button').hide(300);
    }else if($('.top-button').is(':hidden')){
        $('.top-button').show(300);
    }

    var skillsTop = $('#skills').offset().top;
    var skillsHeight = $('#skills').height();
    var skillsDistance = skillsTop - wScroll;
    var skillsDifference = skillsDistance - skillsHeight;
    if(skillsDifference < 0){
      $('.health-bar div').each(function(index){
        var itemClass = $(this).attr('item-class');
        $(this).addClass("health-" + itemClass);
      });
    }
});

$('#contact').submit(function(e){

    $.ajax({
        url: "http://formspree.io/00357jimmy@gmail.com",
        method: "POST",
        data:$('#contact').serialize(),
        datatype: 'json',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (data) {
            swal({title: "Thank you!", text: "Your email has been received and will be reviewed.", type:"success"}, function(){});
        }
    });

    e.preventDefault();
});


$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() >80) {
            $('.ansyf').addClass('anasyf');
        }
        else{
            $('.ansyf').removeClass('anasyf');
        }
    });
});


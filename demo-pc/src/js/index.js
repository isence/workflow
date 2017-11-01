$(function () {
    $('.mod_manage iframe').css('minHeight', ($(window).height() - 98));
    $('.mod_manage_ft_r').css('minHeight', ($(window).height() - 40));
    $('.js_tab').on('click', 'li', function (event) {
        event.preventDefault();
        $(this).addClass('cur').siblings('li').removeClass('cur');
    });
})

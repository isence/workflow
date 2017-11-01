$(function () {
    $('.item_change').on('click', 'a', function (event) {
        event.preventDefault();
        var _this = $(this),
            span = _this.siblings('span'),
            num = parseInt(span.text());
        if (_this.hasClass('item_list_add')) {
            num++;
        } else {
            num--;
        }
        if (num > 9) {
            span.css('minWidth', '1.2rem');
        } else {
            span.css('minWidth', '.8rem');
        }
        num > 0 && num < 100 && span.text(num); //限制数量1到99
    });
    $('.order_now').on('click', '.delete', function (event) {
        event.preventDefault();
        $(this).parents('li').remove();
    });
})

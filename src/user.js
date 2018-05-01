$(document).on('click', '.set_oper .btn_cancel', function () {
    $('.page_set').hide();
}).on('click', '.collapse_left', () => {
    $('.page_left').toggleClass('collapse');
});
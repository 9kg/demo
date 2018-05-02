setDrag('.set_left .left_list_item');

$(document).on('click', '.set_oper .btn_cancel', function () {
    $('.page_set').hide();
}).on('click', '.set_oper .btn_save', function () {
    let ids = $.map($('.set_left .left_list .left_list_item'), function(item){
        return $(item).data('id');
    });
    alert(ids);
}).on('click', '.collapse_left', function(){
    $('.page_left').toggleClass('collapse');
}).on('click', '.oper_set', function(){
    $('.page_set').show();
}).on('click', '.system_item .system_name', function(){
    $(this).closest('.system_item').toggleClass('active');
}).on('click', '.menus .menu_item', function(){
    $(this).toggleClass('checked');
    if($(this).is('.checked')){
        var $li = $(`<li class="left_list_item" data-id="${$(this).data('id')}">\
            <i class= "icon ${$(this).data("icon")}" ></i>\
            <span class="menu_name">${$(this).find('.menu_name_en').text()}</span>\
        </li>`);
        $li.attr('draggable', 'true');
        $('.set_left .left_list').append($li);
    }else{
        $(`.set_left .left_list .left_list_item[data-id="${$(this).data('id')}"]`).remove();
    }
}).on('dblclick', '.set_left .left_list .left_list_item', function(){
    $(`.menus .menu_item[data-id="${$(this).data('id')}"]`).removeClass('checked');
    $(this).remove();
});
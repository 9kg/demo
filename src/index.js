$('.card_row').each(function(){
    let idx = $(this).index() + 1;
    setDrag('.card_row:nth-child(' + idx + ') .card_item', function ($drag, $drop) {
        alert(`${$drag.data('id')}, ${$drop.data('id')}`);
    });
});
setDrag('.card_row', function($drag, $drop){
    alert(`${$drag.data('id')}, ${$drop.data('id')}`);
});


// 各按钮事件
$(document).on('click', '.btn_add_stage', function(){
    alert('增加stage');
}).on('click', '.btn_remove_stage ', function(){
    let stage_id = $(this).closest('.card_row').data('id');
    if (confirm('是否删除stage(' + stage_id + ')')){
        $(this).closest('.card_row').remove();
    }
}).on('click', '.card_add ', function(){
    let stage_id = $(this).closest('.card_row').data('id');
    alert('添加系统,stage是(' + stage_id + ')')
}).on('click', '.card_item .icon_remove', function(){
    let sys_id = $(this).closest('.card_item').data('id');
    if (confirm('是否删除系统(' + sys_id + ')')){
        $(this).closest('.card_item').remove();
    }
}).on('click', '.card_item .icon_edit', function () {
    let sys_id = $(this).closest('.card_item').data('id');
    alert('修改系统(' + sys_id + ')');
}).on('click', '.card_main .icon_edit', function () {
    let stage_id = $(this).closest('.card_row').data('id');
    alert('修改stage(' + stage_id + ')');
}).on('click', '.oper_area .btn_save ', function(){
    alert('保存');
}).on('click', '.oper_area .btn_preview ', function(){
    alert('预览');
}).on('click', '.oper_area .btn_publish ', function () {
    alert('发布');
});
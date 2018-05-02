'use strict';

// 设置列表拖动排序
function setDrag(sel, fn) {
	var $drag = null;
	$(sel).attr('draggable', 'true');
	$(document).on('dragstart', sel, function (e) {
		$(this).addClass('dragstart');
		$drag = $(this);
		e.stopPropagation();
	}).on('dragend', sel, function (e) {
		$(this).removeClass('dragstart');
		$drag = null;
	}).on('dragenter', sel, function (e) {
		if ($drag) {
			e.preventDefault();
			$(this).addClass("dragover");
			// $(this)[$(this).index() > $drag.index() ? 'after' : 'before']($drag);
		}
	}).on('dragover', sel, function (e) {
		if ($drag) {
			$(this).addClass("dragover");
			e.preventDefault();
		}
	}).on('dragleave', sel, function (e) {
		if (!$(this).is($drag)) {
			$(this).removeClass("dragover");
		}
	}).on('drop', sel, function (e) {
		$(sel).filter('.dragover,.dragstart').removeClass("dragover dragstart");
		if ($drag) {
			$(this)[$(this).index() > $drag.index() ? 'after' : 'before']($drag);
			fn && fn($drag, $(this));
		}
	});
}
// 头部四个按钮
$(document).on('click', '.page_top .oper_user ', function () {
	alert('user');
}).on('click', '.page_top .oper_home ', function () {
	alert('home');
}).on('click', '.page_top .oper_logout ', function () {
	alert('logout');
}).on('click', '.page_top .oper_language ', function () {
	alert('language');
});

// setDrag('.left_list_item', true);

// setDrag('.card_row:nth-child(1) .card_item');
// setDrag('.card_row:nth-child(2) .card_item');
// setDrag('.card_row:nth-child(3) .card_item');
// setDrag('.card_row:nth-child(4) .card_item');
// setDrag('.card_row');

// $(document).on('click', '.collapse_left', () => {
// 	$('.page_left').toggleClass('collapse');
// });
//# sourceMappingURL=.maps/common.js.map

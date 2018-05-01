'use strict';

// 设置列表拖动排序
function setDrag(sel, isPlaceHolder) {
	var $drag = null;
	var $empty = null;
	$(sel).attr('draggable', 'true');
	$(document).on('dragstart', sel, function (e) {
		$(this).addClass('dragstart');
		$drag = $(this);
		if (isPlaceHolder) {
			$empty = $(this).clone().addClass('dragempty');
		}
		e.stopPropagation();
	}).on('dragend', sel, function (e) {
		$(this).removeClass('dragstart');
		$drag = null;
	}).on('dragenter', sel, function (e) {
		if ($drag) {
			if (isPlaceHolder) {
				if (!$(this).is($drag)) {
					e.preventDefault();
					$(this)[$(this).index() > $drag.index() ? 'after' : 'before']($empty);
				} else {
					$empty.remove();
				}
			} else {
				e.preventDefault();
				$(this)[$(this).index() > $drag.index() ? 'after' : 'before']($drag);
			}
		}
	}).on('dragover', sel, function (e) {
		if ($drag) {
			if (isPlaceHolder) {
				if (!$(this).is($drag)) {
					e.preventDefault();
				}
			} else {
				e.preventDefault();
			}
		}
	}).on('dragleave', sel, function (e) {
		// if(!$(this).is($drag)){
		// 	console.log('dragleave');
		// }
	}).on('drop', sel, function (e) {
		if ($drag) {
			if (isPlaceHolder && !$(this).is($drag)) {
				$empty.replaceWith($drag);
			}
		}
	});
}

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

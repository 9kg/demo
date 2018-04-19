// 设置列表拖动排序
function setDrag(sel) {
	let $drag = null;
	let $empty = null;
	$(sel).attr('draggable', 'true');
	$(document).on('dragstart', sel, function(e){
		$(this).addClass('dragstart');
		$drag = $(this);
		$empty = $(this).clone().addClass('dragempty')
	}).on('dragend', sel, function(e){
		$(this).removeClass('dragstart');
		$drag = null;
	}).on('dragenter', sel, function(e){
		if(!$(this).is($drag)){
	        e.preventDefault();
	        var $drop = $(this);
	        $drop[$drop.index() > $drag.index() ? 'after' : 'before']($empty);
		}else{
			$empty.remove();
		}
	}).on('dragover', sel, function(e){
		if(!$(this).is($drag)){
	        e.preventDefault();
	    }
	}).on('dragleave', sel, function(e){
		if(!$(this).is($drag)){
			console.log('dragleave');
		}
	}).on('drop', sel, function(e){
		if(!$(this).is($drag)){
			$empty.replaceWith($drag);
	        // fn && fn($(this), $drag);
		}
	});
}

setDrag('.left_list_item')
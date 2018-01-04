//  Check off Specific Todo

$("ul").on("click",'li', function() {
	$(this).toggleClass("completed");
});
//  Deleting a ToDo by pressing X

$("ul").on("click",'span',function(event) {
	$(this).parent().fadeOut(500,function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if (event.which===13) {
		//  New Todo
		var newTodo=$(this).val();
		$("ul").append('<li><span>X</span> '+newTodo+'</li>');
		$(this).val("");
	}
});
$(function () {


	$('.user-container').click(function(event){
		event.preventDefault();
		var person = $(this);
		var clone = person.addClass('user-chat-box').clone();
		$('.chat-box').prepend(clone);
	});

	$('.chat-box').on('click', '.user-chat-box', function(){
		$(this).toggleClass("show-thread");
		$(this).append("<div class='message-thread'></div>");
	});
});
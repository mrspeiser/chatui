$(function () {


	$('.chat-ui-container .user-room').click(function(event){
		event.preventDefault();
		var person = $(this);
		var clone = person.addClass('user-chat-box').clone();
		$('.chat-box').prepend(clone);
	});

	$('.chat-box').on('click', '.user-chat-box', function(){
		$(this).children('.message-thread').toggleClass("displaynone");
		// $(this).append("<div class='message-thread'></div>");
	});


	// $('.chat-box .user-room').on('click', function(){
	// 	$(this).children('.message-thread').toggleClass('displaynone');
	// });

});
(function(){

$("#div1").resizable();
$('#div1').resize(function(){
	var newWidth = $("#div1").width() + $("#div3").width();
   $('#div2').width($("#parent").width()-newWidth); 
});

$("#div2").resizable({
      handles: "e"
    });
$('#div2').resize(function(){
	var newWidth = $("#div1").width() + $("#div2").width();
   $('#div3').width($("#parent").width()-newWidth); 
});


$(window).resize(function(){
	var newWidth = $("#div1").width() + $("#div3").width();
   $('#div2').width($("#parent").width()-newWidth); 
   $('#div1').height($("#parent").height()); 
});


$("#div1togglewidth").on('click', function(){
	console.log('you clicked the button');
	var minWidth = 40;
	var expandWidth = 285;
	if($('#button1').hasClass('fa-arrow-circle-o-left')) {
	 $('#button1').removeClass('fa-arrow-circle-o-left');
	 $('#button1').addClass('fa-arrow-circle-o-right');
	 $('#div1').width(minWidth);
	} else {
	 $('#button1').addClass('fa-arrow-circle-o-left');
	 $('#button1').removeClass('fa-arrow-circle-o-right');
	 $('#div1').width(expandWidth);	
	}

	// if($('#button1').hasClass('fa-arrow-circle-o-left')){
		
	// } else {
		
	// }
});

})();

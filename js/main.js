(function(){

$("#div1").resizable();
$('#div1').resize(function(){
	var newWidth = $("#div1").width() + $("#div3").width();
   $('#div2').width($("#parent").width()-newWidth); 
});


// $("#div2").resizable({
//       handles: "e"
//     });
// $('#div2').resize(function(){
// 	var newWidth = $("#div1").width() + $("#div2").width();
// 	var newWidthfix = newWidth+1;
//    $('#div3').width($("#parent").width()-newWidthfix); 
// });


// $(window).resize(function(){
// 	var newWidth = $("#div1").width() + $("#div3").width();
//    $('#div2').width($("#parent").width()-newWidth); 
//    $('#div1').height($("#parent").height()); 
// });


$("#button1").on('click', function(){
	console.log('you clicked the button');
	var minWidth = 40;
	var toAddWidth = $("#div1").width() - 40;
	var expandWidth = 285;
	if($('#button1').hasClass('fa-arrow-circle-o-left')) {
	  $('#button1').removeClass('fa-arrow-circle-o-left');
	  $('#button1').addClass('fa-arrow-circle-o-right');
	  $('#div1').width(minWidth);
	  $('#div2').width($('#div2').width()+toAddWidth);
	} else {
	  $('#button1').addClass('fa-arrow-circle-o-left');
	  $('#button1').removeClass('fa-arrow-circle-o-right');
	  $('#div1').width(expandWidth);
	  var div1Width = $('#div1').width();
	  var div3Width = $('#div3').width();
	  var expandWidth = div1Width + div3Width;
	  var div2Width = $(window).width() - expandWidth;
	  $('#div2').width(div2Width);
	}

});


$("#button3").on('click', function(){
	console.log('you clicked the button');
	var minWidth = 40;
	var toAddWidth = $("#div3").width() - 40;
	var expandWidth = 285;
	if($('#button3').hasClass('fa-arrow-circle-o-right')){
	  $('#button3').removeClass('fa-arrow-circle-o-right');
 	  $('#button3').addClass('fa-arrow-circle-o-left');
 	  // $('#div3').width(minWidth);
 	  // $('#div2').width($('#div2').width()+toAddWidth);
 	  $('#div3').css('width', '10%');
 	  $('#div2').css('width', '75%');
	} else {
	  $('#button3').addClass('fa-arrow-circle-o-right');
	  $('#button3').removeClass('fa-arrow-circle-o-left');
	  $('#div3').css('width', '20%');
 	  $('#div2').css('width', '65%');
	  // $('#div3').width(expandWidth);
	  // var div1Width = $('#div1').width();
	  // var div3Width = $('#div3').width();
	  // var expandWidth = div1Width + div3Width;
	  // var div2Width = $(window).width() - expandWidth;
	  // $('#div2').width(div2Width);
	}

});
	// if($('#button1').hasClass('fa-arrow-circle-o-left')){
		
	// } else {
		
	// }


})();

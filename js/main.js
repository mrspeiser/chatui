(function(){



$( function() {
    $( ".resizable1" ).resizable({
      grid: 1,
      maxWidth: 300,
      handles: "e"
    });
  });

$( function() {
    $( ".resizable2" ).resizable({
      grid: 1,
      maxWidth: 300,
      handles: "w"
    });
  });




})();

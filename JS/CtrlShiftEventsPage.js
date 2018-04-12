//Collapse nav menu when link is clicked
$(function() {
  $("div.collapse ul.nav li a").each(function() {
    $(this).on("click", function() {
      var $obj = $($(this).parents(".show")[0]);
      $obj.animate({height: "1px"}, function(){
        $obj.removeClass("show").addClass("collapse");
      });
    });
  });
});

//Prevents language dropdown menu from staying open after click
$('.dropdown').on('show.bs.dropdown', function(event) {
    event.preventDefault();
});
$('.dropdown').on('hide.bs.dropdown-menu', function(event) {
    event.preventDefault();
})


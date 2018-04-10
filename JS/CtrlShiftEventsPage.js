$(function() {
  $("div.collapse ul.nav li a").each(function() {
    $(this).on("click", function() {
      var $obj = $($(this).parents(".show")[0]);
      $obj.animate({height: "1px"}, function(){
        $obj.removeClass("show").addClass("collapse");
      })
    })
  })
})

$('.dropdown').on('show.bs.dropdown', function(event) {
    event.preventDefault();
});
$('.dropdown').on('hide.bs.dropdown-menu', function(event) {
    event.preventDefault();
});

//Calendar
$(function() {
    var calendar = $("#calendar").fullCalendar({
        googleCalendarApiKey: 'AIzaSyCbWq0s2_RJHTnJ3zhq1Q5H3eIazUMC_yQ',
        events: {
          googleCalendarId: 'rjm3qsnc0uv7cgpmv8236nikc4@group.calendar.google.com'
        },
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        }
    })
});



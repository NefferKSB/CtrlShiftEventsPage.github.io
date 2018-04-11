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
          googleCalendarId: 'rjm3qsnc0uv7cgpmv8236nikc4@group.calendar.google.com',
          className: 'event-text'
        },
        eventLimit: true,
        themeSystem: '', //standard, bootstrap3, bootstrap4, or jquery-ui
        selectable: true,
        selectHelper: true,
        eventRender: function(event,element) {
          element.popover({
            animation: true,
            delay: 300,
            content: '<b>Inicio</b>:'+event.start+"<b>Fin</b>:"+event.end,
            trigger: 'hover'
          });
        },
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,listMonth'
        },
        footer: {
          //accepts the same exact values as the header option
          //specifying an empty string for a property will cause it to display no text/buttons
        },
        customButtons: {
          custom1: {
            //text, icon, themeIcon, bootstrapGlyphicon and click options go here, the click option must be a function
          },
          custom2: {
            //text, icon, themeIcon, bootstrapGlyphicon and click options go here, the click option must be a function
          }
        },
        views: {
          basic: {
            //options apply to basicWeek and basicDay views
            //view-specific options here
          },
          month: {
            //options apply to basicMonth and agendaMonth views
            //view-specific options here
          },
          agenda: {
            //options apply to agendaWeek and agendaDay views
            //view-specific options here
          },
          week: {
            //options apply to basicWeek and agendaWeek views
            //view-specific options here
          },
          day: {
            //options apply to basicDay and agendaDay views
            //view-specific options here
          }
        }
    })
});



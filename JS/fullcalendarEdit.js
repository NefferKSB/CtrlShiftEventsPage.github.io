//Calendar
$(function() {
    var calendar = $("#calendar").fullCalendar({
        googleCalendarApiKey: 'AIzaSyCbWq0s2_RJHTnJ3zhq1Q5H3eIazUMC_yQ',
        events: {
          googleCalendarId: 'rjm3qsnc0uv7cgpmv8236nikc4@group.calendar.google.com',
          className: 'event-text'
        },
        fixedWeekCount: false,
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
        }
    })
});

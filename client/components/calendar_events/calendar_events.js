
Template.calendar_events.onCreated(function () {
});

Template.calendar_events.events({
	'click .summary': function (evt, target) {
		var calendarId = Router.current().params.calendarId;
		var calendarEvent = this;
		Meteor.call('getUserProfile', function(error, profile) {
			calendarEvent.extendedProperties = {
				shared : {
					'wt_hoursWorked' : 8
				}
			};
			var options = {
				headers : {
					Authorization : "Bearer " + profile.services.google.accessToken
				},
				data : calendarEvent
			};
			var url = "https://www.googleapis.com/calendar/v3/calendars/" + calendarId +"/events/" + calendarEvent.id;
			HTTP.call("PUT", url, options, function(error, result) {
			});
		});

	}
});

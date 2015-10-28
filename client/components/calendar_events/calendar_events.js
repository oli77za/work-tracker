
Template.calendar_events.onCreated(function () {
});

Template.calendar_events.events({
	'click .summary': function (evt, target) {
		var user = Meteor.user();
		var calendarId = Router.current().params.calendarId;
		var calendarEvent = this;
		this.extendedProperties = {
			shared : {
				'wt_hoursWorked' : 8
			}
		};
		var options = {
			headers : {
				Authorization : "Bearer " + user.services.google.accessToken
			},
			data : this
		};
		var url = "https://www.googleapis.com/calendar/v3/calendars/" + calendarId +"/events/" + calendarEvent.id;
		HTTP.call("PUT", url, options, function(error, result) {
		});

	}
});
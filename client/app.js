Accounts.ui.config({
	requestPermissions: {
		google: ['https://www.googleapis.com/auth/calendar'],
	}, 
	forceApprovalPrompt: {google: true},
	passwordSignupFields: 'EMAIL_ONLY',
});


GoogleCalendar = {
	listCalendars : function() {
		var calendars = new ReactiveVar([]);
		var user = Meteor.user();
		if (user) {
			var options = {
				headers : {
					Authorization : "Bearer " + user.services.google.accessToken
				}
			};
			var url = "https://www.googleapis.com/calendar/v3/users/me/calendarList";
			HTTP.call("GET", url, options, function(error, result) {
				if (error === null) {
					calendars.set(result.data.items);
				}
			});
		}
		return calendars;
	},
	listEvents : function(calendarId) {

	}
};
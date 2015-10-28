var calendars = new ReactiveVar([]);

Template.calendars_list.rendered = function () {
	this.autorun(function () {
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
	});
};

Template.calendars_list.helpers({
	validCalendar : function (context, options) {
		return context.accessRole == 'owner';
	},
	calendars: function () {
		return calendars.get();
	}
});

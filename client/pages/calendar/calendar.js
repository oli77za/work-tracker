var reactiveCal = new ReactiveVar();
Router.route('/calendar/:calendarId', {
	name: 'calendar',
	layoutTemplate: 'dashboard_template',
	template: 'calendar',
	data : function () {
		return {calendar : reactiveCal.get()};
	},
	action : function() {
		var calendarId =  Router.current().params.calendarId;
		Meteor.call('getUserProfile', function(error, profile){
			var options = {
				headers : {
					Authorization : "Bearer " + profile.services.google.accessToken
				}
			};
			var url = "https://www.googleapis.com/calendar/v3/calendars/" + calendarId +"/events";
			HTTP.call("GET", url, options, function(error, result) {
				if (error === null) {
					reactiveCal.set(result.data);
				}
			});
		});
		this.render();
	}

}); 
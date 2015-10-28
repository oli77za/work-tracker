Template.login.onCreated(function() {
	this.userProfile = new ReactiveVar();
});

Template.login.onRendered(function() {
	var instance = this;
	this.autorun(function() {
		Meteor.call('getUserProfile', Meteor.userId() , function(error, result) {
			instance.userProfile.set(result);
		});
	});
});

Template.login.helpers({
	userPicture: function() {
		var profile = Template.instance().userProfile.get();
		return profile ? profile.services.google.picture : null;
	}
});
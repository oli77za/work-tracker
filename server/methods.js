Meteor.methods({
	getUserProfile: function() {
		var userProfile = Meteor.users.findOne({
			_id: Meteor.userId()
		});
		console.log(userProfile);
		return userProfile;
	}
});

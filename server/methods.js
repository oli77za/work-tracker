Meteor.methods({
	getUserProfile: function() {
		var userProfile = Meteor.users.findOne({
			_id: Meteor.userId()
		});
		return userProfile;
	}
});

Meteor.methods({
	getUserProfile: function(userId) {
		return Meteor.users.findOne({
			_id: userId
		});
	}
});

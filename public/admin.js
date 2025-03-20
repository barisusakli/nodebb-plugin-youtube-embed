define('admin/plugins/youtube-lite', ['settings', 'alerts'], function(Settings, alerts) {
	const ACP = {};

	ACP.init = function() {
		Settings.load('youtube-lite', $('.youtube-lite-settings'));
		$('#save').on('click', function() {
			Settings.save('youtube-lite', $('.youtube-lite-settings'), function() {
				alerts.alert({
					type: 'success',
					alert_id: 'youtube-lite-saved',
					title: 'Reload Required',
					message: 'Please reload your NodeBB to complete configuration of the Youtube Lite plugin',
					clickfn: function() {
						socket.emit('admin.reload');
					}
				})
			});
		});
	};
	return ACP;
});

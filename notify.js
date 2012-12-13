Do.ready(function() {
	setTimeout(function() {
		if (window.webkitNotifications.checkPermission() == 0) {
			window.extStatusHandlerBak = window.extStatusHandler;
			window.extStatusHandler = function(o){
			extStatusHandlerBak(o);
			o = JSON.parse(o);
			var song = o.song || {};
			var albumtitle = song.albumtitle;
			var title = song.title;
			var artist = song.artist;
			setTimeout(function() {
				if (song.ssid != null && o.type == 'start') {
					var notification = webkitNotifications.createNotification(song.picture, title, artist + ' - ' + albumtitle);
					notification.show();
					setTimeout(function() {
						notification.cancel();
					}, 2000);
				}
			}, 0);
		};
		}
	}, 0);
});
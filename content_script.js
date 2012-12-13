var script = document.createElement('script');
script.src = chrome.extension.getURL('notify.js');
script.type = 'text/javascript';
document.body.appendChild(script);
if (window.webkitNotifications.checkPermission() != 0) {
	var switchNotification = document.createElement('li');
	switchNotification.innerHTML = '<a href="#" onclick="window.webkitNotifications.requestPermission(function(){document.location.reload(true)});">打开提醒</a>';
	document.getElementById('user_play_record').appendChild(switchNotification);
}
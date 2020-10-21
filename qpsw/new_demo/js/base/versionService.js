/**
 * 版本升级
 * @param {Object} owner
 * @param {Object} $
 */
(function($, owner) {
	owner.checkVersion = function(callback) {
		console.log('升级版本')
		mui.getJSON("../manifest.json", null, function(manifest) {
			var versionNameClient = manifest.version.name;
			var versionCodeClient = Number(manifest.version.code);
			console.log('本地版本'+JSON.stringify(manifest.version))
			console.log("本地版本名称：" + versionNameClient + "，本地版本code：" + versionCodeClient);

			mui.getJSON(app.url("version/mh_version.json"), function(ret) {
				
				console.log(JSON.stringify(ret));
				var versionNameService = ret.versionName; 
				var versionCodeService = ret.versionCode;
				var urlVersionService = ret.urlVersion;
				app.setSetting('version_online',ret)
				console.log("服务器版本名称：" + versionNameService + "，服务器版本code：" + versionCodeService);

				if (versionCodeService > versionCodeClient) {
					var btnArray = ['取消', '是'];
					mui.confirm('是否升级新版本' + versionNameService + '？', '确认', btnArray, function(e) {
						if (e.index == 1) {
							plus.runtime.openURL(urlVersionService);
						}
					})
				}
			});
		});
	}
}(mui, window.versionService = {}));

/**
 * 版本升级
 * @param {Object} owner
 * @param {Object} $
 */
(function($, owner) {
	owner.getRiverNameList = function(url, location) {
		return new Promise(function(resolve, reject) {
			app.ajax(app.url(url), {
				"lonStr": location.lon,
				"latStr": location.lat
			}, function(ret) {
				if (ret.code == 200) {
					resolve(ret);
				} else {
					reject(ret);
				}
			});
		});
	}
}(mui, window.inspectOutfalReportInfoService = {}));

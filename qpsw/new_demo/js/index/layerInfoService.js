/**
 * 图层表业务逻辑类
 * @param {Object} $
 * @param {Object} owner
 */
(function($, owner) {
	owner.getLayerInfo = function() {
		console.log('55')
		return new Promise(function(resolve, reject) {
			//获取字典
			
			app.ajax(app.getQPCMMS_IP() + "getLayerInfo", null, function(ret) {
			// app.ajax3(app.url('getLayerInfo'), null, function(ret) {
				// console.log("图层数据：" + JSON.stringify(ret)+'url'+app.getQPCMMS_IP() + "getLayerInfo");
				if (ret.code == 200) {
					resolve(ret);
				} else {
					reject(ret);
				}
			});
		});
	};
}(mui, window.layerInfoService = {}));

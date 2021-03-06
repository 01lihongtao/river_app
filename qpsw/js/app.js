/**
 * (C) Yuny Software
 * http://www.yuny.top
 * 2018-05-19
 * 
 **/
(function($, owner) {
	/**
	 * 真实环境[上线版本，不允许打印Log]，值为true；
	 * 测试环境，值为false;
	 */
	var APP_LOG = false;
	var APP_URL = true;
	var IPV4 = "http://221.181.88.134:8081/mhswapi/";

	owner.APP_LOG = function() {
		return APP_LOG;
	}


	// 河道系统IP
	owner.getQPGIS_IP = function(path) {
		if (!path) path = ""

		if (!APP_URL) {
			// return "http://221.181.88.134:8081/mhswapi/"; //一期河道（测试）
			return "http://192.168.3.112/mhswapi/"
		} else {
			// return "http://221.181.88.134:8081/mhswapi/"; //一期河道（生产）
			return "http://192.168.3.112/mhswapi/"
		}
	}

	// 水闸系统IP
	owner.getQPCMMS_IP = function(path) {
		if (!path) path = ""
		if (!APP_URL) {
			return "http://221.181.88.134:8081/mhswpkapi/"; //三期大数据（测试）
		} else {
			return "http://221.181.88.134:8081/mhswpkapi/"; //三期大数据（生产）
		}
	}

	owner.getQPVMS_IP = function(path) {
		if (!path) path = ""
		console.log('看下判断url' + APP_URL)
		console.log('判断是哪个IP' + JSON.stringify(app.getSetting("what_switch_ip")))
		if (!APP_URL) {
			return "http://221.181.88.134:8081/bigdataapi/"; //二期水闸（测试）
		} else {
			return "http://116.228.75.54:8081/bigdataapi/"; //二期水闸（生产
		}
	}

	/**
	 * 手机端打印Log
	 */
	owner.route = function() {
		var url = location.href;

		if (!APP_LOG) {
			var arr = url.split("www");
			url = arr[1];

		} else {
			url = "";
		}
		return url;
	}

	// owner.url = function(path) {
	// 	if (APP_URL) {
	// 		return 'http://221.181.88.134:8081/mhswapi/' + path;
	// 		// return 'http://192.168.3.80:8203/mhswapi/' + path;  //惠奎
	// 		// return 'http://192.168.3.112:8203/mhswapi/'+path  //义星
	// 	} else {
	// 		console.log("url--->" + IPV4 + path);
	// 		return IPV4 + path;
	// 	}
	// }
	
	
	owner.url = function(path) {
	        if(APP_URL){
	            console.log("改变url--->" + app.getSetting("switch_ip") + path);
	            return app.getSetting("switch_ip") + path;
	        }else{
	            console.log("url--->" + IPV4 + path);
	            return IPV4 + path;
	        }
	    }

	owner.max_count_photos = 5;

	owner.count_progress = 0;

	owner.map_style = 'yellow'; // 'amap://styles/06ed4d3f4ce5552e9ecfd41eba21fc3d';

	owner.showProgressBar = function(bShow) {
		if (bShow || bShow == undefined) {
			if (owner.count_progress == 0) {
				mui('body').progressbar({
					progress: undefined
				}).show();
			}

			owner.count_progress++;
		} else {
			owner.count_progress--;

			if (owner.count_progress == 0) {
				setTimeout(function() {
					mui('body').progressbar().hide();
				}, 100)
			}
		}
	}
	/**
	 * 用户登录
	 **/
	owner.login = function(loginInfo, callback) {
		callback = callback || $.noop;
		loginInfo = loginInfo || {};
		loginInfo.account = loginInfo.account || '';
		loginInfo.password = loginInfo.password || '';
		if (loginInfo.account.length < 5) {
			return callback('账号最短为 5 个字符');
		}
		if (loginInfo.password.length < 6) {
			return callback('密码最短为 6 个字符');
		}
		var users = JSON.parse(localStorage.getItem('$users') || '[]');
		var authed = users.some(function(user) {
			return loginInfo.account == user.account && loginInfo.password == user.password;
		});
		if (authed) {
			return owner.createState(loginInfo.account, callback);
		} else {
			return callback('用户名或密码错误');
		}
	};

	owner.createState = function(name, callback) {
		var state = owner.getState();
		state.account = name;
		state.token = "token123456789";
		owner.setState(state);
		return callback();
	};

	/**
	 * 新用户注册
	 **/
	owner.reg = function(regInfo, callback) {
		callback = callback || $.noop;
		regInfo = regInfo || {};
		regInfo.account = regInfo.account || '';
		regInfo.password = regInfo.password || '';
		if (regInfo.account.length < 5) {
			return callback('用户名最短需要 5 个字符');
		}
		if (regInfo.password.length < 6) {
			return callback('密码最短需要 6 个字符');
		}
		if (!checkEmail(regInfo.email)) {
			return callback('邮箱地址不合法');
		}
		var users = JSON.parse(localStorage.getItem('$users') || '[]');
		users.push(regInfo);
		localStorage.setItem('$users', JSON.stringify(users));
		return callback();
	};

	/**
	 * 获取当前状态
	 **/
	owner.getState = function() {
		var stateText = localStorage.getItem('$state') || "{}";
		return JSON.parse(stateText);
	};

	/**
	 * 设置当前状态
	 **/
	owner.setState = function(state) {
		state = state || {};
		localStorage.setItem('$state', JSON.stringify(state));
		//var settings = owner.getSettings();
		//settings.gestures = '';
		//owner.setSettings(settings);
	};

	var checkEmail = function(email) {
		email = email || '';
		return (email.length > 3 && email.indexOf('@') > -1);
	};

	/**
	 * 找回密码
	 **/
	owner.forgetPassword = function(email, callback) {
		callback = callback || $.noop;
		if (!checkEmail(email)) {
			return callback('邮箱地址不合法');
		}
		return callback(null, '新的随机密码已经发送到您的邮箱，请查收邮件。');
	};

	/**
	 * 获取应用本地配置
	 **/
	owner.setSettings = function(settings) {
		settings = settings || {};
		localStorage.setItem('$settings', JSON.stringify(settings));
	}

	/**
	 * 设置应用本地配置
	 **/
	owner.getSettings = function() {
		var settingsText = localStorage.getItem('$settings') || "{}";
		return JSON.parse(settingsText);
	}

	owner.setSetting = function(key, value) {
		localStorage.setItem(key, value);
	}
	owner.setSetting2 = function(key, value) {
		plus.storage.setItem(key, value);
	}
	owner.getSetting2 = function(key) {
		return plus.storage.getItem(key) || "";
	}
	owner.removeSetting2 = function(key) {
		plus.storage.removeItem(key);
	}
	owner.removeSetting = function(key) {
		localStorage.removeItem(key);
	}

	owner.getSetting = function(key) {
		return localStorage.getItem(key) || "";
	}

	/**
	 * 获取本地是否安装客户端
	 **/
	owner.isInstalled = function(id) {
		if (id === 'qihoo' && mui.os.plus) {
			return true;
		}
		if (mui.os.android) {
			var main = plus.android.runtimeMainActivity();
			var packageManager = main.getPackageManager();
			var PackageManager = plus.android.importClass(packageManager)
			var packageName = {
				"qq": "com.tencent.mobileqq",
				"weixin": "com.tencent.mm",
				"sinaweibo": "com.sina.weibo"
			}
			try {
				return packageManager.getPackageInfo(packageName[id], PackageManager.GET_ACTIVITIES);
			} catch (e) {}
		} else {
			switch (id) {
				case "qq":
					var TencentOAuth = plus.ios.import("TencentOAuth");
					return TencentOAuth.iphoneQQInstalled();
				case "weixin":
					var WXApi = plus.ios.import("WXApi");
					return WXApi.isWXAppInstalled()
				case "sinaweibo":
					var SinaAPI = plus.ios.import("WeiboSDK");
					return SinaAPI.isWeiboAppInstalled()
				default:
					break;
			}
		}
	}

	owner.httpGet = function(_url, callback) {
		mui.ajax(_url, {
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 120000, //超时时间设置为10秒；
			//	headers:{'Content-Type':'application/json'},	
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
				'X-Requested-With': 'XMLHttpRequest'
			},
			//	headers:{'content-type':'multipart/form-data','X-Requested-With':'XMLHttpRequest'},
			processData: true,
			success: function(data) {
				callback(data);
			},
			error: function(xhr, type, errorThrown) {
				//				console.log(_url);
				//				console.log(xhr);
				//				console.log(JSON.stringify(xhr));
				//异常处理；
				callback({
					'return': 1,
					'error': type + " " + errorThrown
				});
			}
		});
	}

	owner.httpPost = function(_url, data, callback) {

	}

	owner.ajax = function(_url, mapInfo, callback) {
		var token = owner.getSetting('login_data')
		console.log('token的值111' + token)
		mui.ajax(_url, {
			data: mapInfo,
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 120000, //超时时间设置为120秒；
			//	headers:{'Content-Type':'application/json'},	
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
				'X-Requested-With': 'XMLHttpRequest',
				'token': token,
			},
			//	headers:{'content-type':'multipart/form-data','X-Requested-With':'XMLHttpRequest'},
			processData: true,
			success: function(data) {
				callback(data);
			},
			error: function(xhr, type, errorThrown) {
				//异常处理；
				callback({
					'return': 1,
					'error': type + " " + errorThrown
				});
			}
		});
	}

	owner.ajax2 = function(_url, mapInfo, callback) {
		var token = owner.getSetting('login_data')
		// console.log('token的值222' + token)
		mui.ajax(_url, {
			data: mapInfo,
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 120000, //超时时间设置为120秒；
			//	headers:{'Content-Type':'application/json'},	
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
				'token': token,
			},
			//	headers:{'content-type':'multipart/form-data','X-Requested-With':'XMLHttpRequest'},
			processData: true,
			success: function(data) {
				callback(data);
			},
			error: function(xhr, type, errorThrown) {
				//				console.log(_url);
				//				console.log(xhr);
				//				console.log(JSON.stringify(xhr));
				//异常处理；
				callback({
					'return': 1,
					'error': type + " " + errorThrown
				});
			}
		});
	}
	/**
	 * 检查参数合法性
	 * @param {Object} arg
	 */
	owner.checkLegality = function(arg) {
		if (arg == null || arg == "") {
			return false;
		}
		return true;
	}
	
	owner.ajax3 = function(_url, mapInfo, callback) {
		var token = owner.getSetting('login_data')
		console.log('token的值222' + token)
		mui.ajax('http://221.181.88.134:8081/mhswpkapi/', {
			data: mapInfo,
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 120000, //超时时间设置为120秒；
			//	headers:{'Content-Type':'application/json'},	
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
				'token': token,
			},
			//	headers:{'content-type':'multipart/form-data','X-Requested-With':'XMLHttpRequest'},
			processData: true,
			success: function(data) {
				callback(data);
			},
			error: function(xhr, type, errorThrown) {
				//				console.log(_url);
				//				console.log(xhr);
				//				console.log(JSON.stringify(xhr));
				//异常处理；
				callback({
					'return': 1,
					'error': type + " " + errorThrown
				});
			}
		});
	}
	//上传图片最大宽
	owner.maxWidth = function() {
		return 1000
	};
	owner.ajaxForm = function(_url, mapInfo, callback) {
		mui.ajax(_url, {
			data: mapInfo,
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 120000, //超时时间设置为10秒；
			//	headers:{'Content-Type':'application/json'},	
			//	headers:{'content-type':'application/x-www-form-urlencoded','X-Requested-With':'XMLHttpRequest'},
			headers: {
				'content-type': 'multipart/form-data',
				'X-Requested-With': 'XMLHttpRequest'
			},
			processData: true,
			success: function(data) {
				callback(data);
			},
			error: function(xhr, type, errorThrown) {
				//				console.log(xhr);
				//异常处理；
				callback({
					'return': 1,
					'error': type + " " + errorThrown
				});
			}
		});
	}

	owner.ajaxRaw = function(_url, strInfo, callback) {
		mui.ajax(_url, {
			data: strInfo,
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 20000, //超时时间设置为10秒；
			headers: {
				'Content-Type': 'text/plain',
				'X-Requested-With': 'XMLHttpRequest'
			},
			//		headers:{'content-type':'application/x-www-form-urlencoded','X-Requested-With':'XMLHttpRequest'},
			processData: true,
			success: function(data) {
				callback(data);
			},
			error: function(xhr, type, errorThrown) {
				//异常处理；
				callback({
					'return': 1,
					'error': type + " " + errorThrown
				});
			}
		});
	}

	/**
	 * 打开新的页面，并且传值
	 * @param {Object} str  需要打开的页面
	 * @param {Object} args 需要传递的参数
	 */
	owner.open = function(str, args) {
		mui.openWindow({
			url: str,
			id: str,
			preload: false,
			createNew: true,
			show: {
				aniShow: 'pop-in'
			},
			styles: {
				popGesture: 'hide'
			},
			waiting: {
				autoShow: true
			},
			extras: {
				args: args
			}
		});
	}

	owner.openBack = function(str) {
		mui.openWindow({
			url: str,
			id: str,
			preload: false,
			createNew: true,
			show: {
				aniShow: "slide-in-right"
			},
			styles: {
				popGesture: 'hide'
			},
			waiting: {
				autoShow: false
			}
		});
	}

	owner.getUrlParam = function(key) {
		var href = location.href;
		var arrParams = href.split("?");
		var strParam = "";
		if (arrParams.length > 1)
			strParam = arrParams[1];

		var arrSubParams = strParam.split("&");
		if (arrSubParams.length > 0) {
			for (var i = 0; i < arrSubParams.length; ++i) {
				var arrKeyValue = arrSubParams[i].split('=');
				if (arrKeyValue.length > 0) {
					if (arrKeyValue[0].toLowerCase() == key.toLowerCase()) {
						if (arrKeyValue.length > 1)
							return decodeURI(arrKeyValue[1]);

						return "";
					}
				}
			}
		}

		return "";
	}

	owner.getUserId = function() {
		var user_data = owner.getSetting('user_data');
		if (user_data)
			user_data = JSON.parse(user_data);

		if (user_data && user_data.id) {
			return user_data.id;
		}

		return '';
	}

	owner.getUserName = function() {
		var user_data = owner.getSetting('user_data');
		if (user_data)
			user_data = JSON.parse(user_data);

		if (user_data && user_data.description) {
			return user_data.description;
		} else if (user_data && user_data.username) {
			return user_data.username;
		}

		return '';
	}

	owner.getLoginName = function() {
		return owner.getSetting('login_name');
	}

	owner.isAdmin = function() {
		var user_data = owner.getSetting('user_data');
		if (user_data)
			user_data = JSON.parse(user_data);

		if (user_data && user_data.userType) {
			return user_data.userType == 3 || user_data.userType == 2;
		}

		return false;
	}

	owner.isJl = function() {
		var user_data = owner.getSetting('user_data');
		if (user_data)
			user_data = JSON.parse(user_data);

		if (user_data && user_data.userType) {
			return user_data.userType == 5;
		}

		return false;
	}

	owner.isXc = function() {
		var user_data = owner.getSetting('user_data');
		if (user_data)
			user_data = JSON.parse(user_data);

		if (user_data && user_data.userType) {
			return user_data.userType == 4;
		}

		return false;
	}

	owner.isYf = function() {
		var user_data = owner.getSetting('user_data');
		if (user_data)
			user_data = JSON.parse(user_data);

		if (user_data && user_data.userType) {
			return user_data.userType == 6;
		}

		return false;
	}

	// hd_xc
	// hd_jl
	// hd_admin
	// sz_xc
	// sz_yf
	// sz_admin
	owner.getDepartUserRole = function() {
		// role name
		var user_data = owner.getSetting('user_data');
		if (user_data)
			user_data = JSON.parse(user_data);

		var strDepartment = "";
		var strUserType = "";
		if (user_data && user_data.userType) {
			switch (user_data.userType) {
				case 2:
					strUserType = "web测试";
					break;
				case 3:
					strUserType = "管理员";
					break;
				case 4:
					strUserType = "巡查员";
					break;
				case 5:
					strUserType = "监理员";
					break;
				case 6:
					strUserType = "养护单位";
					break;
				default:
					strUserType = "其它用户类型" + user_data.userType;
					break;
			}
		}

		if (user_data && user_data.departmentName)
			strDepartment = user_data.departmentName;

		if (strDepartment == '' && strUserType == '')
			return '';

		var str = '';
		if (strDepartment)
			str += strDepartment;

		if (str && strUserType)
			str += " - ";

		if (strUserType)
			str += strUserType;

		return str;
	}

	owner.getUserRole = function() {
		// role name
		var user_data = owner.getSetting('user_data');
		if (user_data)
			user_data = JSON.parse(user_data);

		var strUserType = "";
		if (user_data && user_data.userType) {
			switch (user_data.userType) {
				case 2:
					strUserType = "web测试";
					break;
				case 3:
					strUserType = "管理员";
					break;
				case 4:
					strUserType = "巡查员";
					break;
				case 5:
					strUserType = "监理员";
					break;
				case 6:
					strUserType = "养护单位";
					break;
				default:
					strUserType = "其它用户类型" + user_data.userType;
					break;
			}
		}

		return strUserType;
	}

	// {"code":0,"data":{"departmentName":"水闸科","departmentId":47,"id":123,"userType":5,"userRegionId":"00","username":"szkjly"},"desc":"登录成功"}
	owner.getDepartmentName = function() {
		var user_data = owner.getSetting('user_data');
		if (user_data)
			user_data = JSON.parse(user_data);
		if (user_data && user_data.departmentName) {
			return user_data.departmentName;
		}

		return '';
	}

	owner.getDepartmentId = function() {
		var user_data = owner.getSetting('user_data');
		if (user_data)
			user_data = JSON.parse(user_data);
		if (user_data && user_data.departmentId) {
			return user_data.departmentId;
		}

		return '';
	}

	owner.getUserRegionId = function() {
		var user_data = owner.getSetting('user_data');
		if (user_data)
			user_data = JSON.parse(user_data);

		if (user_data && user_data.userRegionId) {
			return user_data.userRegionId;
		}

		return '';
	}

	owner.getCompanyName = function() {
		var user_data = owner.getSetting('user_data');
		if (user_data)
			user_data = JSON.parse(user_data);

		if (user_data && user_data.companyName) {
			return user_data.companyName;
		}

		return '';
	}

	owner.isHdk = function() {
		return owner.getDepartmentId() == 46;
	}

	owner.isSzk = function() {
		return owner.getDepartmentId() == 47;
	}

	owner.isTest = function() {
		return owner.getUserRole() == 'web测试';
	}

	// 河道科 - 巡查员
	owner.isHdXc = function() {
		return owner.getDepartUserRole() == "河道科 - 巡查员";
	}

	// 河道科 - 监理员
	owner.isHdJl = function() {
		return owner.getDepartUserRole() == "河道科 - 监理员";
	}

	// 河道科 - 管理员
	owner.isHdAdmin = function() {
		return owner.getDepartUserRole() == "河道科 - 管理员";
	}

	// 河道科 - 养护单位
	owner.isHdYh = function() {
		return owner.getDepartUserRole() == "河道科 - 养护单位";
	}

	// 水闸科 - 巡查员
	owner.isSzXc = function() {
		return owner.getDepartUserRole() == "水闸科 - 巡查员";
	}

	// 水闸科 - 养护单位
	owner.isSzYh = function() {
		return owner.getDepartUserRole() == "水闸科 - 养护单位";
	}

	// 水闸科 - 监理员
	owner.isSzJl = function() {
		return owner.getDepartUserRole() == "水闸科 - 监理员";
	}

	// 水闸科 - 管理员
	owner.isSzAdmin = function() {
		return owner.getDepartUserRole() == "水闸科 - 管理员";
	}

	owner.getUserToken = function() {
		var user_data = owner.getSetting('user_data');
		if (user_data)
			user_data = JSON.parse(user_data);
		if (user_data && user_data.userToken) {
			return user_data.userToken;
		}

		return '';
	}

	owner.isLogin = function() {
		return owner.getUserRole() != '';
	}

	owner.formatUnixtime = function(value) {
		var unixTimestamp = null;
		if (value)
			unixTimestamp = new Date(value);
		else
			unixTimestamp = new Date();
		return unixTimestamp.toLocaleString();
	}

	owner.plusZero = function(value) {
		if (value < 10)
			return "0" + value;

		return value;
	}

	owner.formatUnixtime2 = function(value, hasSecond) {
		var unixTimestamp = null;
		if (value)
			unixTimestamp = new Date(value);
		else
			unixTimestamp = new Date();

		var strDate = unixTimestamp.getFullYear() + '-' + owner.plusZero((unixTimestamp.getMonth() + 1)) + '-' + owner.plusZero(
			unixTimestamp.getDate());
		strDate += " " + owner.plusZero(unixTimestamp.getHours()) + ":" + owner.plusZero(unixTimestamp.getMinutes());

		if (hasSecond)
			strDate += ":" + owner.plusZero(unixTimestamp.getSeconds());

		return strDate;
	}

	owner.formatUnixtime3 = function(value, plusDays, bZeroTime) {
		var unixTimestamp = new Date(value);
		if (value)
			unixTimestamp = new Date(value);
		else
			unixTimestamp = new Date();

		if (plusDays) {
			unixTimestamp.setTime(unixTimestamp.getTime() + plusDays * 60 * 60 * 24 * 1000);
		}

		var strDate = unixTimestamp.getFullYear() + '-' + owner.plusZero((unixTimestamp.getMonth() + 1)) + '-' + owner.plusZero(
			unixTimestamp.getDate());

		if (bZeroTime) {
			strDate += " 00:00:00";
		} else {
			strDate += " " + owner.plusZero(unixTimestamp.getHours()) + ":" + owner.plusZero(unixTimestamp.getMinutes());
			strDate += ":" + owner.plusZero(unixTimestamp.getSeconds());
		}

		return strDate;
	}

	owner.formatSeconds = function(value) {
		var result = [0, 0, 0];
		var secondTime = parseInt(value); // 秒
		var minuteTime = 0; // 分
		var hourTime = 0; // 小时
		if (secondTime > 60) { //如果秒数大于60，将秒数转换成整数
			//获取分钟，除以60取整数，得到整数分钟
			minuteTime = parseInt(secondTime / 60);
			//获取秒数，秒数取佘，得到整数秒数
			secondTime = parseInt(secondTime % 60);
			//如果分钟大于60，将分钟转换成小时
			if (minuteTime > 60) {
				//获取小时，获取分钟除以60，得到整数小时
				hourTime = parseInt(minuteTime / 60);
				//获取小时后取佘的分，获取分钟除以60取佘的分
				minuteTime = parseInt(minuteTime % 60);
			}
		}

		result[2] = parseInt(secondTime);

		if (minuteTime > 0) {
			result[1] = parseInt(minuteTime);
		}
		if (hourTime > 0) {
			result[0] = parseInt(hourTime);
		}
		return result;
	}

	owner.formatSecondsStr = function(value) {
		var arr = owner.formatSeconds(value);
		var str = '';
		if (arr[0] > 0)
			str += arr[0] + '小时';
		if (arr[1] > 0)
			str += arr[1] + '分';
		if (arr[2] > 0)
			str += arr[2] + '秒';

		if (str == '')
			str = '0小时';

		return str;
	}

	owner.minute2hour = function(val) {
		return parseInt(val * 100 / 60) / 100.0;
	}

	/**
	 * 获取日期 格式yyyy-MM-dd hh:mm:ss
	 */
	owner.getFormatDay = function() {
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();
		day = "" + year + '-' + owner.plusZero(month) + '-' + owner.plusZero(day) + ' ' +
			owner.plusZero(hour) + ':' + owner.plusZero(minute) + ':' + owner.plusZero(second);
		return day;
	}


	owner.getDay = function(value) {
		var unixTimestamp = null;
		if (value)
			unixTimestamp = new Date(value);
		else
			unixTimestamp = new Date();

		var strYear = unixTimestamp.getFullYear();
		var strMonth = unixTimestamp.getMonth() + 1;

		return strYear + '-' + owner.plusZero(strMonth) + '-' + owner.plusZero(unixTimestamp.getDate());
	}

	owner.umtime = function() {
		return (new Date()).getTime();
	}

	owner.utime = function() {
		return parseInt((new Date()).getTime() / 1000);
	}

	owner.getWeekBegin = function(value) {
		var unixTimestamp = null;
		if (value)
			unixTimestamp = new Date(value);
		else
			unixTimestamp = new Date();

		var uTime = new Date(unixTimestamp.getTime() - unixTimestamp.getDay() * 24 * 60 * 60 * 1000);

		return uTime.getFullYear() + '-' + owner.plusZero(uTime.getMonth() + 1) +
			"-" + owner.plusZero(uTime.getDate());
	}

	owner.getWeekEnd = function(value) {
		var unixTimestamp = null;
		if (value)
			unixTimestamp = new Date(value);
		else
			unixTimestamp = new Date();

		var uTime = new Date(unixTimestamp.getTime() + (6 - unixTimestamp.getDay()) * 24 * 60 * 60 * 1000);

		return uTime.getFullYear() + '-' + owner.plusZero(uTime.getMonth() + 1) +
			"-" + owner.plusZero(uTime.getDate());
	}

	owner.getMonthBegin = function(value) {
		var unixTimestamp = null;
		if (value)
			unixTimestamp = new Date(value);
		else
			unixTimestamp = new Date();

		var strYear = unixTimestamp.getFullYear();
		var strMonth = unixTimestamp.getMonth() + 1;

		return strYear + '-' + owner.plusZero(strMonth) + '-01';
	}

	owner.getMonthEnd = function(value) {
		var unixTimestamp = null;
		if (value)
			unixTimestamp = new Date(value);
		else
			unixTimestamp = new Date();

		var strYear = unixTimestamp.getFullYear();
		var strMonth = unixTimestamp.getMonth() + 1;

		// next month
		if (strMonth == 12) {
			strMonth = 1;
			strYear++;
		} else {
			strMonth++;
		}

		var dayNextMonthBegin = new Date(Date.UTC(strYear, strMonth - 1, 1, 0, 0, 0));
		dayNextMonthBegin.setHours(0);
		var dayMonthEnd = new Date(dayNextMonthBegin.getTime() - 100 * 1000);

		return dayMonthEnd.getFullYear() + '-' + owner.plusZero(dayMonthEnd.getMonth() + 1) +
			"-" + owner.plusZero(dayMonthEnd.getDate());
	}

	owner.getSeasonBegin = function(value) {
		var unixTimestamp = null;
		if (value)
			unixTimestamp = new Date(value);
		else
			unixTimestamp = new Date();

		var strYear = unixTimestamp.getFullYear();
		var strMonth = unixTimestamp.getMonth() + 1;

		if (strMonth <= 3) {
			return strYear + '-01-01';
		} else if (strMonth <= 6) {
			return strYear + '-04-01';
		} else if (strMonth <= 9) {
			return strYear + '-07-01';
		}

		return strYear + '-10-01';
	}

	owner.getSeasonEnd = function(value) {
		var unixTimestamp = null;
		if (value)
			unixTimestamp = new Date(value);
		else
			unixTimestamp = new Date();

		var strYear = unixTimestamp.getFullYear();
		var strMonth = unixTimestamp.getMonth() + 1;

		if (strMonth <= 3) {
			return strYear + '-03-30';
		} else if (strMonth <= 6) {
			return strYear + '-06-30';
		} else if (strMonth <= 9) {
			return strYear + '-09-30';
		}

		return strYear + '-12-31';
	}

	owner.getYearBegin = function(value) {
		var unixTimestamp = null;
		if (value)
			unixTimestamp = new Date(value);
		else
			unixTimestamp = new Date();

		var strYear = unixTimestamp.getFullYear();
		var strMonth = unixTimestamp.getMonth() + 1;

		return strYear + '-01-01';
	}

	owner.getYearEnd = function(value) {
		var unixTimestamp = null;
		if (value)
			unixTimestamp = new Date(value);
		else
			unixTimestamp = new Date();

		var strYear = unixTimestamp.getFullYear();
		var strMonth = unixTimestamp.getMonth() + 1;

		return strYear + '-12-31';
	}

	owner.formatMeters = function(value) {
		if (value || value == 0)
			return value / 1000.0;

		return ' ';
	}

	owner.formatPercent = function(value) {
		if (value) {
			return parseInt(value * 100) / 100.0;
		}
		return 0;
	}

	owner.switch = function(strId, bOn, bInit) {
		var obj = document.getElementById(strId);
		if (bInit) {
			if (bOn) {
				obj.classList.add('mui-active');
			} else {
				obj.classList.remove('mui-active');
			}
		} else {
			if (bOn) {
				if (!obj.classList.contains('mui-active')) {
					mui('#' + strId).switch().toggle();
				}
			} else {
				if (obj.classList.contains('mui-active')) {
					mui('#' + strId).switch().toggle();
				}
			}
		}
	}

	owner.eventClickYear = function(ctrlBtn, callback) {
		// years
		var arrData = new Array();

		var currentYear = (new Date()).getFullYear();
		for (var i = 0; i < 5; ++i) {
			arrData.push({
				value: (currentYear - i),
				text: (currentYear - i) + "年"
			});
		}

		var yearsPicker = new mui.PopPicker();
		yearsPicker.setData(arrData);

		ctrlBtn.addEventListener('tap', function() {
			yearsPicker.show(function(items) {
				ctrlBtn.innerText = items[0].text;
				if (callback) {
					callback(items[0].value);
				}
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		})
	}

	owner.getGeoAddress = function(lon, lat, ctrl_return) {
		var geocoder = new AMap.Geocoder();
		var arrLatLon = [lon, lat];
		geocoder.getAddress(arrLatLon, function(status, result) {
			if (status === 'complete' && result.info === 'OK') {
				ctrl_return.innerHTML = result.regeocode.formattedAddress;
			}
		})
	}

	owner.pickDate = function(_self, hasSecond) {
		if (_self.picker) {
			_self.picker.show(function(rs) {
				_self.innerText = rs.text;
				if (hasSecond)
					_self.innerText += ":00";
				_self.picker.dispose();
				_self.picker = null;
			});
		} else {
			var optionsJson = _self.getAttribute('data-options') || '{}';
			var options = JSON.parse(optionsJson);
			var id = _self.getAttribute('id');
			/*
			 * 首次显示时实例化组件
			 * 示例为了简洁，将 options 放在了按钮的 dom 上
			 * 也可以直接通过代码声明 optinos 用于实例化 DtPicker
			 */
			_self.picker = new mui.DtPicker(options);
			_self.picker.show(function(rs) {
				/*
				 * rs.value 拼合后的 value
				 * rs.text 拼合后的 text
				 * rs.y 年，可以通过 rs.y.vaue 和 rs.y.text 获取值和文本
				 * rs.m 月，用法同年
				 * rs.d 日，用法同年
				 * rs.h 时，用法同年
				 * rs.i 分（minutes 的第二个字母），用法同年
				 */
				_self.innerText = rs.text;
				if (hasSecond)
					_self.innerText += ":00";
				/* 
				 * 返回 false 可以阻止选择框的关闭
				 * return false;
				 */
				/*
				 * 释放组件资源，释放后将将不能再操作组件
				 * 通常情况下，不需要示放组件，new DtPicker(options) 后，可以一直使用。
				 * 当前示例，因为内容较多，如不进行资原释放，在某些设备上会较慢。
				 * 所以每次用完便立即调用 dispose 进行释放，下次用时再创建新实例。
				 */
				_self.picker.dispose();
				_self.picker = null;
			});
		}
	}

	owner.inputCtrl = function(ctrl, e, str, initValue) {
		e.detail.gesture.preventDefault(); //修复iOS 8.x平台存在的bug，使用plus.nativeUI.prompt会造成输入法闪一下又没了
		var btnArray = ['取消', '确定'];
		mui.prompt(str, str, '修改', btnArray, function(e) {
			if (e.index == 1) {
				if (e.value == '')
					ctrl.innerText = initValue;
				else
					ctrl.innerText = e.value;
			}
		}, 'div')

		if (initValue != ctrl.innerText)
			document.querySelector('.mui-popup-input input').value = ctrl.innerText;
	}

	var maxFiles = 0;
	var loadFiles = 0;
	var formData = null;
	var xhr = null;

	function onLoadFileRead() {
		loadFiles++;
		//		console.log(loadFiles);
		if (maxFiles == loadFiles) {
			//			console.log('send');
			xhr.send(formData);
		}
	}

	owner.uploadFiles = function(arr, url, key, mapData, callback) {
		xhr = new XMLHttpRequest(); //第一步    

		//定义表单变量    
		//    var file = document.getElementById('file').files;    
		//console.log(file.length);    
		//新建一个FormData对象    
		formData = new FormData(); //++++++++++
		//      console.log(mapData.forensicsId);
		formData.append('forensicsId', mapData.forensicsId);
		//追加文件数据  
		loadFiles = 0;
		maxFiles = arr.length;
		/*
        for(i=0; i<arr.length; i++){
//      	console.log(key + "["+i+"]");
//      	console.log(arr[i]);
        	
        	var fr = new FileReader();
        	var new_file = new File([],arr[i]);
        	
        	fr.onload = onLoadFileRead;
        	
        	fr.readAsArrayBuffer(new_file);
        	
             formData.append(key + "["+i+"]", new_file); //++++++++++    
        }*/

		//formData.append("file", file[0]); //++++++++++    

		//post方式    
		xhr.open('POST', url); //第二步骤 
		xhr.setRequestHeader('Content-Type', 'multipart/form-data');
		//发送请求    
		xhr.send(formData); //第三步骤    
		//ajax返回    
		xhr.onreadystatechange = function() { //第四步    
			if (callback) {
				callback(xhr, xhr.status);
			}
		};

		//设置超时时间    
		xhr.timeout = 100000;
		xhr.ontimeout = function(event) {
			if (callback)
				callback(xhr, xhr.status);
		}
	}

	owner.isEmpty = function(val) {
		return val == undefined || val == null || val == '';
	}

	owner.uuid = function() {
		function S4() {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		}
		return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
	}

	owner.getError = function(ret) {
		return ret.error || ret.data || ret.message || ret.desc;
	}

	owner.compare = function(curV, reqV) {
		if (curV && reqV) {
			//将两个版本号拆成数字
			var arr1 = curV.split('.'),
				arr2 = reqV.split('.');
			var minLength = Math.min(arr1.length, arr2.length),
				position = 0,
				diff = 0;
			//依次比较版本号每一位大小，当对比得出结果后跳出循环（后文有简单介绍）
			while (position < minLength && ((diff = parseInt(arr1[position]) - parseInt(arr2[position])) == 0)) {
				position++;
			}
			diff = (diff != 0) ? diff : (arr1.length - arr2.length);
			//若curV大于reqV，则返回true
			return diff > 0;
		} else {
			//输入为空
			console.log("版本号不能为空");
			return false;
		}
	}
}(mui, window.app = {}));

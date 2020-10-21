/**
 * 地图业务逻辑类
 * @param {Object} $
 * @param {Object} owner
 */
(function($, owner) {
	var tiandi1 = null;
	var tiandi2 = null;
	var tiandi3 = null;
	var qp1 = null;
	var qp2 = null;
	var qp3 = null;
	var qp4 = null;
	var qp5 = null;
	var map = null;
	var ayersPolygon = {}

	var layersPolygon = {}
	var vectorLayer = null;
	var vectorSource = null; //船舶
	var vectorSource2 = null; //人员
	var vectorSource3 = null; //围栏
	var reportSerialId = null;
	var mh_type = null; //类型
	var mapMoveendListener = null;
	var ship_speed = null;
	var ship_lon = null;
	var ship_lat = null;
	var personName_new = null
	var lon = null;
	var lat = null;
	owner.initMap = function(dituCenter, getGeoResultInfo, layerInfos) {
		// console.log(JSON.stringify(layerInfos))
		//屏幕中央取点图标样式设置
		var width = document.documentElement.clientWidth;
		var height = document.documentElement.clientHeight;
		var top = "" + (height / 2 - 40) + "px";
		var left = "" + (width / 2 - 20) + "px";
		// console.log(top+" , "+left);
		dituCenter.css({
			"top": top,
			"left": left,
			"position": "absolute",
			"z-index": "999",
			"width": "40px",
			"height": "40px"
		});
		var baoshan = new ol.proj.fromLonLat([121.381709, 31.112813]);
		for (var layerInfo of layerInfos) {
			// console.log("--->"+JSON.stringify(layerInfo))
			if (layerInfo.target == 'tianditu1') {
				//天地图底图---基本图层
				tiandi1 = new ol.layer.Tile({
					source: new ol.source.XYZ({
						url: layerInfo.layerUrl,
					})
				});
			}
			if (layerInfo.target == 'tianditu2') {
				//天地图底图---矢量图
				tiandi2 = new ol.layer.Tile({
					source: new ol.source.XYZ({
						url: layerInfo.layerUrl,
					})
				});
			}
			if (layerInfo.target == 'tianditu3') {
				//天地图遥感影像
				tiandi3 = new ol.layer.Tile({
					source: new ol.source.XYZ({
						url: layerInfo.layerUrl,
					})
				});
			}
			if (layerInfo.target == 'mh_shuixi') {
				//闵行水系图
				qp5 = new ol.layer.Tile({
					source: new ol.source.TileWMS({
						url: layerInfo.layerUrl,
						params: {
							'layers': layerInfo.layerName,
							'singleTile': false
						}
					})
				});
				qp5.setVisible(true);
			}
		}
		map = new ol.Map({
			//这个target对应一个div的id
			target: 'map',
			layers: [
				//天地图底图
				tiandi1,
				tiandi2,
				tiandi3,
				qp5 //闵行水系图
			],
			controls: ol.control.defaults({
				zoom: false,
			}).extend([]),
			view: new ol.View({
				//禁止旋转
				enableRotation: false,
				//地图中心点
				center: baoshan,
				//缩放级别
				zoom: 11,
				//地图缩放最小级别
				minZoom: 1,
				//地图缩放最大级别
				maxZoom: 18
			})
		});
		//数据源
		vectorSource = new ol.source.Vector();
		vectorSource2 = new ol.source.Vector(); //人员
		vectorSource3 = new ol.source.Vector(); //围栏
		//图层
		vectorLayer = new ol.layer.Vector({
			visible: true,
			key: 1,
			name: "船舶图层",
			source: vectorSource
		});
		vectorLayer2 = new ol.layer.Vector({
			visible: true,
			key: 2,
			name: "人员图层",
			source: vectorSource2
		});
		vectorLayer3 = new ol.layer.Vector({
			visible: true,
			key: 3,
			name: "围栏图层",
			source: vectorSource3
		});
		//地图添加图层
		map.addLayer(vectorLayer);
		map.addLayer(vectorLayer2);
		map.addLayer(vectorLayer3);
		//获取并添加要素
		this.initVectorLayer(map, vectorSource, vectorLayer);
		this.initVectorLayer(map, vectorSource2, vectorLayer2); //人员
		this.initVectorLayer(map, vectorSource3, vectorLayer3); //人员
		//点击要素弹出框设置
		this.initPopup(map, vectorSource, reportSerialId);
		this.initPopup(map, vectorSource2, reportSerialId);
		//开始定位
		// this.nativeLocation();
		//地图移动监听
		this.mapMoveListener(getGeoResultInfo);
	};
	owner.closeMapMoveListener = function() {
		ol.Observable.unByKey(mapMoveendListener);
		map.un("moveend", function(evt) {
			console.log("我执行了关闭地图移动！");
		});
	}
	owner.mapMoveListener = function(getGeoResultInfo) {
		// 地图停止移动监听
		mapMoveendListener = map.on("moveend", function(evt) {
			var extent = evt.frameState.extent;
			var lon = (extent[0] + extent[2]) / 2;
			var lat = (extent[1] + extent[3]) / 2
			// console.log("lon=" + lon + " ,lat=" + lat);

			// EPSG:4326 (WGS84，即GPS)，这里将EPSG:3857坐标转为EPSG:4326，返回数组形式
			var lnglat = ol.proj.transform([lon, lat], 'EPSG:3857', 'EPSG:4326');
			// console.log("天地图坐标--->"+lnglat);
			//WGS-84 to GCJ-02
			var latlngJson = GPS.gcj_encrypt(lnglat[1], lnglat[0]);
			var lnglatArr = [latlngJson.lng, latlngJson.lat];
			// console.log("latlngJson--->"+JSON.stringify(latlngJson));
			// console.log("高德地图坐标--->"+lnglatArr);

			AMap.plugin('AMap.Geocoder', function() {
				var geocoder = new AMap.Geocoder({});
				geocoder.getAddress(lnglatArr, function(status, result) {
					if (status === 'complete' && result.info === 'OK') {
						// result为对应的地理位置详细信息
						console.log("详细的地理位置信息--->" + JSON.stringify(result));
						var geocoderResult = {};
						geocoderResult.lon = lnglat[0];
						geocoderResult.lat = lnglat[1];
						geocoderResult.address = result.regeocode.formattedAddress; //详细地址
						geocoderResult.province = result.regeocode.addressComponent.province; //市
						geocoderResult.district = result.regeocode.addressComponent.district; //区
						geocoderResult.township = result.regeocode.addressComponent.township; //镇
						getGeoResultInfo(geocoderResult);
					}
				})
			}) //end for 经纬度逆向地理编码
		}); //end for 移动监听
	}
	owner.nativeLocation = function() {
		var context = plus.android.importClass("android.content.Context");
		var locationManager = plus.android.importClass("android.location.LocationManager");
		var main = plus.android.runtimeMainActivity();
		var mainSvr = main.getSystemService(context.LOCATION_SERVICE);
	
		// 定位方式有network和GPS两种  
		var locationListener = plus.android.implements("android.location.LocationListener", {
			"onLocationChanged": function(location) {
				var latitude = plus.android.invoke(location, "getLatitude");
				var longitude = plus.android.invoke(location, "getLongitude");
				var gpsLocation = "lat:" + latitude + ",lng:" + longitude;
	
				console.log("gpsLocation--->" + gpsLocation);
				// locationManager.removeGpsStatusListener(this);
				setMapCenter(latitude, longitude);
			},
			"onProviderEnabled": function(res) {},
			"onProviderDisabled": function(res) {
				console.log("无法获取GPS模块，将无法获取经纬度信息！");
				alert("无法获取GPS模块，将无法获取经纬度信息！");
			},
			"onStatusChanged": function(p, s, e) {
				console.log(p);
			}
		});
		// locationManager.GPS_PROVIDER 只使用GPS，locationManager参数可以自己百度  
		// mainSvr.requestLocationUpdates(locationManager.GPS_PROVIDER, 0, 0, locationListener);  
		mainSvr.requestSingleUpdate(locationManager.GPS_PROVIDER, locationListener, null);
	}
	
	/**
	 * 设置定位后的视图中心
	 * @param {Object} latitude
	 * @param {Object} longitude
	 */
	function setMapCenter(latitude, longitude) {
		var centerLatLng = new ol.proj.fromLonLat([longitude, latitude]);
		map.getView().setCenter(centerLatLng);
		map.getView().setZoom(18);
	}
	//弹出框控件
	var container = document.getElementById('popup');
	//显示内容控件
	var content = document.getElementById('popup-content');
	//关闭按钮
	var closer = document.getElementById('popup-closer');
	//覆盖物
	var overlay = new ol.Overlay({
		element: container,
		autoPan: true,
		autoPanAnimation: {
			duration: 250
		}
	});
	owner.test = function(value) {
		// ol.proj.fromLonLat  [13510470.084627824,3648980.103702431]
		overlay.setPosition(ol.proj.fromLonLat([121.381709, 31.112813]));
		console.log('这是传过来的值' + JSON.stringify(value))
		if (value.objectType == 100501) {
			mh_type = 1
		} else if (value.objectType == 100507) {
			mh_type = 0
		}
		reportSerialId = value.id
		content.innerHTML =
			'<p>' + '信息展示' + '</p>' +
			// '<code>' + '时间：' + value.locationTime + '</code>' +
			'<code style="white-space: nowrap;display: block;">' + '名称：' + value.objectName +
			'</code>' +
			'<code>' + '经纬度：' + (value.lon + ',' + (value.lat)) +
			'</code>'
	}
	owner.test2 = function(value,type) {
		// ol.proj.fromLonLat  [13510470.084627824,3648980.103702431]
		overlay.setPosition(ol.proj.fromLonLat([121.381709, 31.112813]));
		// overlay.setPosition(ol.proj.fromLonLat([value.lon, value.lat]));
		console.log('这是传过来的值' + JSON.stringify(value))
		// if (value.objectType == 100501) {
		// 	mh_type = 1
		// } else if (value.objectType == 100507) {
		// 	mh_type = 0
		// }
		reportSerialId = value.id
		content.innerHTML =
			'<p>' + '信息展示' + '</p>' +
			'<code>' + '时间：' + (type=='1'? value.gmtCreate:value.gmtModified)  + '</code>' +
			'<code style="white-space: nowrap;display: block;">' + '名称：' + (type=="1"?value.name:value.objectName) +
			'</code>' +
			'<code>' + '经纬度：' + (value.lon + ',' + (value.lat)) +
			'</code>'
	}
	
	
	
	
	/**
	 * 点击要素弹出框设置
	 * @param {Object} map
	 */
	owner.initPopup = function() {
		//添加覆盖物
		map.addOverlay(overlay)
		//关闭按钮点击监听
		closer.onclick = function() {
			overlay.setPosition(undefined); //关键代码
			closer.blur();
			return false;
		};
		// 这是导航
		//导航按钮监听
		navi.onclick = function() {
			console.log('经纬度' + lon)
			mui.openWindow({
				url: 'https://uri.amap.com/marker?position=' + lon + ',' + lat + '&name=' + personName_new +'&callnative=1&src=webapp.pushi.sanqiApp',
			})
			// app.open("navi.html?position="+JSON.stringify(position));
			// }else{
			// mui.toast("正在获取当前位置信息,请稍等");
			// }
		};
		// 轨迹  	
		travel.onclick = function() {
			app.open("report_trace_mh.html?id=" + reportSerialId + "&type=" + mh_type);
		}
		
		// 尾迹  
		wake.onclick = function() {
			console.log('尾迹-------------')
			app.open("report_wake_mh.html?id=" + reportSerialId + "&type=" + mh_type);
		}
		//绑定地图的多边形点击事件
		map.on('singleclick', function(e) {
			var coordinate = e.coordinate;
			console.log(coordinate)
			var extent = [coordinate[0] - 100, coordinate[1] - 100, coordinate[0] + 100, coordinate[1] + 100];
			var flag = true;
			console.log(extent)
			vectorSource.forEachFeatureIntersectingExtent(extent, function(feature) {
				content.innerHTML =
					'<p>' + '船舶信息' + '</p>' +
					'<code>' + '时间：' + feature.get("reportFoundtime") + '</code>' +
					'<code style="white-space: nowrap;display: block;">' + '名称：' + feature.get("personName") +
					'</code>' +
					'<code>' + '速度：' + feature.get("ship_speed") + '</code> <br>' +
					'<code>' + '经纬度：' + (feature.get("ship_lon").toFixed(4) + ',' + (feature.get("ship_lat").toFixed(4))) +
					'</code>'
				overlay.setPosition(coordinate);
				lon = feature.get("ship_lon");
				lat = feature.get("ship_lat");
				personName_new = feature.get("personName")
				reportSerialId = feature.get("reportSerialId");
				mh_type = 1
				flag = true;
			});
			// 这是人员popup
			vectorSource2.forEachFeatureIntersectingExtent(extent, function(feature) {
				content.innerHTML =
					'<p>' + '人员信息' + '</p>' +
					'<code>' + '时间：' + feature.get("reportFoundtime") + '</code>' +
					'<code style="white-space: nowrap;display: block;">' + '名称：' + feature.get("personName") +
					'</code>' +
					'<code>' + '速度：' + feature.get("ship_speed") + '</code> <br>' +
					'<code>' + '经纬度：' + (feature.get("ship_lon").toFixed(4) + ',' + (feature.get("ship_lat").toFixed(4))) +
					'</code>'
				overlay.setPosition(coordinate);
				lon = feature.get("ship_lon");
				lat = feature.get("ship_lat");
				personName_new = feature.get("personName")
				reportSerialId = feature.get("reportSerialId");
				mh_type = 0
				flag = true;
			});
			if (!flag) {
				overlay.setPosition(undefined); //关键代码
				closer.blur();
			}
		});
		//内容体点击监听
		content.addEventListener('click', function() {
			overlay.setPosition(undefined); //关键代码
			closer.blur();

			console.log('内容监听')

			// if (reportSerialId != null) {
			// 	app.open("mine_detail.html?reportSerialId=" + reportSerialId);
			// } else {
			// 	mui.toast("取证信息为空！");
			// }
		})
	}
	// 船舶清除
	owner.clearLayer = function() {
		//重设地图数据源
		vectorSource.clear();
	}
	// 人员清除
	owner.clear_person_Layer = function() {
		//重设地图数据源
		vectorSource2.clear();
	}

	owner.clear_review_Layer = function() {
		//重设地图数据源
		vectorSource3.clear();
	}
	//这是添加船舶的信息 
	owner.initVectorLayer = function() {
		//重设地图数据源
		vectorSource.clear();
		//清空地图数据源
		// var userId = app.getSetting("user_id");
		//获取取证信息
		var mapInfo = {
			'resourceType': '100501'
		};
		app.ajax(app.url('lbs/position/list/last/from/resource'), mapInfo, function(ret) {
			// console.log("船舶数据65456：" + JSON.stringify(ret));
			if (ret.code == 200) {
				var data = ret.data
				var ship_data_new = JSON.stringify(ret.data);
				app.setSetting("ship_data_new", ship_data_new);
				var style = new ol.style.Style({
					image: new ol.style.Icon(({
						anchor: [0.5, 0.5],
						anchorOrigin: 'top-left',
						scale: 0.5,
						opacity: 0.75,
						src: "http://221.181.88.134:8081/mhsw/ship.png"
					}))
				});
				for (key of data) {
					// console.log('每个点'+JSON.stringify(key));
					var hengjiang = new ol.proj.fromLonLat([key.lon, key.lat]);
					//覆盖物【点】
					var feature = new ol.Feature({
						geometry: new ol.geom.Point(hengjiang),
						// geometry:new LineString,
						name: '中恒泾',
						reportSerialId: key.id,
						reportFoundtime: key.locationTime,
						ship_speed: key.speed,
						ship_lon: key.lon,
						ship_lat: key.lat,
						// mh_type:0,
						personName: key.objectName
					});
					//要素添加样式
					feature.setStyle(style);
					//数据源添加要素
					vectorSource.addFeature(feature);
				}
				// vectorLayer.setSource(vectorSource)  
			} else {
				mui.toast(ret.msg);
			}
		});
	}
	// 这是加载人员的数据
	owner.initVector_person_Layer = function() {
		//重设地图数据源
		vectorSource2.clear();
		//清空地图数据源
		// var userId = app.getSetting("user_id");
		//获取取证信息
		var mapInfo = {
			'resourceType': '100507'
		};
		app.ajax(app.url('lbs/position/list/last/from/resource'), mapInfo, function(ret) {
			// console.log("人员取证数据65456：" + JSON.stringify(ret) + 'url' + app.url('lbs/position/list/last/from/resource') + '');
			if (ret.code == 200) {
				var data = ret.data
				var personData_new = JSON.stringify(ret.data);
				app.setSetting("personData_new", personData_new);
				var style=null;
				for (key of data) {
					// console.log('每个点'+JSON.stringify(key));
					var new_lon = key.lon
					var new_lat = key.lat
					var hengjiang = new ol.proj.fromLonLat([new_lon, new_lat]);
					var feature = new ol.Feature({
						geometry: new ol.geom.Point(hengjiang),
						// geometry:new LineString,
						name: '中恒泾',
						reportSerialId: key.id,
						reportFoundtime: key.locationTime,
						ship_speed: key.speed,
						ship_lon: key.lon,
						ship_lat: key.lat,
						// mh_type:1,
						personName: key.objectName
					});
					if(key.userType==100201){
						style = new ol.style.Style({
							image: new ol.style.Icon(({
								anchor: [0.5, 0.5],
								anchorOrigin: 'top-left',
								scale: 0.5,
								opacity: 0.75,
								src: "http://221.181.88.134:8081/mhsw/guanli.png"
							}))
						});
					}else if(key.userType==100202){
						style = new ol.style.Style({
							image: new ol.style.Icon(({
								anchor: [0.5, 0.5],
								anchorOrigin: 'top-left',
								scale: 0.5,
								opacity: 0.75,
								src: "http://221.181.88.134:8081/mhsw/xuncha.png"
							}))
						});
					}else if(key.userType==100203){
						style = new ol.style.Style({
							image: new ol.style.Icon(({
								anchor: [0.5, 0.5],
								anchorOrigin: 'top-left',
								scale: 0.9,
								opacity: 0.75,
								src: "http://221.181.88.134:8081/mhsw/jianli.png"
							}))
						});
					}else if(key.userType==100204){
						style = new ol.style.Style({
							image: new ol.style.Icon(({
								anchor: [0.5, 0.5],
								anchorOrigin: 'top-left',
								scale: 0.5,
								opacity: 0.75,
								src: "http://221.181.88.134:8081/mhsw/yanghu.png"
							}))
						});
					}else if(key.userType==100205){
						style = new ol.style.Style({
							image: new ol.style.Icon(({
								anchor: [0.5, 0.5],
								anchorOrigin: 'top-left',
								scale: 0.5,
								opacity: 0.75,
								src: "http://221.181.88.134:8081/mhsw/xiangmu.png"
							}))
						});
					}
					
					
					
					//要素添加样式
					feature.setStyle(style);
					//数据源添加要素
					vectorSource2.addFeature(feature);
				}
				// vectorLayer.setSource(vectorSource2)
			} else {
				mui.toast(ret.msg);
			}
		});
	}

	// 电子围栏
	owner.initVector_review_Layer = function() {
		//重设地图数据源
		vectorSource3.clear();
		//清空地图数据源
		// var userId = app.getSetting("user_id");
		//获取取证信息
		var mapInfo = {
			areaName: '', //区域名称
			areaType: '', //区域类型
			pageSize: '50', //页数
			pageIndex: '1', //页码
			isAppOrNot:1,
		};
		app.ajax(app.url('getAreaInfoObscure'), mapInfo, function(ret) {
			console.log("区域港口：" + JSON.stringify(ret) + 'url' + app.url('getAreaInfoObscure') + '');
			if (ret.code == 200) {
				var new_arr55 = [];
				var data =ret.data.items[0]&&ret.data.items[0].geom;
				var polygonsDatas = data;
				
				var color = 'rgba(255,127,0,0.5)';
				var target = 'default_polygon_Layer';
				var zIndex = 11;
				var isChangeZoomAndCenter = true;
				// var vectorSource = new ol.source.VectorSource({
				// 	wrapX: false, //不在地图上重复
				// 	// features: (new GeoJSON().readFeatures(polygonsDataGJ)),
				// });
				var featuresFit = []
				for (var index = 0; index < polygonsDatas.length; index++) {
					var featurePolygon
					var polygonsData = polygonsDatas[index];
					var polygon = new ol.geom.Polygon(polygonsData);
					polygon.applyTransform(ol.proj.getTransform('EPSG:4326', 'EPSG:3857'));

					// var minh = new ol.proj.fromLonLat([121.381709, 31.112813]);
					featurePolygon = new ol.Feature(polygon);
					// if (params.name) {
					featurePolygon.setStyle(new ol.style.Style({ //默认样式,Object.assign合并对象
						text: new ol.style.Text({
							font: '14px Microsoft YaHei',
							text: '围栏',
							fill: new ol.style.Fill({
								color: '#666'
							})
						}),
						fill: new ol.style.Fill({
							color: color,
						}),
						stroke: new ol.style.Stroke({
							color: color,
							width: 2
						}),
					}))
					vectorSource3.addFeature(featurePolygon);
				}
			} else {
				mui.toast(ret.msg);
			}
		});
	}
	owner.initLayerShowHide = function(switchTiandi1, switchTiandi2, switchTiandi3, switchQp5) {
		switchTiandi1.click(function(event) {
			if (this.classList.contains('mui-active')) {
				tiandi1.setVisible(true)
			} else {
				tiandi1.setVisible(false)
			}
		})
		switchTiandi2.click(function(event) {
			if (this.classList.contains('mui-active')) {
				tiandi2.setVisible(true)
			} else {
				tiandi2.setVisible(false)
			}
		})
		switchTiandi3.click(function(event) {
			if (this.classList.contains('mui-active')) {
				tiandi3.setVisible(true)
			} else {
				tiandi3.setVisible(false)
			}
		})
		switchQp5.click(function(event) {
			if (this.classList.contains('mui-active')) {
				qp5.setVisible(true)
			} else {
				qp5.setVisible(false)
			}
		})
	}
	// 水系图
	owner.mhQp5 = function(flag) {
		if (flag) {
			qp5.setVisible(true)
		} else {
			qp5.setVisible(false)
		}
	}
}(mui, window.mapService = {}));

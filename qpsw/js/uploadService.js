/**
 * 上传务逻辑类
 * @param {Object} $
 * @param {Object} owner
 */
(function($, owner) {
	owner.upload = function(uploadInterval, getUploadCode) {
		if (uploadInterval == null) {
			uploadInterval = setInterval(function() {
				// console.log("定时上传轮询");
				var intervalFlag = app.getSetting("intervalFlag");
				if (intervalFlag == 'true') {
					app.setSetting("intervalFlag", false); //先停止上传，等一组数据上传完成以后再设置为true.

					var tmpUploadDatas = JSON.parse(app.getSetting("uploadDatas"));
					var uploadDatas = tmpUploadDatas.data;

					if (uploadDatas == null || uploadDatas == undefined) {
						return;
					}
					// console.log(JSON.stringify(uploadDatas))

					var uploadIndex = 0; //待上传记录在所有记录中的下标
					var uploadFlag = false; //是否有待上传的记录
					for (var uploadData of uploadDatas) {
						if (uploadData.toUpload == 1) {
							uploadFlag = true;
							break;
						} else {
							uploadIndex++;
						}
					}
					//执行上传逻辑
					if (uploadFlag) {
						// console.log("待上传下标--->" + uploadIndex);
						// console.log("待上传记录--->" + JSON.stringify(uploadDatas[uploadIndex]));

						var count = 0;
						var file_data_arr = [];
						var arr = [];
						for (file of uploadDatas[uploadIndex].images) {
							arr.push(file.path);
						}
						// for (file of uploadDatas[uploadIndex].arrWaterImgs) {
						// 	arr.push(file);
						// }
						// console.log('组装的值' + JSON.stringify(arr))
						getImgToBase64(arr, file_data_arr, count, uploadIndex, uploadDatas, getUploadCode);
					}
				}
			}, 3000);
		}
	};
	//将图片转换为Base64
	function getImgToBase64(arr, file_data_arr, count, uploadIndex, uploadDatas, getUploadCode) {
		var canvas = document.createElement('canvas'),
			ctx = canvas.getContext('2d'),
			img = new Image;
		img.crossOrigin = 'Anonymous';

		img.onload = function() {
			var originWidth = img.width;
			var originHeight = img.height;
			// 最大尺寸限制
			var maxWidth = app.maxWidth(),
				maxHeight = app.maxWidth();
			// 目标尺寸
			var targetWidth = originWidth,
				targetHeight = originHeight;
			// 图片尺寸超过1000x1000的限制
			if (originWidth > maxWidth || originHeight > maxHeight) {
				if (originWidth / originHeight > maxWidth / maxHeight) {
					targetWidth = maxWidth;
					targetHeight = Math.round(maxWidth * (originHeight / originWidth));
				} else {
					targetHeight = maxHeight;
					targetWidth = Math.round(maxHeight * (originWidth / originHeight));
				}
			}
			// canvas对图片进行缩放
			canvas.width = targetWidth;
			canvas.height = targetHeight;
			// 清除画布
			ctx.clearRect(0, 0, targetWidth, targetHeight);
			// 图片压缩
			ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

			// console.log(targetWidth, targetHeight)
			var dataURL = canvas.toDataURL('image/jpeg');

			file_data_arr.push(dataURLtoFile(dataURL, 'img' + count + '.jpg'))
			//						console.log("====")
			// console.log('dataURL的值' + dataURL)
			count++;
			getImgToBase64(arr, file_data_arr, count, uploadIndex, uploadDatas, getUploadCode);

			canvas = null;
		};
		// img.src = JSON.stringify(arr[count].path);
		img.src = arr[count];
		if (file_data_arr.length == arr.length) {
			// console.log(JSON.stringify('想看看'+file_data_arr));
			uploadImg(file_data_arr, uploadIndex, uploadDatas, getUploadCode);
		}
	}
	/**
	 * 上传操作
	 * @param {Object} file_data_arr 待上传的文件数组
	 * @param {Object} uploadIndex 待上传的记录在uploadDatas数组中的下标
	 */
	function uploadImg(file_data_arr, uploadIndex, uploadDatas, getUploadCode) {
		var xhr = new XMLHttpRequest();
		xhr.timeout = 120000;
		xhr.ontimeout = function(e) {
			mui.toast('请求超时，请再网络状态良好的地方重试');
		};
		var formData = new FormData();
		var uploadData = uploadDatas[uploadIndex];
        console.log("uploadData这是要传的值--->" + JSON.stringify(uploadData));
		console.log('图片转换base64后的'+JSON.stringify(file_data_arr))
		var new_upload = uploadData.images;
		var arrImgsSize = uploadData.images.length;
		for (var i = 0; i < arrImgsSize; i++) {
			// console.log("图片大小--->"+file_data_arr[i].size)s
			formData.append('files', file_data_arr[i]);
		}
		formData.append("suffix", "png");
		var token = app.getSetting('login_data')
		
		xhr.onreadystatechange = function(e) {
			if (xhr.readyState == 4) {
				var ret = JSON.parse(xhr.responseText);
				
				if (xhr.status == 200) {
					console.log('成功后的值' + JSON.stringify(ret))
					if (ret.code == 200) {
						
						// getUploadCode(200);
						uploadImg_paikou(ret.data,uploadData,uploadIndex)
						mui.toast('上传成功');
					} else {
						mui.toast("上报失败" + ret.msg);
					}
				} else {
					// getUploadCode(500);
					mui.toast("xhr.status != 200");
				}
				//断点测试一下
				return;
			}
		}
		xhr.open('POST', app.url('fastdfs/uploadArrayFiles'), true);
		xhr.setRequestHeader("token", token);
		// for (var value of formData.values()) {
		// 	console.log('formData的值' + value + app.url('fastdfs/uploadSingleFile'))
		// }
		xhr.send(formData);
	} 
	
	
	
	// 这是上传的代码
	function uploadImg_paikou(data,uploadData,uploadIndex) {
		// var paiUploadDatas = JSON.parse(app.getSetting("uploadDatas"));
		// var paiUploadDatas = paiUploadDatas.data;
		// console.log("uploadData这是要传的值--->" + JSON.stringify(paiUploadDatas)
		var arrInfo={}
		var new_app = []
		for (var i = 0; i < data.length; i++) {
			var ap = data[i]
			new_app.push({
				cloudBucket: ap[0],
				name: ap[1],
			})
			
		}
		console.log('河流的riverCode'+JSON.stringify(uploadData.riverCode))
		// var newCode={
		// 	            objectId:uploadData.riverCode.value.objectId,
		// 	            riverCode: uploadData.riverCode.value.riverCode,              
		// 	            riverName: uploadData.riverCode.riverName,          
		// 	            town: uploadData.Street_text,                   
		// 	            riverLevel: uploadData.riverCode.value.riverLevel   
		// }
		arrInfo.detail={
			quzheng_uploadFiles:new_app, //整改照片
			workType:uploadData.workType, //作业类型
			bank:uploadData.bank, //岸别
			
			objectId:uploadData.riverCode&&uploadData.riverCode.value&&uploadData.riverCode.value.objectId,
			riverCode: uploadData.riverCode.value.riverCode,              
			riverName: uploadData.riverCode.riverName,          
			town: uploadData.Street_text,                   
			riverLevel: uploadData.riverCode.value.riverLevel, 
			riverProblemSubType:uploadData.riverProblemSubType,    //小类
			// riverCode:newCode, //河流信息
			// riverCode:uploadData.riverCode,
			riverProblemType:uploadData.riverProblemType, //问题类型
			
		}
		arrInfo.foundTime=uploadData.foundTime //时间
		arrInfo.describe=uploadData.describe //描述
		arrInfo.lon=uploadData.lon //经度
		arrInfo.lat=uploadData.lat //纬度
		arrInfo.locationDescribe=uploadData.locationDescribe //位置描述
		
		var tmpUploadDatas = JSON.parse(app.getSetting("uploadDatas"));
		var uploadDatas = tmpUploadDatas.data;
		console.log('上传的参数'+JSON.stringify(arrInfo))
		app.ajax2(app.url('report/insertReport'), arrInfo, function(ret) {
			if(ret.code==200){
				console.log('这是上传成功'+JSON.stringify(ret))
				uploadDatas.splice(uploadIndex, 1);
				// console.log("删减后的uploadDatas--->" + JSON.stringify(uploadDatas));
				var d = {}; 
				d.data = uploadDatas;
				app.setSetting("uploadDatas", JSON.stringify(d));
				
				//3 重开始上传逻辑
				if (uploadDatas.length == 0) {
					app.setSetting("intervalFlag", false); 
					// clearInterval(uploadInterval);
				} else {
					app.setSetting("intervalFlag", true);
				}
				
			}
		
			
			
		})
	} 
	
	
	//将base64转换为文件
	function dataURLtoFile(dataurl, filename) {
		var arr = dataurl.split(','),
			mime = arr[0].match(/:(.*?);/)[1],

			bstr = atob(arr[1]),
			n = bstr.length,
			u8arr = new Uint8Array(n);
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new File([u8arr], filename, {
			type: mime
		});
	} 

}(mui, window.uploadService = {}));

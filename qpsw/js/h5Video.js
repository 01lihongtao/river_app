	/**
	 *@Description:{ 云台遥控摄像头 }
	 *@InterfaceAddress:{ }
	 *@parameter: { 
	                参数         是否可选        描述
	                session     必须            session id
	                token       必须            ONIVF 视频源 token
	                action      必须            云台指令 up/down/left/right/ zoomin/zoomout/stop / preset
	                speed       可选            stop 指令可以不带 speed 范围为 0-1 可以是小数
	                preset      可选            指定的预置点
	               }
	 *@ClassAuthor: ZDong
	 *@Date: 2020-01-10 15:32:32
	*/
	function h5stream_remoteControl(params) {
	    console.log(params+ '---------------h5stream_remoteControl--')
		
	  //   let data = await remoteControl_h5stream(params)
	  //       .then(res => {
	  //           return res.json()
	  //       })
	  //       .catch(ex => { });
	  //   if (data.bStatus === true) {
	  //       data = {
	  //           ...data,
	  //           ...params,
	  //       }
			// getRemoteControl_h5stream(data);
	  //   }
	}
	
	function remoteControl_h5stream(data) {
	    let url = 'http://116.228.75.54:8090/api/v1/Ptz';
	    if (data.h5stream_url && data.h5stream_url != '') {
	        url = data.h5stream_url + '/api/v1/Ptz'
	    }
	    return getData(url, data);
	}
	function getRemoteControl_h5stream(data){
	        console.log(data+ '-------data------------getRemoteControl_h5stream--')
	}
		
		
	function getData(url, params) {
	    let paramsArray = [];
	    //拼接参数
	    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
	    if (url.search(/\?/) === -1) {
	        url += '?' + paramsArray.join('&')
	    } else {
	        url += '&' + paramsArray.join('&')
	    }
	
	    return fetch(url, {
	        method: 'GET',
	        // credentials: 'include',
	        mode: 'cors',
	        cache: 'default',
	        headers: {
	            'Accept': 'application/json, text/plain, */*',
	            'Content-Type': 'application/x-www-form-urlencoded'
	        },
	        // // 注意 post 时候参数的形式
	        // body: data ? appendParam(data) : null
	    }).then((res) => {
	        let cloneRes = res.clone();
	        try {
	            // let d = cloneRes.json(); 
	            // d.then((data) => {
	            //     // console.log(data);
	            // });
	        } catch (ex) {
	
	        }
	        return res;
	    })
	}
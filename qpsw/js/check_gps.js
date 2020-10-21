/**
 * (C) Yuny Software
 * http://www.yuny.top
 * 2019-03-13
 * 
 **/

(function(owner) {
	// 0 关闭， 1 开启，2 已拒绝, 3 前台可用，4 无权限访问
	owner.check_gps = function() {
		owner.alerting = false;
		
		if(mui.os.android)
		{
			var context = plus.android.importClass("android.content.Context");  
            var locationManager=plus.android.importClass("android.location.LocationManager");  
            var main=plus.android.runtimeMainActivity();  
            var mainSvr=main.getSystemService(context.LOCATION_SERVICE); 
            if(mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER))
            	return 1;
            
            return 0;
		}
		else if(mui.os.ios)
		{
			var CLLocationManager = plus.ios.import("CLLocationManager");
			if(!CLLocationManager.locationServicesEnabled())
			{
				return 0;
			}
			
			var authorizationStatus = CLLocationManager.authorizationStatus();
			switch(authorizationStatus) {  
			      case 0:  
			      /// User has not yet made a choice with regards to this application  
			      break;  
			      case 1:  
			      // This application is not authorized to use location services.  Due  
			    // to active restrictions on location services, the user cannot change  
			    // this status, and may not have personally denied authorization 
			    	return 2;
			      break;  
			      case 2:  
			        // User has explicitly denied authorization for this application, or  
			    // location services are disabled in Settings.  
			    	return 2;
			      break;  
			      case 3:  
			        // User has granted authorization to use their location at any time,  
			    // including monitoring for regions, visits, or significant location changes.
			    	return 1;
			      break;  
			      case 4:  
			       // User has granted authorization to use their location only when your app  
			    // is visible to them (it will be made visible to them if you continue to  
			    // receive location updates while in the background).  Authorization to use  
			    // launch APIs has not been granted.  
			    	return 3;
			      break;  
			      case 5:  
			     // This value is deprecated, but was equivalent to the new -Always value.  
			      break;  
			      defalut:  
			      break;  
			}
		}
		
		return 0;
	}
	
	owner.load_check_gps =  function() {
		if(owner.alerting)
			return;
			
		owner.alerting = false;
		var check_gps = owner.check_gps();
		if(check_gps == 0)
		{
			owner.alerting = true;
			plus.nativeUI.alert( "GPS已关闭，请设置中开启GPS功能", function(){
					owner.alert = false;
					owner.load_check_gps();
				}, "消息", "确定" );
		}
		else if(check_gps == 2)
		{
			owner.alert = true;
			plus.nativeUI.alert( "应用的GPS权限已关闭，请在'隐私\定位服务\河务智慧通'中选'始终'", function(){
					owner.alert = false;
					lowner.oad_check_gps();
				}, "消息", "确定" );
		}
		else if(check_gps == 3)
		{
			owner.alert = true;
			plus.nativeUI.alert( "应用的GPS权限需要'始终'，请在'隐私\定位服务\河务智慧通'中选'始终'", function(){
					owner.alert = false;
					owner.load_check_gps();
				}, "消息", "确定" );
		}
	}
}(window.yuny2 = {}));
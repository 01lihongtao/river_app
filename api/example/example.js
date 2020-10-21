/**
 * @api {post} /query/map_tree 地图上的监控树
 * @apiVersion 0.1.0

 * @apiGroup Map

 * @apiParam {String} type 类型  control_area:控制的圩区,district:行政区,river:河流
 * 
 * @apiSuccess {String} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {List} children 圩区->水利设施,行政镇->行政村->水利设施,河流->水利设施
 
 * @apiSuccessExample {json} Success-Response:
{
    "code":0,
    "data":[
        {
            "name":"塘郁圩区",
            "list":[
                {
                    "facility_id":413,
                    "facility_name":"庵浜泵闸"
                },
                {
                    "facility_id":430,
                    "facility_name":"东斜水闸"
                }
            ],
            "children":[
                {
                    "name":"塘郁圩区",
                    "list":[
                        {
                            "facility_id":413,
                            "facility_name":"庵浜泵闸"
                        },
                        {
                            "facility_id":430,
                            "facility_name":"东斜水闸"
                        }
                    ],
                    "children":[

                    ]
                }
            ]
        },
        {
            "name":"塘郁圩区",
            "list":[
                {
                    "facility_id":413,
                    "facility_name":"庵浜泵闸"
                },
                {
                    "facility_id":430,
                    "facility_name":"东斜水闸"
                }
            ],
            "children":[

            ]
        }
    ]
}
 * @apiErrorExample {json} Error-Response:
 *     {"code":500,"error":""}
 */
function a() {
	return;
}
/**
 * @api {post} /user/login 登陆
 * @apiVersion 0.1.0

 * @apiGroup User

 * @apiParam {String} username 用户名
 * @apiParam {String} password 密码 
 * @apiParam {String} client_id 客户端id 
 
 *
 * @apiSuccess {String} user_type 人员类型. 如管理员，站长，普通员工，组长，组员，监理员
 * @apiSuccess {String} user_sub_type 人员子类型. 如驻扎，流动(监理员)
 
 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {
        "id": 1,
        "user_name": "普适测试账号",
        "user_type": "管理员"
        "company_id": 3,
        "company_name": "上海普适导航科技股份有限公司",
        "company_short_name": "普适导航"
    }
}
 * @apiErrorExample {json} Error-Response:
 *     {"code":500,"error":"账号或密码不正确"}
 */
function a() {
	return;
}

/**
 * @api {post} /user/logout 注销
 * @apiVersion 0.1.0
 * @apiGroup User

 * @apiSuccessExample {json} Success-Response:
{"code":0,"data":"退出成功"}

 */
function a() {
	return;
}

/**
 * @api {post} /user/repwd 修改密码
 * 
 * @apiVersion 0.1.0

 * @apiGroup User

 * @apiParam {String} old_pwd 新密码
 * @apiParam {String} new_pwd 老密码 
 *

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": ""
}
 * @apiErrorExample {json} Error-Response:
 *     {"code":500,"error":"原密码错误"}
 */
function a() {
	return;
}

/**
 * @api {post} /appcfg/upgrade 系统升级
 * 
 * @apiVersion 0.1.0

 * @apiGroup Config

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {
        "urlAndroid": "http://xxxxx.com",
        "verAndroid": "1.0.0",
        "urlIOS": "https://itunes.apple.com/cn/app/xxxxx",
        "verIOS": "1.0.0"
    }
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/info/alert_list 信息报警列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info
 

 
 * @apiSuccess {Number} item_type 类型，预警 0，报警1；未读状态前端本地处理；第一次所有预报警，状态为未读
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {String} time 报警时间 
 * @apiSuccess {String} content_type 报警类型
 * @apiSuccess {String} content 报警信息

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{item_type:"1",facility_id:1, facility_name:"火星水闸",time:"2018-07-27  12:00:00",content_type:"设备断线",content:"内闸位仪001"},...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/info/unprocess_list 信息未处理列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info
 
 
 * @apiSuccess {List} unprocess_rectify 未处理水利整改单
 * @apiSuccess {List} unprocess_green 未处理绿化养护单
 * @apiSuccess {List} unprocess_water 未处理调水记录
 * @apiSuccess {String} item_id 整改id，绿化id，调水id
 * @apiSuccess {String} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称

 * @apiSuccess {String} item_no 整改编号，绿化编号，调水编号

 * @apiSuccessExample {json} Success-Response:
{
    "unprocess_rectify":[
        {
            "item_id":"11",
            "facility_id":"1",
            "facility_name":"火星水闸",
            "item_no":"NO.YD20180731A"
        },
        {
            "item_id":"12",
            "facility_id":"5",
            "facility_name":"火星水闸",
            "item_no":"NO.YD20180731A"
        }
    ],
    "unprocess_green":[
        {
            "item_id":"11",
            "facility_id":"1",
            "facility_name":"火星水闸",
            "item_no":"NO.YD20180731A"
        },
        {
            "item_id":"12",
            "facility_id":"5",
            "facility_name":"火星水闸",
            "item_no":"NO.YD20180731A"
        }
    ],
    "unprocess_water":[
        {
            "item_id":"11",
            "facility_id":"1",
            "facility_name":"火星水闸",
            "item_no":"NO.YD20180731A"
        },
        {
            "item_id":"12",
            "facility_id":"5",
            "facility_name":"火星水闸",
            "item_no":"NO.YD20180731A"
        }
    ]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/info/signal_change_list 信息信号变化列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info
 
 * @apiParam {String} type 类型，如"","水位变化","工况变化"
 
 * @apiSuccess {Number} water_level 水位变化数量
 * @apiSuccess {Number} work_condition 工况变化数量
 * @apiSuccess {String} item_type 类型，如水位，工况
 * @apiSuccess {String} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {String} item_name 子项名称
 * @apiSuccess {String} val_before 变化前数据
 * @apiSuccess {String} val_after 变化后数据
 * @apiSuccess {Number} is_normal_val 数据正常，0 正常，1异常

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {water_level:1,work_condition:1,items:[{item_type:"水位",facility_id:1, facility_name:"火星水闸",item_name:"水位（内河）",val_before:"2.91",val_after:"3.06"，is_normal_val:1},...]}
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/facility_type_list 设施类型列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": ["泵闸","水闸","排涝站",...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/river_list 河流列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": ["垂姚潘家浜","特种场排涝河","十一区排涝河","西长河",...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/control_area_list 控制区列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": ["杨树园","海日湾","青松大控制","垂姚",...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/street_water_gate_list 街道水闸列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info
 
 * @apiSuccess {String} street_name 街道名称
 * @apiSuccess {List} villages 村
 * @apiSuccess {String} name 村名称
 * @apiSuccess {List} gates 水闸
 * @apiSuccess {String} river 所在河流
 * @apiSuccess {String} build_date 建造年月/改造年月
 * @apiSuccess {String} type 类型
 * @apiSuccess {String} control_area 所属控制圩区
 * @apiSuccess {String} memo 备注

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{street_name:"徐泾",villages:[{name:"光联村",gates:[{facility_id:1,facility:name:"苗泾港泵闸",river:"庙泾港",build_date:"2004",type:"泵闸",control_area:"青松大控制",memo:""},...]},...]}}]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/info/monitor_water_level 监测点水位
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info
 
 * @apiSuccess {String} monitor_point 监测点
 * @apiSuccess {Number} val 水位

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{monitor_point:"商榻",val:2.51},{monitor_point:"青浦南门",val:2.66},...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/info/facility_work_condition 水利设施工况
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info
 
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {String} item_name 位置名称
 * @apiSuccess {String} val 值
 * @apiSuccess {String} state 状态
 * @apiSuccess {String} open_width 闸位开度

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{facility_id:1,facility_name:"火星水闸",items:[{item_name:"内河水位",val:"2.81m"},{item_name:"内闸工况",state:"开启",open_width:"80cm"},...]},
	...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/alert_type_list 报警类型列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info
 
 * @apiSuccess {List} data 报警类型列表

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": ["设备断线","数据异常",...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/info/real_alert_list 实时报警列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info

 
 
 
 * @apiParam {String} [alert_type]  报警类型
 * @apiParam {String} [company_id] 所属单位id 如 1
 * @apiParam {String} [control_area] 所属控制区
 * @apiParam {String} [district] 所属行政区
 * @apiParam {String} [facility_name] 设施名称 支持模糊搜索
 * @apiParam {String} [order_by] 排列方式（按设施排列:facility_desc、facility_asc，按时间排列:time_desc、time_asc,按类型排列:alert_type_desc、alert_type_asc等）
 * @apiParam {List} [facility_ids=] 设施id列表，null表示所有设施
 * @apiParam {List} [alert_types=] 报警类型列表，null表示所有类型
 * @apiParam {String} [begin_date=当月1日] 开始时间，如2018-01-01 00:00:00
 * @apiParam {String} [end_date=当月月末] 结束时间，如2018-01-31 23:59:59
 * @apiParam {String} [device=] 问题设备

 
 * @apiSuccess {Number} id 报警id
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {String} time 报警时间
 * @apiSuccess {String} type 报警类型
 * @apiSuccess {String} info 报警信息
 * @apiSuccess {String} state 维护状态
 * @apiSuccess {String}  no 维护编号

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{id:"1",facility_id:1,facility_name:"火星水闸",time:"2018-07-27  12:00:00",type:"设备断线",info:"内闸位仪001","state":"已维护",no:'HX20180726A01'},
	...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/info/real_alert_list_detail 实时报警列表的详情
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info
 
 * @apiParam {Number} id 报警id

 
 * @apiSuccess {Number} id 报警id
* @apiSuccess {String} created_at 报警时间
 * @apiSuccess {String} facility_name 报警设施名称
 * @apiSuccess {String} equipment_name  报警设备
 * @apiSuccess {String} type 报警类型
 * @apiSuccess {String} maintain_company 维护单位 
* @apiSuccess {String} maintain_state 维护状态
* @apiSuccess {String} process_state 进程状态
* @apiSuccess {String} deadline_countdown 期限倒计时
* @apiSuccess {String} fault_text 设备故障原因
* @apiSuccess {list} fault_photo_list 故障处照片
* @apiSuccess {String} maintain_finish_desc\n 维护完成说明


 * @apiSuccessExample {json} Success-Response:
{
    "code":0,
    "data":{
        "id":"1",
        "created_at":"2018-07-27 12:00:00",
        "facility_name":"千步泵闸",
        "equipment_name":"内闸",
        "type":"设备断线",
        "maintain_company":"普适导航",
        "maintain_state":"维护中",
        "process_state":"已核实，正在进行维护",
        "deadline_countdown":"71小时22分12秒",
        "fault_text":"闸位开度仪与内闸闸门接触不良，导致数据传输终止",
        "fault_photo_list":[
            "https://ss0.bdstatic.com/aaa.jpg",
            "https://ss0.bdstatic.com/aaa.jpg",
            "https://ss0.bdstatic.com/aaa.jpg"
        ]
    }
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/info/real_alert_list 实时报警列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info
 
 * @apiParam {List} facility_ids 设施id列表，null表示所有设施
 * @apiParam {List} alert_types 报警类型列表，null表示所有类型
 * @apiParam {String} begin_date 开始时间，默认当月1日，如2018-01-01
 * @apiParam {String} end_date 结束时间，默认当月月末，如2018-01-31
 * @apiParam {String} device 问题设备
 * @apiParam {String} search 模糊搜索 水闸、编号、时间、信息、类型、状态
 
 * @apiSuccess {Number} id 报警id
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {String} time 报警时间
 * @apiSuccess {String} type 报警类型
 * @apiSuccess {String} info 报警信息

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{id:"1",facility_id:1,facility_name:"火星水闸",time:"2018-07-27  12:00:00",type:"设备断线",info:"内闸位仪001"},
	...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /save/info/start_maintenance_upload 开始维护上传
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info
 
 * @apiParam {Number} id 报警id
 * @apiParam {String} desc 说明
 * @apiParam {String} memo 备注
 * @apiParam {File} files 图文



 



 * @apiSuccessExample {json} Success-Response:
{
    "code":0
}
 */
function a() {
	return;
}

/**
 * @api {post} /save/info/maintenance_report_upload 维护报告上传
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info
 
 * @apiParam {Number} id 报警id
 * @apiParam {String} desc 说明
 * @apiParam {String} memo 备注
 * @apiParam {File} files 图片



 



 * @apiSuccessExample {json} Success-Response:
{
    "code":0
}
 */
function a() {
	return;
}

/**
 * @api {post} /save/real_alert_relieve 实时报警解除
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info
 
 * @apiParam {Number} alert_id 报警id

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0
}
 */
function a() {
	return;
}

/**
 * @api {post} /save/real_alert_confirm 实时报警设备维护确认
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info
 
 * @apiParam {Number} alert_id 报警id

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/info/warning_list 智能预警列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info
 
 * @apiParam {List} facility_ids 设施id列表，null表示所有设施
 * @apiParam {String} begin_date 开始时间，默认当月1日，如2018-01-01 00:00:00"
 * @apiParam {String} end_date 结束时间，默认当月月末，如2018-01-31 23:59:59
 
 * @apiSuccess {Number} id 预警id
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {String} time 预警时间
 * @apiSuccess {String} info 预警信息

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{id:"1",facility_id:1,facility_name:"火星水闸",time:"2018-07-27  12:00:00",info:"外河水位高于内河水位0.14m，需要引水，但未关闸。"},
	...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /save/warning_relieve 智能预警解除
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info
 
 * @apiParam {Number} warning_id 预警id

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/info/my_concern 我的关注列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info
 
 * @apiParam {Number} user_id 设施id列表，null或0表示当前用户
 
 
 * @apiSuccess {List} facility_list 设施列表
 * @apiSuccess {List} working_condition_list 工况列表
 * 
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {String} item_name 位置名称
 * @apiSuccess {String} val 值
 * @apiSuccess {String} state 状态
 * @apiSuccess {String} open_width 闸位开度
 * 
 * @apiSuccess {Number} id 工况列表的每项id
 * @apiSuccess {String} item_type 分为内河:inside_water外河:outside_water内闸:inside_gate外闸:outside_gate水泵：pump
 * 
 * 

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data":{
    	facility_list:[{facility_id:1,facility_name:"火星水闸",items:[{item_name:"内河水位",val:"2.81m"},{item_name:"内闸工况",state:"开启",open_width:"80cm"},...]},
	...],
	working_condition_list:[
		{id:1,item_type:"inside_water",item_name:"内河水位",facility_id:1,facility_name:"火星水闸"}，
		{id:33,item_type:"pump",item_name:"水泵1工况",facility_id:1,facility_name:"火星水闸"}，
	]
	}
}
 */
function a() {
	return;
}

/**
 * @api {post} /save/my_concern 我的关注列表修改
 * 
 * @apiVersion 0.1.0

 * @apiGroup Info
 
 * @apiParam {Number} user_id 设施id列表，null或0表示当前用户
 * @apiParam {JSON} items 关注列表，type类型-设施：facility，内河:inside_water，外河:outside_water，内闸:inside_gate，外闸:outside_gate，水泵：pump，如：[{"id":"1","type":"facility"},{"id":"44","type":"pump"}]

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/facility_list 设施列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Common
 
 * @apiParam {String} type 设施类型
 * @apiParam {String} facility_name 设施名称 根据设施名称模糊搜索
 * @apiParam {String} control_area 所属控制区
 * @apiParam {String} river 所属河流
 * @apiParam {Number} company_id 所属单位id，默认为0，所有单位
 * @apiParam {Number} page_no 页码，默认0
 * @apiParam {Number} page_size 页大小，默认30
 
 * @apiSuccess {Number} page_no 页码
 * @apiSuccess {Number} page_count 页总数
 * @apiSuccess {Number} page_size 页大小
 * @apiSuccess {List} check_items 巡检项目列表
 * @apiSuccess {List} children 巡检点列表
 * @apiSuccess {String} river 所在河流
 * @apiSuccess {String} requirement 巡查要求
 * @apiSuccess {String} check_requirement 巡检点 巡查要求
 * @apiSuccess {String} river 所在河流
 * @apiSuccess {String} build_date 建造年月/改造年月
 * @apiSuccess {String} type 类型
 * @apiSuccess {String} control_area 所属控制圩区
 * @apiSuccess {String} url_img 照片URL
 * @apiSuccess {String} url_img_thumb 照片缩略图URL
 * @apiSuccess {String} memo 备注

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {page_no:0,page_count:10,page_size:30,
	items:[{id:1, name:"火星水闸",river:"庙泾港",build_date:"2004",type:"泵闸",requirement:"要求要求",control_area:"青松大控制",memo:"",url_img:"http://???",url_img_thumb:"http://???",company_id:1,company_name:"普适导航",
		check_items: [{id:1, name:"闸门及金属结构",check_requirement:"要求要求要求要求",children:[{id:1,name:"止水"},{id:2,name:"主、侧滚轮"},{id:3,name:"门叶、梁系"},{id:4,name:"吊耳"},{id:5:,name:"搁门器"},{id:6,name:"门槽"},{id:7,name:"其他金属结构"}]},
		{id:2,name:"卷扬式（液压）启闭机",check_requirement:"要求要求",children:[{id:1,name:"机架、传动轴及其它构件"},{id:2,name:"启闭机运行是否平稳"}]},
		{id:3,name:"水泵",check_requirement:"要求要求",children:[]},
		{id:4,name:"高、低压配电柜",check_requirement:"要求要求",children:[]},
		{id:5,name:"现场控制柜",check_requirement:"要求要求",children:[]},
		{id:6,name:"水工建筑物",check_requirement:"要求要求",children:[]}]},
		{id:2, name:"金星水闸",check_requirement:"要求要求", ...},...
	]}
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/facility_detail 设施详情
 * 
 * @apiVersion 0.1.0

 * @apiGroup Common
 
 * @apiParam {Number} facility_id 设施id
 
 * @apiSuccess {List} check_items 巡检项目列表
 * @apiSuccess {String} river 所在河流
 * @apiSuccess {String} build_date 建造年月/改造年月
 * @apiSuccess {String} type 类型
 * @apiSuccess {String} control_area 所属控制圩区
 * @apiSuccess {String} street 街道
 * @apiSuccess {String} village 村
 * @apiSuccess {String} single_suite 单 / 套闸
 * @apiSuccess {String} gate_hole_size 闸孔尺寸
 * @apiSuccess {String} gate_door_open_method 闸门起闭方式
 * @apiSuccess {String} water_pump_count 水泵数量
 * @apiSuccess {String} water_pump_type1 水泵3类型
 * @apiSuccess {String} water_pump_type2 水泵3类型
 * @apiSuccess {String} water_pump_type3 水泵3类型
 * @apiSuccess {String} memo 备注

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {page_no:0,page_count:10,page_size:30,
	items:{id:1, name:"火星水闸",river:"庙泾港",build_date:"2004",type:"泵闸",control_area:"青松大控制",street:"徐泾",village:"二联村",memo:"",url_img:"http://???",url_img_thumb:"http://???",company_id:1,company_name:"普适导航",single_suite:"单闸",gate_hole_size:"5m",gate_door_open_method:"卷扬式",water_pump_count:1,water_pump_type1:"700QZ / 2.6",water_pump_type2:"",
		check_items: [{name:"闸门及金属结构",children:["止水","主、侧滚轮","门叶、梁系","吊耳","搁门器","门槽","其他金属结构"]},
		{name:"卷扬式（液压）启闭机",children:["机架、传动轴及其它构件","启闭机运行是否平稳"]},
		{name:"水泵",children:[]},
		{name:"高、低压配电柜",children:[]},
		{name:"现场控制柜",children:[]},
		{name:"水工建筑物",children:[]},...]}
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/person_list 人员列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Common

 * @apiParam {Number} company_id 单位id
 * @apiParam {String} type 类型，如巡检，监理，养护
 
 * @apiSuccess {Number} id 人员id
 * @apiSuccess {String} name 姓名
 * @apiSuccess {String} user_type 人员类型. 如管理员，站长，值勤责任人，一般巡检员，普通员工，组长，组员
 * @apiSuccess {String} company_id 单位id
 * @apiSuccess {String} company_name 单位名称
 * @apiSuccess {String} department 部门
 * @apiSuccess {String} url_img 头像照片
 * @apiSuccess {String} url_img_thumb 头像照片缩略图

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{id:1,name:"张三",user_type:"站长",company_id:1,company_name:"普适",department:"巡查一组",url_img:"http://???",url_img_thumb:"http://???"},
	...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/person_detail 人员明细
 * 
 * @apiVersion 0.1.0

 * @apiGroup Common

 * @apiParam {Number} user_id 人员id
 
 * @apiSuccess {Number} id 人员id
 * @apiSuccess {String} name 姓名
 * @apiSuccess {String} user_type 人员类型. 如管理员，站长，值勤责任人，一般巡检员，普通员工，组长，组员
 * @apiSuccess {String} company_id 单位id
 * @apiSuccess {String} company_name 单位名称
 * @apiSuccess {String} department 部门
 * @apiSuccess {String} url_img 头像照片
 * @apiSuccess {String} url_img_thumb 头像照片缩略图

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {id:1,name:"张三",user_type:"站长",company_id:1,company_name:"普适",department:"巡查一组",url_img:"http://???",url_img_thumb:"http://???",phone:"1334444555",latest_shedule:{year:2018,week_no:28}}
}
 */
function a() {
	return;
}


/**
 * @api {get} /query/get_time 获取系统时间
 * 
 * @apiVersion 0.1.0

 * @apiGroup Common



 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": "2018-11-01 13:12:12"
}
 */
function a() {
	return;
}

/**
 * @api {get} /query/get_red_dot 首页红点
 * 
 * @apiVersion 0.1.0

 * @apiGroup Common
 * @apiSuccess {Number} map 地图模块是否有红点0：没有，1：有
 * @apiSuccess {Number} monitor 监控模块是否有红点0：没有，1：有
 * @apiSuccess {Number} alert 动态报警模块是否有红点0：没有，1：有
 * @apiSuccess {Number} maintain 运营维护模块是否有红点0：没有，1：有
 * @apiSuccess {Number} statistics 查询统计模块是否有红点0：没有，1：有
 * @apiSuccess {Number} base_info 基础资料模块是否有红点0：没有，1：有
 * @apiSuccess {Number} my_concern 我的关注模块是否有红点0：没有，1：有
 * @apiSuccess {Number} evidence 河道取证模块是否有红点0：没有，1：有
 * @apiSuccess {Number} setting 功能设置模块是否有红点0：没有，1：有


 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {
    		"map":0,
    		"monitor":1,
    		"alert":1,
    		"maintain":0,
    		"statistics":1,
    		"base_info":0,
    		"my_concern":0,
    		"evidence":0,
    		"setting":0,
    }
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/check_detail 巡检详情
 * 
 * @apiVersion 0.1.0

 * @apiGroup Check
 
 * @apiParam {String} check_id 巡检id
 
 * @apiSuccess {String} memo 备注
 * @apiSuccess {Number} result 巡检结果，0 正常，1 异常

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {id:1,facility_id:10,facility_name:"火星水闸",date:"2018-07-01",check_point:"闸门及金属结构",memo:"",time_save:"2018-07-01 10:11:22",
	results:[{name:"止水",result:0},{name:"主、侧滚轮",result:1,problem_id:10,problem_no:"NO.BJ2018070517B"},...]}
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/problem_detail 问题详情
 * 
 * @apiVersion 0.1.0

 * @apiGroup Check
 
 * @apiParam {String} problem_id 问题id
 
 * @apiSuccess {String} state 问题状态
 * @apiSuccess {String} problem_no 问题编号
 * @apiSuccess {String} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {String} check_point 巡查点
 * @apiSuccess {String} check_sub_item 巡查点子项
 * @apiSuccess {String} memo 备注
 * @apiSuccess {Number} money 资金额度
 * @apiSuccess {String} reason 驳回原因
 * @apiSuccess {String} url_img 照片URL
 * @apiSuccess {String} url_img_thumb 照片缩略图URL
 * @apiSuccess {List} recifies 整改列表
 * @apiSuccess {String} type 如"整改告知单"，"整改报告单"

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {id:1,state:"整改中",problem_no:"NO.HX20180727A",facility_id:10,facility_name:"火星水闸",check_point:"闸门及金属结构",check_sub_item:"止水",time_save:"2018-07-01 10:11:22",memo:"",money:1500,reason:"灭火器箱内的灭火器已无法使用，请更换。",
	images:[{id:13,url_img:"http://a.aa/....",url_img_thumb:"http://aa.aa/...",memo:""},{id:14,url_img:"http://a.aa/....",url_img_thumb:"http://aa.aa/...",memo:""},...],
	recifies:[{id:1,type:"整改告知单",user_id:20,user_name:"张三",time_save:"2018-10-08 10:22:33",detail:"添加灭火器箱、启闭杆防尘套，清理杂物，修复石栏杆。",images:[{id:13,url_img:"http://a.aa/....",url_img_thumb:"http://aa.aa/...",memo:""},{id:14,url_img:"http://a.aa/....",url_img_thumb:"http://aa.aa/...",memo:""},...]},
	{id:2,type:"整改报告单",...},...]}
}
 */
function a() {
	return;
}

/**
 * @api {post} /save/check_register 巡检登记
 * 
 * @apiVersion 0.1.0

 * @apiGroup Check
 
 * @apiParam {Number} [check_id=0] 巡检id，0为新建
 * @apiParam {Number} facility_id 设施id
 * @apiParam {String} date 巡检日期，如2018-07-01
 * @apiParam {String} time_save 保存时间，如2018-07-01 10:33:34
 * @apiParam {String} check_point 巡检点，如闸门及金属结构
 * @apiParam {JSON} result 巡检结果，0 正常，1 异常，如[{name:"止水",result:0},{name:"主、侧滚轮",result:1,problem_id:3},...]
 * @apiParam {String} memo 备注
 * @apiParam {File[]} files 图片
 
 * @apiSuccess {String} data 巡检id

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": "101"
}
 */
function a() {
	return;
}

/**
 * @api {post} /inspect/add/rectification 问题上报
 * 
@apiDescription 问题上报。每种角色都可以进行问题上报(巡查员、站长、监理员、管理员)。每种角色上报后自动进入的状态不一致。

 * @apiVersion 0.1.0

 * @apiGroup Check
 * @apiParam {Number}  conservancyId 水利设施ID
 * @apiParam {String} rectificationSerial 巡查对应的序列号: "NO.xxxxxxx"//可选，巡查员上传问题对应的巡查编号，其他角色不传该属性
 * @apiParam {Number} targetId 巡查大项ID
 * @apiParam {Number} subTargetId  巡查大项中的小项ID
 * @apiParam {String} rectificationReason 问题上报原因
 * @apiParam {String} reportDate 时间
 * @apiParam {File} files: 文件1

 * @apiSuccess {String} data 问题上报id

 * @apiSuccessExample {json} Success-Response:
{
    "code": 200,
    "data": {
        "rectificationId": 9,
        "conservancyId": 2,
        "targetId": 1,
        "subTargetId": 1,
        "rectificationSerial": "NO.2018-10-300 13:43:32",
        "expenseMoney": null,
        "rectificationReason": "闸门掉漆",
        "imgGroupId": 72,
        "reporter": 1,
        "processStep": 3001,
        "processState": 3001,
        "gmtCreate": "2018-10-27 13:43:35",
        "gmtModified": "2018-10-27 13:43:35",
        "conservancyName": "刘家角泵闸",
        "targetName": "闸门及金属结构",
        "subTargetName": "螺栓",
        "reporterName": "张三",
        "reporterMobile": "18888888888",
        "processStepName": "待汇报",
        "processStateName": "待汇报",
        "images": []
    },
    "msg": "添加成功"
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/green_type 绿化养护类型列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Green

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": ["保洁","浇水","施肥",...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /save/green_maintain 绿化养护保存
 * 
 * @apiVersion 0.1.0

 * @apiGroup Green
 
 * @apiParam {Number} green_id 绿化养护id，0为新建
 * @apiParam {Number} facility_id 设施id
 * @apiParam {String} date 养护年月,如2018-07
 * @apiParam {JSON} maintains 其中: type 养护类别，amount_plan 计划数量，amount_finish 完成数量，memo 备注，例如[{type:"保洁",amount_plan:10.5,amount_finish:11.0, memo:""},{...},...]
 * @apiParam {String} time_save 保存时间，如2018-07-01 10:33:34
 
 * @apiSuccess {String} data 绿化养护id

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": "125"
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/water_transfer_type 引排水方式
 * 
 * @apiVersion 0.1.0

 * @apiGroup Water Transfer

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": ["先引后排","先排后引","边引边排"]
}
 */
function a() {
	return;
}

/**
 * @api {post} /save/water_transfer 调水登记
 * 
 * @apiVersion 0.1.0

 * @apiGroup Water Transfer
 
 * @apiParam {Number} water_transfer_id 调水id，0为新建
 * @apiParam {Number} facility_id 设施id
 * @apiParam {String} date 执行年月,如2018-07
 * @apiParam {String} type 引排水方式
 * @apiParam {String} amount_in 引水量
 * @apiParam {String} time_in 引水时间
 * @apiParam {String} amount_out 排水量
 * @apiParam {String} time_out 排水时间
 * @apiParam {String} memo 备注
 * @apiParam {String} time_save 保存时间，如2018-07-01 10:33:34
 
 * @apiSuccess {String} data 调水id

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": "125"
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/water_transfer 调水详情
 * 
 * @apiVersion 0.1.0

 * @apiGroup Water Transfer
 
 * @apiParam {Number} water_transfer_id 调水id，0为新建

 * @apiSuccess {Number} id 调水id
 * @apiSuccess {String} state 状态
 * @apiSuccess {String} water_transfer_no 调水编号
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {String} time_save 保存时间，如2018-07-01 10:33:34
 * @apiSuccess {String} date 执行日期,如2018-07-01
 * @apiSuccess {String} type 引排水方式
 * @apiSuccess {String} amount_in 引水量
 * @apiSuccess {String} time_in 引水时间
 * @apiSuccess {String} amount_out 排水量
 * @apiSuccess {String} time_out 排水时间
 * @apiSuccess {String} memo 备注

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {id:1,state:"待确认",water_transfer_no:"DSYD20180730A",facility_id:1,facility_name:"火星水闸",time_save:"2018-07-01 10:33:34",date:"2018-07-01",type:"先引后排",user_id:1,user_name:"王大海",amount_in:"100",time_in:"2.5",amount_out:"103",time_out:"3",memo:"",images:[{id:1,type:"前",url_img:"",url_img_thumb:"",memo:""},...]}
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/health_station_list 卫生站点列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Health
 
 * @apiSuccess {String} items 值勤位置

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{id:1,name:"中心站",items:["一层资料室","经理室","养护维修",...]},
		{id:2,name:"钱盛节制闸",items:["一层资料室","经理室","养护维修",...]},
		{id:3,name:"李红套闸 ",items:[...]},
		...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /save/health_duty 卫生值勤保存
 * 
 * @apiVersion 0.1.0

 * @apiGroup Health
 
 * @apiParam {Number} health_id 卫生id，0为新建
 * @apiParam {Number} station_id 站点id
 * @apiParam {String} date 值勤日期,如2018-07-01
 * @apiParam {JSON} results 值勤结果，例如：[{name:"一层资料室",result:"ok"},{name:"经理室",result:"ng"},...]
 * @apiParam {String} memo 备注
 * @apiParam {String} time_save 保存时间，如2018-07-01 10:33:34
 
 * @apiSuccess {String} data 卫生值勤id

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": "125"
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/health_duty 卫生值勤详情
 * 
 * @apiVersion 0.1.0

 * @apiGroup Health
 
 * @apiParam {Number} health_id 卫生值勤id
 
 * @apiSuccess {JSON} data 卫生值勤详情
 * @apiSuccess {String} health_no 值勤编号
 * @apiSuccess {String} report_time 报告时间
 * @apiSuccess {String} phone 联系方式
 * @apiSuccess {String} item_name 值勤位置
 * @apiSuccess {String} result 结果，"ok"，"ng"

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {id:1,health_no:"YSYD20180730A",facility_id:10,facility_name:"火星水闸",report_time:"2018-07-27  12:00:00",user_id:11,user_name:"王大海",phone:"13355552222",items:[{item_name:"一层资料室",result:0},...]}
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/schedule_comany_list 巡查单位列表同
 * @apiDescription  /query/cover_company_list
 
 * @apiVersion 0.1.0

 * @apiGroup Schedule

 */
function a() {
	return;
}

/**
 * @api {post} /query/schedule_table_company 巡查单位排班表
 * @apiDescription  去除汛期和正常，不采用接口，前端列时间，当月当前周后n周的排班周列表，不要新增和修改的功能
 
 * @apiVersion 0.1.0

 * @apiGroup Schedule
 
 */
function a() {
	return;
}

/**
 * @api {post} /query/schedule_table_company_detail 巡查单位排班详细
 * 
 * @apiVersion 0.1.0

 * @apiGroup Schedule

 * @apiParam {Number} company_id 单位id
 * @apiParam {String} startDate 如2018-01-01 00:00:00
 * @apiParam {String} endDate 2018-01-31 23:59:59
 
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {Number} person_amount 人数
 * @apiSuccess {String} period_type 周期类型
 * @apiSuccess {List} persons 值班人员列表
 * @apiSuccess {Number} person_id 人员id
 * @apiSuccess {String} person_name 人员姓名
 * @apiSuccess {String} work_time 工作时间

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{duty_date:"2018-07-30",items:[{facility_id:1,facility_name:"火星水闸",person_amount:12,period_type:"汛期",persons:[{person_id:1,person_name:"王大海",work_time:"08：30  ~  16：30"},{person_id:2,person_name:"章宏武",work_time:"08：30  ~  16：30"},...]},{facility_id:2,facility_name:"金联水闸",...},...]},
	{duty_date:"2018-07-31",...}]]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/schedule_my 我的排班
 * 
 * @apiVersion 0.1.0

 * @apiGroup Schedule
 
 * @apiParam {Number} person_id 人员id，为空或为0表示当前登录人员
 * @apiParam {String} date_begin 开始时间，2018-01-01 00:00:00
 * @apiParam {String} date_end 结束时间  2018-01-31 23:59:59

 
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {String} duty_date 值班日期
 * @apiSuccess {String} work_time 工作时间

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{facility_id:1,facility_name:"火星水闸",duty_date:"2018-07-01",work_time:"08:30~16:30"},
	{facility_id:2,facility_name:"金联水闸",...},
	...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/person_list_check 巡检人员列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Schedule
 
 * @apiParam {Number} company_id 单位id
 
 * @apiSuccess {Number} id 人员id
 * @apiSuccess {String} name 姓名
 * @apiSuccess {String} user_type 人员类型
 * @apiSuccess {String} company_id 单位id
 * @apiSuccess {String} company_name 单位名称
 * @apiSuccess {String} department 部门

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{id:1,name:"张三",user_type:"站长",company_id:1,company_name:"普适",department:"巡查一组"},
	{facility_id:2,facility_name:"金联水闸",...},
	...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /save/schedule 巡检计划修改
 * 
 * @apiVersion 0.1.0

 * @apiGroup Schedule
 
 * @apiParam {JSON} data 巡检计划(facility_id 设施id, check_date 巡检时间, check_rule 巡检规则, period_type 周期类型, person_id 人员id, work_time 工作时间),
 如[{facility_id:1,check_date:"2018-07-01",period_type:"汛期",check_rule:"每日/12人",persons:[{person_id:1,work_time:" 全天 / 24小时"},{person_id:2,work_time:" 全天 / 24小时"},...],{facility_id:2,...},...]

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/cover_company_list 巡检进度单位列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Cover
 
 * @apiParam {String} begin_date 开始时间，如2018-01-01 00:00:00
 * @apiParam {String} end_date 结束时间，如2018-12-31 23:59:59
 
 * @apiSuccess {Number} company_id 单位id
 * @apiSuccess {String} company_name 单位名称

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{company_id:1,company_name:"普适导航"},
	{company_id:2,company_name:"青原公司"},
	...]
}
 */
function a() {
	return;
}


/**
 * @api {post} /query/cover_month_detail_facility 设施巡检覆盖月详情
 * 
 * @apiVersion 0.1.0

 * @apiGroup Cover
 
 * @apiParam {Number} facility_id 设施id
 * @apiParam {String} month 年月份，如2018-01
 
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {String} cover 覆盖率
 * @apiSuccess {String} result 巡检结果，0 正常，1 异常，2 未巡检

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {month:"2018-01",facility_id:1,facility_name:"火星水闸",cover:"37.50%",
	items:[{item_name:"闸门及金属结构",result:1,items:[{item_name:"内闸",result:1},{item_name:"外闸",result:0},...]},
	{item_name:"卷扬式液压启闭机",...},
	...]}
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/facility_rectify_list 水利整改信息列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Check
 
 * @apiParam {Number} user_id 用户id，默认0，-1为所有，0为当前登录用户
 * @apiParam {Number} page_no 页码，默认0
 * @apiParam {Number} page_size 页大小，默认30
 * @apiParam {String} [state] 状态 如 3002
 * @apiParam {String} [begin_date] 开始时间 如 2018-11-08 23:23:11
 * @apiParam {String} [end_date] 结束时间 如 2018-11-11 23:23:11
 * @apiParam {String} [problem_id]  问题点id
 * @apiParam {String} [problem_content_id] 问题内容id
 * @apiParam {String} [state] 状态 如 3002
 * @apiParam {String} [money] 资金额度 如 1000
 * @apiParam {String} [company_id] 所属单位id 如 1
 * @apiParam {String} [control_area] 所属控制区
 * @apiParam {String} [district] 所属行政区
 * @apiParam {String} [company_type] 单位类型，如：监理、养护、巡查
 * @apiParam {String} [order_by] 排列方式（按设施排列:facility_desc、facility_asc，按时间排列:time_desc、time_asc,按类型排列:company_type_desc、company_type_asc等）
 * @apiParam {String} [facility_id] 设备id
 * @apiParam {String} [facility_name] 设备名称 支持模糊搜索
 * 
 * 
 * @apiSuccess {Number} page_no 页码
 * @apiSuccess {Number} page_size 页大小
 * @apiSuccess {Number} page_count 页数
 * @apiSuccess {Number} id 整改id
 * @apiSuccess {String} state 整改状态，""(待上传)，"待汇报"，"已撤销"，"待复核"，"待整改"，"整改下发"，"整改中"，"提交整改"，"确认整改"，"整改完成"
 * @apiSuccess {String} found_time 发现时间
 * @apiSuccess {String} user_id 报告人id
 * @apiSuccess {String} user_name 报告人姓名
 * @apiSuccess {Number} money 资金额度

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {page_no:0,page_size:30,page_count:5,
	items:[{id:101,state:"待汇报",facility_id:1,facility_name:"火星水闸",found_time:"2018-07-01 10:15:31",user_id:1,user_name:"王大海",money:0},
	{id:102,state:"待汇报",...},
	...]}
}
 */
function a() {
	return;
}

/**
 * @api {post} /save/facility_rectify_state_modify 水利整改信息状态修改
 * 
 * @apiVersion 0.1.0

 * @apiGroup Check
 
 * @apiParam {Number} problem_id 问题id
 * @apiParam {String} state 整改状态，"已撤销"，"待复核"，"待整改"，"整改下发"，"整改中"，"提交整改"，"确认整改"，"驳回"，"整改完成"
 * @apiParam {Number} money 资金额度（整改下发）
 * @apiParam {String} reason 驳回原因

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0
}
 */
function a() {
	return;
}

/**
 * @api {post} /inspect/commit/rectification 提交整改
 * 
 * @apiVersion 0.1.0

 * @apiGroup Check
 * @apiParam {String} rectificationSerial  "NO.201891132018", // 必选
 * @apiParam {String} content  "XXX修好了闸门，花了80圆",
 * @apiParam {String} remark  "备注"
 * @apiParam {String} reportTime  "2018-11-01 13:12:12", // 开始整改时间，用于本地保存后上传
 * @apiParam {File} files  文件

 

 
 * @apiSuccess {String} data 整改告知单id

 * @apiSuccessExample {json} Success-Response:
  {
    "code": 200,
    "data": "",
    "msg": "提交整改成功"
}
 */
function a() {
	return;
}

/**
 * @api {post} /inspect/start/rectification 开始整改问题
 * 
 * @apiVersion 0.1.0

 * @apiGroup Check
 * @apiParam {String} rectificationSerial  "NO.201891132018", // 必选
 * @apiParam {String} content  "章宏武带XXX正在整改",
 * @apiParam {String} remark  "备注"
 * @apiParam {String} reportTime  "2018-11-01 13:12:12", // 开始整改时间，用于本地保存后上传
 * @apiParam {File} files  文件




 
 * @apiSuccess {String} data 整改告知单id

 * @apiSuccessExample {json} Success-Response:
  {
    "code": 200,
    "data": "",
    "msg": "开始整改成功"
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/green_maintain_list 绿化养护信息列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Green
 
 * @apiParam {Number} user_id 用户id，默认0，-1为所有，0为当前登录用户
 * @apiParam {Number} page_no 页码，默认0
 * @apiParam {Number} page_size 页大小，默认30
 * @apiParam {String} state 整改状态，为空表示所有，如"待汇报,待复核"
 
 * @apiSuccess {Number} page_no 页码
 * @apiSuccess {Number} page_size 页大小
 * @apiSuccess {Number} page_count 页数
 * @apiSuccess {Number} id 绿化id
 * @apiSuccess {String} state 整改状态，""(待上传)，"待确认"，"已撤销"，"待承认"，"已完成"
 * @apiSuccess {String} found_time 发现时间
 * @apiSuccess {String} user_id 负责人id
 * @apiSuccess {String} user_name 负责人姓名

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {page_no:0,page_size:30,page_count:5,
	items:[{id:101,state:"待确认",facility_id:1,facility_name:"火星水闸",found_time:"2018-07-01 10:15:31",user_id:1,user_name:"王大海"},
	{id:102,state:"待确认",...},
	...]}
}
 */
function a() {
	return;
}

/**
 * @api {post} /save/green_state_modify 绿化养护信息状态修改
 * 
 * @apiVersion 0.1.0

 * @apiGroup Green
 
 * @apiParam {Number} green_id 问题id
 * @apiParam {String} state 整改状态，"已撤销"，"待承认"，"已完成"
 * @apiParam {String} reason 撤销原因

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/water_transfer_list 调水信息列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Water Transfer
 
 * @apiParam {Number} user_id 用户id，默认0，-1为所有，0为当前登录用户
 * @apiParam {Number} page_no 页码，默认0
 * @apiParam {Number} page_size 页大小，默认30
 * @apiParam {String} state 整改状态，为空表示所有，如"待汇报,待复核"
 
 * @apiSuccess {Number} page_no 页码
 * @apiSuccess {Number} page_size 页大小
 * @apiSuccess {Number} page_count 页数
 * @apiSuccess {Number} id 绿化id
 * @apiSuccess {String} state 整改状态，""(待上传)，"待确认"，"已撤销"，"待承认"，"已完成"
 * @apiSuccess {String} found_time 报告时间
 * @apiSuccess {String} user_id 填报人id
 * @apiSuccess {String} user_name 填报人姓名

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {page_no:0,page_size:30,page_count:5,
	items:[{id:101,state:"待确认",facility_id:1,facility_name:"火星水闸",found_time:"2018-07-01 10:15:31",user_id:1,user_name:"王大海"},
	{id:102,state:"待确认",...},
	...]}
}
 */
function a() {
	return;
}

/**
 * @api {post} /save/water_transfer_state_modify 调水信息状态修改
 * 
 * @apiVersion 0.1.0

 * @apiGroup Water Transfer
 
 * @apiParam {Number} water_transfer_id 调水id
 * @apiParam {String} state 整改状态，"已撤销"，"已通过"
 * @apiParam {String} reason 撤销原因

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/health_duty_list 卫生值勤信息列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Health
 
 * @apiParam {Number} user_id 用户id，默认0，-1为所有，0为当前登录用户
 * @apiParam {Number} page_no 页码，默认0
 * @apiParam {Number} page_size 页大小，默认30
 * @apiParam {String} state 整改状态，为空表示所有，如"待汇报,待复核"
 
 * @apiSuccess {Number} page_no 页码
 * @apiSuccess {Number} page_size 页大小
 * @apiSuccess {Number} page_count 页数
 * @apiSuccess {Number} id 绿化id
 * @apiSuccess {String} state 整改状态，""(待上传)，"待审批"，"已撤销"，"已通过"
 * @apiSuccess {String} found_time 报告时间
 * @apiSuccess {String} user_id 负责人id
 * @apiSuccess {String} user_name 负责人姓名

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {page_no:0,page_size:30,page_count:5,
	items:[{id:101,state:"待确认",facility_id:1,facility_name:"火星水闸",found_time:"2018-07-01 10:15:31",user_id:1,user_name:"王大海"},
	{id:102,state:"待确认",...},
	...]}
}
 */
function a() {
	return;
}

/**
 * @api {post} /save/health_duty_state_modify 卫生值勤信息状态修改
 * 
 * @apiVersion 0.1.0

 * @apiGroup Health
 
 * @apiParam {Number} health_id 卫生值勤id
 * @apiParam {String} state 整改状态，"已撤销"，"已通过"
 * @apiParam {String} reason 撤销原因

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/account/company_list 台帐单位列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Account
 
 * @apiParam {String} type 台帐类型，如巡检记录，卫生值勤，考勤记录，设施养护汇总，绿化养护月报，绿化养护记录，调水记录
 * @apiParam {String} begin_date 开始时间，如2018-01-01
 * @apiParam {String} end_date 结束时间，如2018-12-31

 * @apiSuccess {Number} company_id 单位id
 * @apiSuccess {String} company_name 单位名称

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{company_id:1,company_name:"普适导航"},
	{company_id:2,company_name:"青原公司"},
	...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/account/company_month_facility_list  台帐月设施列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Account
 
 * @apiParam {String} type 台帐类型：如巡检记录，设施养护汇总，设施养护记录，绿化养护月报，绿化养护记录，卫生值勤6种类型
 * @apiParam {Number} company_id 单位id
 * @apiParam {Number} year 年，如2018
 * @apiParam {Number} month 月，1~12
 
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{facility_id:1,facility_name:"火星水闸"},{facility_id:2,facility_name:"叶水路泵闸"},
	...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/daily_check_record/company_facility_detail  巡检记录单位设施详情
 * 
 * @apiVersion 0.1.0

 * @apiGroup Account
 
 * @apiParam {Number} facility_id 设施id
 * @apiParam {Number} year 年，如2018
 * @apiParam {Number} month 月，1~12
 * @apiParam {Array} [check_points] 巡查点，如["闸门及金属结构",...]
 * @apiParam {String} [date] 日期，如"2018-05-01"
 * @apiParam {Array} [user_ids] 巡查员ids，如[1,3,...]
 * @apiParam {String} [result] 结果，如"正常"，"异常"
 
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {String} item_name 巡检设备
 * @apiSuccess {Number} day 日，1~31
 * @apiSuccess {Number} user_id 巡检员id
 * @apiSuccess {String} user_name 巡检员姓名
 * @apiSuccess {Number} result 结果，0 正常，1 异常
 * @apiSuccess {String} check_no 养护记录编号
 * @apiSuccess {String} memo 备注
 * @apiSuccess {String} img 图片

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {facility_id:1,facility_name:"火星水闸",year:2018,month:1,
		items:[{item_name:"闸门及金属结构",days:[{day:1,user_id:1,user_name:"",result:1,check_no:"NO.YD20180701",memo:"",img:""},{day:2,user_id:1,user_name:"",result:0,check_no:"",memo:"日常清扫",img:""},...]},
			{item_name:"其它",...},
			...]}
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/daily_duty_record/company_month_detail  考勤记录单位月详情
 * 
 * @apiVersion 0.1.0

 * @apiGroup Account
 
 * @apiParam {Number} company_id 单位id
 * @apiParam {Number} year 年，如2018
 * @apiParam {Number} month 月，1~12
 
 * @apiSuccess {Number} company_id 单位id
 * @apiSuccess {String} company_name 单位名称
 * @apiSuccess {List} abnormal_list 异常考勤记录
 * @apiSuccess {List} person_list 人员
 * @apiSuccess {Number} user_id 人员id
 * @apiSuccess {String} user_name 人员姓名
 * @apiSuccess {String} date 日期
 * @apiSuccess {String} abnormal 异常结果，如缺勤，迟到

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {company_id:1,company_name:"火星水闸",year:2018,month:1,
		abnormal_list:[{user_id:1,user_name:"章宏武",date:"2018-05-03",abnormal:"缺勤"},
			{user_id:1,...},
			...],
		person_list:[{user_id:1,user_name:"章宏武"},{user_id:2,user_name:"王大海"},...]}
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/facility_maintain_summary/company_month_facility_detail  设施养护汇总月设施详情
 * 
 * @apiVersion 0.1.0

 * @apiGroup Account
 
 * @apiParam {Number} facility_id 设施id
 * @apiParam {Number} year 年，如2018
 * @apiParam {Number} month 月，1~12
 * @apiParam {Number}[date] 日期，如"2018-05-01"
 * @apiParam {Array} [user_ids] 巡查员ids，如[1,3,...]
 * 
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {Number} year 年，如2018
 * @apiSuccess {Number} month 月，1~12
 * @apiSuccess {String} date 日期
 * @apiSuccess {String} no 编号
 * @apiSuccess {String} content 养护内容
 * @apiSuccess {Number} user_id 养护人id
 * @apiSuccess {String} user_name 养护人姓名
 * @apiSuccess {String} memo 备注

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {facility_id:1,facility_name:"火星水闸",year:2018,month:5,
		items:[{date:"2018-05-01",no:"NO.HX20180727A",content:"添加灭火器箱、启闭杆防尘套，清理杂物，修复石栏杆。",user_id:1,user_name:"陈元盛",memo:""},
			{date:"2018-05-02",,...},
			...]}
}
 */
function a() {
	return;
}


/**
 * @api {post} /query/facility_maintain_summary/company_month_facility_record_desc  设施养护记录流程描述
 * 
 * @apiVersion 0.1.0

 * @apiGroup Account
 
 * @apiParam {Number} facility_id 设施id
 * @apiParam {Number} year 年，如2018
 * @apiParam {Number} month 月，1~12

 * 
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {Number} year 年，如2018
 * @apiSuccess {Number} month 月，1~12
* @apiSuccess {String} no 问题编号
* @apiSuccess {String} before 养护前
* @apiSuccess {String} ongoing 养护中
* @apiSuccess {String} after 养护后


 * @apiSuccessExample {json} Success-Response:
{
    "code":0,
    "data":{
        "facility_id":1,
        "facility_name":"火星水闸",
        "year":2018,
        "month":5,
        "no":"NO.HX20180727A",
        "before":{
            "img":[
                "img/bai.jpg",
                "img/bai.jpg"
            ],
            "desc":"无灭火器箱，启闭杆无防尘套，闸区堆积杂物，石栏杆缺损严重。"
        },
        "ongoing":{
            "img":[
                "img/bai.jpg",
                "img/bai.jpg"
            ],
            "desc":"无灭火器箱，启闭杆无防尘套，闸区堆积杂物，石栏杆缺损严重。"
        },
        "after":{
            "img":[
                "img/bai.jpg",
                "img/bai.jpg"
            ],
            "desc":"无灭火器箱，启闭杆无防尘套，闸区堆积杂物，石栏杆缺损严重。"
        }
    }
}
 */
function a() {
	return;
}


/**
 * @api {post} /query/green_monthly_report/company_month_facility_detail  绿化养护月报月设施详情
 * 
 * @apiVersion 0.1.0

 * @apiGroup Account
 
 * @apiParam {Number} facility_id 设施id
 * @apiParam {Number} year 年，如2018
 * @apiParam {Number} month 月，1~12
 
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {Number} year 年，如2018
 * @apiSuccess {Number} month 月，1~12
 * @apiSuccess {Number} user_id 负责人id
 * @apiSuccess {String} user_name 负责人姓名
 * @apiSuccess {String} name 绿化名称
 * @apiSuccess {String} plan_amount 计划数量
 * @apiSuccess {String} finish_amount 完成数量
 * @apiSuccess {String} memo 备注

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {facility_id:1,facility_name:"火星水闸",year:2018,month:5,user_id:1,user_name:"王大海",
		items:[{name:"保洁",plan_amount:"10㎡",finish_amount:"12㎡",memo:"台风"},
			{name:"浇水",,...},
			...]}
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/green_record/company_month_facility_detail  绿化养护记录月设施详情
 * 
 * @apiVersion 0.1.0

 * @apiGroup Account
 
 * @apiParam {Number} facility_id 设施id
 * @apiParam {Number} year 年，如2018
 * @apiParam {Number} month 月，1~12
 
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {Number} year 年，如2018
 * @apiSuccess {Number} month 月，1~12
 * @apiSuccess {String} name 名称
 * @apiSuccess {String} url_img 照片URL
 * @apiSuccess {String} url_img_thumb 照片缩略图URL
 * @apiSuccess {String} memo 备注

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {facility_id:1,facility_name:"火星水闸",year:2018,month:5,
		items:[{green_id:1,green_no:"LHYD20180730A",items:[{name:"前",memo:"",url_img:"",url_img_thumb:""},{name:"中",memo:"",url_img:"",url_img_thumb:""},{name:"后",memo:"",url_img:"",url_img_thumb:""}]},...]}
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/water_transfer_record/company_month_detail  调水记录单位月详情
 * 
 * @apiVersion 0.1.0

 * @apiGroup Account
 
 * @apiParam {Number} company_id 单位id
 * @apiParam {Number} year 年，如2018
 * @apiParam {Number} month 月，1~12
 
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {Number} year 年，如2018
 * @apiSuccess {Number} month 月，1~12
 * @apiSuccess {Number} id 调水id
 * @apiSuccess {Striing} no 调水编号
 * @apiSuccess {String} date 执行日期
 * @apiSuccess {String} type 引排水方式
 * @apiSuccess {Number} user_id 填报人id
 * @apiSuccess {String} user_name 填报人姓名
 * @apiSuccess {String} amount_in 引水量
 * @apiSuccess {String} time_in 引水时间
 * @apiSuccess {String} amount_out 排水量
 * @apiSuccess {String} time_out 排水时间
 * @apiSuccess {String} url_img 照片URL
 * @apiSuccess {String} url_img_thumb 照片缩略图URL
 * @apiSuccess {String} memo 备注

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{year:2018,month:5,items:{facility_id:1,facility_name:"火星水闸",
	items:[{id:1,no:"NO.HX20180727A",date:"2018-05-01",type:"先引后排",user_id:1,user_name:"张三",time_out:"2018-10-01 12:33",amount_out:30.10,time_in:"2018-10-02 12:33",amount_in:40.20,images:[{name:"前",url_img:"",url_img_thumb:"",memo:""},{name:"后",url_img:"",url_img_thumb:"",memo:""},...]},...]}}]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/health_duty/company_month_facility_detail  卫生值勤记录月设施详情
 * 
 * @apiVersion 0.1.0

 * @apiGroup Account
 
 * @apiParam {Number} facility_id 设施id
 * @apiParam {Number} year 年，如2018
 * @apiParam {Number} month 月，1~12
 
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称
 * @apiSuccess {Number} year 年，如2018
 * @apiSuccess {Number} month 月，1~12
 * @apiSuccess {Number} user_id 负责人id
 * @apiSuccess {String} user_name 负责人姓名
 * @apiSuccess {String} date 日期
 * @apiSuccess {String} position 位置
 * @apiSuccess {String} result 值勤结果

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {facility_id:1,facility_name:"火星水闸",year:2018,month:5,user_id:1,user_name:"张三"
		items:[{date:"2018-05-01",position:"配电房",user_id:3,user_name:"李四",result:"ok"},...]}
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/pump_gate_start_stop/facility_list  (泵)闸启闭设施列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Account
 
 * @apiParam {String} [type] 设施类型
 * @apiParam {String} [control_area] 所属控制区
 * @apiParam {String} [district] 所属行政区
 * @apiParam {String} [river] 所属河流
 * @apiParam {Number} [company_id=0] 所属单位id，0为所有单位
 * @apiParam {String} [begin_date] 开始时间，如2018-01-01
 * @apiParam {String} [end_date] 结束时间，如2018-12-31
 
 * @apiSuccess {Number} facility_id 设施id
 * @apiSuccess {String} facility_name 设施名称

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{facility_id:1,facility_name:"火星水闸"},...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/history/checkpoint_list  历史水位检测点列表  
 * 
 * @apiVersion 0.1.0

 * @apiGroup History

 * 
 * @apiSuccess {Number} checkpoint_id 检测点id
 * @apiSuccess {String} checkpoint_name 检测点名称

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{checkpoint_id:1,checkpoint_name:"商榻"},...]
}
 */
function a() {
	return;
}


/**
 * @api {post} /query/history/facility_detail  历史设施水位详情 
 * 
 * @apiVersion 0.1.0

 * @apiGroup History
 * @apiParam {Number} facility_id 检测点id
 * @apiParam {String} start_time 开始时间 2018-07-31 00:00:00
 * @apiParam {String} end_time 结束时间 2018-07-31 23:59:59
 * @apiParam {String} [interval] 时间间隔 最小值：00:15:00，最大值：24:00:00，默认15
 * 
 * 
 * @apiSuccess {Number} facility_id 检测点id
 * @apiSuccess {String} facility_name 检测点名称
 * @apiSuccess {String} inside_river 内河
 * @apiSuccess {String}  outer_river 外河
 * @apiSuccess {String}  time 时间

 * @apiSuccessExample {json} Success-Response:
{
    "code":0,
    "data":{
        "facility_id":1,
        "facility_name":"火星水闸",
        "list":[
            {
                "time":"2018-07-31 00:00:00",
                "inside_river":"2.74",
                "outer_river":"2.77"
            },
            {
                "time":"2018-07-31 00:00:00",
                "inside_river":"2.74",
                "outer_river":"2.77"
            }
        ]
    }
}
 */
function a() {
	return;
}


/**
 * @api {post} /query/history/checkpoint_detail  历史水位检测点详情  
 * 
 * @apiVersion 0.1.0

 * @apiGroup History
 * @apiParam {String} checkpoint_id  检测点id
 * @apiParam {String} start_time 开始时间 2018-07-31 00:00:00
 * @apiParam {String} end_time 结束时间 2018-07-31 23:59:59
 * @apiParam {String} [interval] 时间间隔 最小值：00:15:00，最大值：24:00:00，默认15
 * 
 * @apiSuccess {String} checkpoint_id  检测点id
 * @apiSuccess {String} checkpoint_name  检测点名称
 * @apiSuccess {String} time  时间
 * @apiSuccess {String} water_level 水位

 * @apiSuccessExample {json} Success-Response:
{
    "code":0,
    "data":{
    		"checkpoint_id":1,
    		"checkpoint_name":"青浦南门",
    		"list":[
        {
            "time":"2018-07-31 00:00:00",
            "water_level":"2.74"
        },
        {
            "time":"2018-07-31 00:00:00",
            "water_level":"2.74"
        }
    ]
    },
    "msg":"查询成功"
}
 */
function a() {
	return;
}


/**
 * @api {post} /query/history/rectification_record  历史整改记录报表统计
 * 
 * @apiVersion 0.1.0

 * @apiGroup History
 * @apiParam {String} [problem_id]  问题点id
 * @apiParam {String} [problem_content_id] 问题内容id
 * @apiParam {String} [begin_date] 开始时间 2018-07-31 00:00:00
 * @apiParam {String} [end_date] 结束时间 2018-07-31 23:59:59
 * @apiParam {String} [state] 状态 如 3002
 * @apiParam {String} [money] 资金额度 如 1000
 * @apiParam {String} [company_id] 所属单位id 如 1
 * @apiParam {String} [control_area] 所属控制区
 * @apiParam {String} [district] 所属行政区
 * @apiParam {String} [company_type] 单位类型，如：监理、养护、巡查
 * @apiParam {String} [type] 整改类型，如：自主整改、管理单位把控
 * @apiParam {String} [facility_id] 设备id
 * @apiParam {String} [facility_name] 设备名称 支持模糊搜索
 
 * 
 * @apiSuccess {String} total_count  问题总数
 * @apiSuccess {String} patrol_count  巡查单位问题总数
 * @apiSuccess {String} supervisor_count  监理单位问题总数
 * @apiSuccess {String} conservation_count 养护单位问题总数
 * @apiSuccess {List} patrol 巡查
 * @apiSuccess {List} supervisor  监理
 * @apiSuccess {List} conservation 养护
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
{
    "code":0,
    "data":{
        "total_count":"300",
        "patrol_count":"100",
        "supervisor_count":"100",
        "conservation_count":"100",
        "patrol":[
            {
                "typeCode":3001,
                "typeName":"待站长处理",
                "problem_count":10,
                "percentage":"10.00%"
            },
            {
                "typeCode":3002,
                "typeName":"待监理复核",
                "problem_count":20,
                "percentage":"20.00%"
            }
        ],
        "supervisor":[
            {
                "typeCode":3001,
                "typeName":"待站长处理",
                "problem_count":10,
                "percentage":"10.00%"
            },
            {
                "typeCode":3002,
                "typeName":"待监理复核",
                "problem_count":20,
                "percentage":"20.00%"
            }
        ],
        "conservation":[
            {
                "typeCode":3001,
                "typeName":"待站长处理",
                "problem_count":10,
                "percentage":"10.00%"
            },
            {
                "typeCode":3002,
                "typeName":"待监理复核",
                "problem_count":20,
                "percentage":"20.00%"
            }
        ]
    }
}
 */
function a() {
	return;
}



/**
 * @api {get} /query/history/report_statistics_time  历史报表截止统计时间更新
 * 
 * @apiVersion 0.1.0

 * @apiGroup History
 * @apiParam {Number} user_id 人员id
 
 
 * 
 * @apiSuccess {String} inspection  日常巡检记录表截止统计时间
 * @apiSuccess {String} rectification_summary  水利整改汇总表截止统计时间
 * @apiSuccess {String} rectification_record  水利整改记录表截止统计时间
 * @apiSuccess {String} history_alert_data  历史报警记录截止统计时间
 * @apiSuccess {String} history_rectification_report  历史整改记录截止统计时间
 * @apiSuccess {String} history_record_data 历史考勤记录截止统计时间

 * 
 * 
 * @apiSuccessExample {json} Success-Response:
{
    "code":0,
    "data":{
        "inspection":"2019-01-09 16:00:00",
        "rectification_summary":"2019-01-09 16:00:00",
        "rectification_record":"2019-01-09 16:00:00",
        "history_alert_data":"2019-01-09 16:00:00",
        "history_rectification_report":"2019-01-09 16:00:00",
        "history_record_data":"2019-01-09 16:00:00"
    }
}
 */
function a() {
	return;
}



/**
 * @api {post} /query/history/attendance_record  历史考勤记录
 * 
 * @apiVersion 0.1.0

 * @apiGroup History
 * @apiParam {String} [begin_date] 开始时间 2018-07-31 00:00:00
 * @apiParam {String} [end_date] 结束时间 2018-07-31 23:59:59
 * @apiParam {String} [company_id] 所属单位id 如 1
 * @apiParam {String} [user_id] 人员id 如 1 
 * 
 * @apiSuccess {List} abnormal_attendance 考勤异常
 * @apiSuccess {List} operation_attendance  运维考勤
 * @apiSuccess {List} supervision_attendance  监理考勤

 * 
 * 
 * @apiSuccessExample {json} Success-Response:
{
    "code":0,
    "data":{
        "abnormal_attendance":[
            {
                "date":"2019-01-01",
                "user_id":"1",
                "user_name":"王大海",
                "facility_id":"12",
                "facility_name":"火星水闸",
                "user_type":"监理员",
                "result":"异常"
            },
            {
                "date":"2019-01-01",
                "user_id":"1",
                "user_name":"王大海",
                "facility_id":"12",
                "facility_name":"火星水闸",
                "user_type":"巡查员",
                "result":"异常"
            }
        ]
    },
    "operation_attendance":[
        {
            "company_id":"4",
            "company_name":"普适导航"
        },
        {
            "company_id":"9",
            "company_name":"河路公司"
        }
    ],
    "supervision_attendance":[
        {
            "company_id":"4",
            "company_name":"普适导航"
        },
        {
            "company_id":"9",
            "company_name":"河路公司"
        }
    ]
}
 */
function a() {
	return;
}



/**
 * @api {post} /query/history/attendance_record_detail  历史考勤记录详情
 * 
 * @apiVersion 0.1.0

 * @apiGroup History
 * @apiParam {String} begin_date 开始时间 2018-07-31 00:00:00
 * @apiParam {String} end_date 结束时间 2018-07-31 23:59:59
 * @apiParam {String} company_id 所属单位id 如 1
 * @apiParam {String} [user_id] 人员id 如 1 
 * @apiParam {String} [facility_id] 设备id
 * @apiParam {String} [facility_name] 设备名称 支持模糊搜索
 * 
 * 
 
 * @apiSuccess {String} street_name 街道名称
 * @apiSuccess {String} village 村名称
 * @apiSuccess {String} control_area 所属控制圩区
 * @apiSuccess {String} river 所在河流
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
{
    "code":0,
    "data":{
    	"company_name":"上海普适导航科技股份有限公司",
    	"list":[
            {
                "date":"2019-01-01",
                "user_id":"1",
                "user_name":"王大海",
                "facility_id":"12",
                "facility_name":"火星水闸",
                "street_name":"xxx街",
                "village":"xx村",
                "control_area":"xxx圩",
                "river":"xxx河",
                "user_type":"监理员",
                "result":"异常"
            },
            {
                "date":"2019-01-01",
                "user_id":"1",
                "user_name":"王大海",
                "facility_id":"12",
                "facility_name":"火星水闸",
                "street_name":"xxx街",
                "village":"xx村",
                "control_area":"xxx圩",
                "river":"xxx河",
                "user_type":"巡查员",
                "result":"异常"
            }
        ]
    }
    
        
}
 */
function a() {
	return;
}


/**
 * @api {post} /query/history/alert_record  历史报警记录
 * 
 * @apiVersion 0.1.0

 * @apiGroup History
 * @apiParam {String} [alert_type]  报警类型
 * @apiParam {String} [company_id] 所属单位id 如 1



 * @apiParam {String} [control_area] 所属控制区
 * @apiParam {String} [street] 街道
 * @apiParam {String} [village] 村
 * @apiParam {String} [river] 河
 * 
 * @apiParam {String} [begin_date] 开始时间 2018-07-31 00:00:00
 * @apiParam {String} [end_date] 结束时间 2018-07-31 23:59:59
 * @apiParam {String} [state] 维护状态 如 4603
 * @apiParam {String} [facility_id] 设备id
 * @apiParam {String} [facility_name] 设备名称 支持模糊搜索
 
 

 
 * 
 * @apiSuccess {String} alert_total_count  报警总次数
 * @apiSuccess {String} facility_alert_count  设备报警次数
 * @apiSuccess {String} warning_count  （预警）操作规则违反次数
 * @apiSuccess {String} maintenance_count 设备维护总次数
 * @apiSuccess {List} alert 设备报警
 * @apiSuccess {List} warning  预警
 * @apiSuccess {List} maintenance 设备维护
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
{
    "code":0,
    "data":{
        "alert_total_count":"100",
        "facility_alert_count":"50",
        "warning_count":"50",
        "maintenance_count":"80",
        "alert":[
            {
                "state":"设备断线",
                "problem_count":25,
                "percentage":"25.00%"
            },
            {
                "state":"数据异常",
                "problem_count":25,
                "percentage":"25.00%"
            }
        ],
        "warning":[
            {
                "problem_count":25,
                "percentage":"25.00%"
            },
            {
                "problem_count":25,
                "percentage":"25.00%"
            }
        ],
        "maintenance":[
            {
                "state":"待维护",
                "problem_count":10,
                "percentage":"10.00%"
            },
            {
                "state":"维护中",
                "problem_count":20,
                "percentage":"20.00%"
            }
        ]
    }
}
 */
function a() {
	return;
}





/**
 * @api {post} /query/pump_gate_start_stop/facility_month_list  (泵)闸启闭设施月列表
 * 
 * @apiVersion 0.1.0

 * @apiGroup Account
 
 * @apiParam {Number} facility_id 设施id
 * @apiParam {String} begin_date 开始时间，如2018-01-01
 * @apiParam {String} end_date 结束时间，如2018-12-31
 
 * @apiSuccess {Number} year 年，如2018
 * @apiSuccess {Number} month 月，1~12

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{year:2018,month:8},...]
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/pump_gate_start_stop/facility_month_detail  (泵)闸启闭设施月明细
 * 
 * @apiVersion 0.1.0

 * @apiGroup Account
 
 * @apiParam {Number} facility_id 设施id
 * @apiParam {Number} year 年，如2018
 * @apiParam {Number} month 月，1~12
 
 * @apiSuccess {Map} pump 泵机运转情况
 * @apiSuccess {Map} electric 电气运行情况
 * @apiSuccess {Map} gate 闸门运行情况
 * @apiSuccess {Map} other 其它
 * @apiSuccess {String} pump_no 泵号
 * @apiSuccess {String} start_at 启动时间
 * @apiSuccess {String} stop_at 停机时间
 * @apiSuccess {String} total_time 累计时间
 * @apiSuccess {String} voltage 电压
 * @apiSuccess {String} current 电流
 * @apiSuccess {Number} user_id 操作员id
 * @apiSuccess {String} user_name 操作员姓名

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {facility_id:1,facility_name:"火星水闸",year:2018,month:9,items:[{pump:{pump_no:"BS00121A",start_at:"2018-07-01  03:00:00",stop_at:"2018-07-01  03:00:00", total_time:"17:00:00"},electric:{voltage:"35V",current:"3000mA"},gate:{start_at:"2018-07-01  03:00:00",stop_at:"2018-07-01  03:00:00", total_time:"17:00:00"},other:{user_id:1,user_name:"张三"}},...]}
}
 */
function a() {
	return;
}


/**
 * @api {post} /query/diesel_generating_set/operation_details   柴油发电机组运行详情
 * 
 * @apiVersion 0.1.0

 * @apiGroup Account
 
 * @apiParam {Number} facility_id 设施id
 * @apiParam {Number} year 年，如2018
 * @apiParam {Number} month 月，1~12
 * @apiParam {Number}[date] 日期，如"2018-05-01"
 
  
 * @apiSuccess {String} facilityId 设备id
 * @apiSuccess {String} facilityName 设备名称
 * @apiSuccess {String} gmtCreate 时间
 * @apiSuccess {String} motorCar 动车
 * @apiSuccess {String} generation 发电
 * @apiSuccess {String} oilTemperature 油温
 * @apiSuccess {String} waterTemperature 水温
 * @apiSuccess {String} a1 电流1
 * @apiSuccess {String} a2 电流2
 * @apiSuccess {String} a3 电流3
 * @apiSuccess {String} voltage 电压V
 * @apiSuccess {String} hz hz
 * @apiSuccess {String} operator 操作者
 * @apiSuccess {String} runStatus 运行情况
 * @apiSuccess {String} remark 备注
 

 * @apiSuccessExample {json} Success-Response:
{
    "code":0,
    "data":[
        {
            "id":22,
            "gmtCreate":"2018-11-03",
            "gmtModified":null,
            "facilityId":null,
            "motorCar":"123",
            "generation":"123",
            "oilTemperature":"123",
            "waterTemperature":"123",
            "hz":"123",
            "voltage":"123",
            "a1":null,
            "a2":"123",
            "a3":"123",
            "operator":"123",
            "runStatus":"123",
            "remark":"123",
            "recorder":"123",
            "facilityName":"中横泾北口泵闸",
            "insTime":"2018-11-03",
            "startTime":null,
            "endTime":null
        },
        {
            "id":23,
            "gmtCreate":"2018-11-09",
            "gmtModified":null,
            "facilityId":null,
            "motorCar":"12",
            "generation":"12",
            "oilTemperature":"12",
            "waterTemperature":"12",
            "hz":"12",
            "voltage":"12",
            "a1":"12",
            "a2":"12",
            "a3":"12",
            "operator":"12",
            "runStatus":"12",
            "remark":"12",
            "recorder":null,
            "facilityName":"中横泾北口泵闸",
            "insTime":"2018-11-09",
            "startTime":null,
            "endTime":null
        }
    ],
    "msg":"查询成功"
}
 */
function a() {
	return;
}



/**
 * @api {post} /query/attendance/attendance_detail  签到考勤界面数据
 * 
 * @apiVersion 0.1.0

 * @apiGroup Attendance
 
 * @apiParam {Number} id 人员id

 
 * @apiSuccess {String} time 系统当前的时间
 * @apiSuccess {String} limited_time 限定时间
 * @apiSuccess {Boolean} can_click 能否点击进入考勤提交
 * @apiSuccess {Number} checked_times 已经签到的次数
 * @apiSuccess {String} state 当次签到的状态 如漏签、缺勤、未迟到或者空，显示在签到次数下面
 * @apiSuccess {String} memo 最下面红色的备注如：本日考勤结束，请注意下一工作日的限定时间
 * @apiSuccess {List} checked_facility 今日签到的设施列表

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data":{
    	"time":"2018-07-30  07:30:00",
    	"limited_time":" 2018-07-30  08:30:00",
    	"can_click":true,
    "checked_times":"1",
    "state":"未迟到",
    "memo":"本日考勤结束，请注意下一工作日的限定时间",
	"checked_facility": [{name:"火星水闸",checked_time:"2018-12-01 10:33"},{name:"星光水闸",checked_time:"2018-12-01 14:33"},...]
    }
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/attendance/check_in_detail  签到统计详情
 * 
 * @apiVersion 0.1.0

 * @apiGroup Attendance
 

 * @apiParam {Number} user_id 人员id
 * @apiParam {Number} year 年，如2018
 * @apiParam {Number} month 月，1~12
 * @apiParam {Number} day 月，1~31

 * @apiSuccess {String} current_month 当前月份 如：2018年07月
 * @apiSuccess {String} name 人员姓名
 * @apiSuccess {String} sign_state 签到状况
 * 
 * @apiSuccess {List} date_list 考勤数据

 * @apiSuccess {String} title 标题
 * @apiSuccess {String} limited_time 限定时间
 * @apiSuccess {String} sign_time 签到时间
 * @apiSuccess {String} position 当前位置
 * @apiSuccess {String} memo 备注
 * @apiSuccess {String} img 照片
  * @apiSuccess {String} longitude 经度
 * @apiSuccess {String} latitude 纬度

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {
    	"current_month":"2018年07月",
    	"name":"王大海",
    	"sign_state":"合格"
    	"date_list":[
    	{
    		"title":"签到状况①",
    		"limited_time":"2018-07-01  08:30:00",
    		"sign_time":"2018-07-01  08:00:00 ",
    		"position":"上海市高光路215弄2号楼，上海普适导航科技股份有限公司",
    		"longitude":"121.121231231",
    		"latitude":"121.121231231",
    		"memo":"测试",
    		"img":"http://wwww.xxx.com/img.jpg"
    	},
    	{
    		"title":"签到状况②",
    		"limited_time":"2018-07-01  16:30:00",
    		"sign_time":" 2018-07-01  16:31:00",
    		"position":"上海市高光路215弄2号楼，上海普适导航科技股份有限公司",
    		 "longitude":"121.121231231",
    		"latitude":"121.121231231",
    		"memo":"测试",
    		"img":"http://wwww.xxx.com/img.jpg"
    	}
    	]
    }
}
 */
function a() {
	return;
}

/**
 * @api {post} /query/attendance/check_in_statistics_month  本月签到统计
 * 
 * @apiVersion 0.1.0

 * @apiGroup Attendance
 
 * @apiParam {Number} user_id 人员id
 * @apiParam {Number} year 年，如2018
 * @apiParam {Number} month 月，1~12

 * @apiSuccess {Number} user_id 人员id
 * @apiSuccess {String} current_month 当前月份 如：2018年07月
 * @apiSuccess {String} name 人员姓名
 * @apiSuccess {List} date_list 本月考勤数据

 * @apiSuccess {String} date 日期 2018-01-31
 * @apiSuccess {String} sign_state 签到状况

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {
    	"current_month":"2018年07月",
    	"user_id":1,
    	"name":"王大海",
    	"date_list":[
    	{
    		"date":"2018-01-01",
    		"sign_state":"合格",
    	},	{
    		"date":"2018-01-02",
    		"sign_state":"缺勤",
    	}
    	]
    }
}
 */
function a() {
	return;
}

/**
 * @api {post} /save/attendance_upload  签到考勤提交
 * 
 * @apiVersion 0.1.0

 * @apiGroup Attendance
 
 * @apiParam {Number} id 人员id
 * @apiParam {String} time 系统当前的时间
 * @apiParam {String} position 当前位置
 * @apiParam {String} longitude 经度
 * @apiParam {String} latitude 纬度
 * @apiParam {Files} files 照片数据
 * @apiParam {String} memo 备注


 * @apiSuccess {String} state 是否提交成功

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {
    	"state":"提交成功"
    }
}
 */
function a() {
	return;
}


/**
 * @api {post} /save/step_number_upload  步数提交
 * 
 * @apiVersion 0.1.0

 * @apiGroup Attendance
 
 * @apiParam {Number} id 人员id
 * @apiParam {JSON} data start_time开始时间 interval时间间隔（分钟） step_number：步数
[{"start_time":"2018-12-01 00:30:00","interval":"1","step_number":[10,15,15,40,55,68]},{"start_time":"2018-12-01 01:00:00","interval":"1","step_number":[78,100,100,100,100,111]}]



 * @apiSuccess {String} state 是否提交成功

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": {
    	"state":"提交成功"
    }
}
 */
function a() {
	return;
}

/**
 * @api {post} /get/step_number  步数查询
 * 
 * @apiVersion 0.1.0

 * @apiGroup Attendance
 
 * @apiParam {Number} user_id 人员id
 * @apiParam {String} date，例如2018-10-01


 * @apiSuccess {JSON} data 步数数据
 * @apiSuccess {Number} is_ok 步数是否合格，0 合格，1 不合格，2 异常，3 无数据

 * @apiSuccessExample {json} Success-Response:
{
    "code": 0,
    "data": [{start_time:"2018-12-01 08:30", step_number:200, is_ok:0},{start_time:"2018-12-01 09:00", step_number:200, is_ok:0},...]
}
 */
function a() {
	return;
}



/**
 * @api {post} /history/his  轨迹查询
 * 
 * @apiVersion 0.1.0

 * @apiGroup Attendance
 
 * @apiParam {Number} user_id 人员id
 * @apiParam {String} begin_date 开始时间 2018-07-31 00:00:00
 * @apiParam {String} end_date 结束时间 2018-07-31 23:59:59

 
 * @apiSuccess {Number} speed 速度

 * @apiSuccessExample {json} Success-Response:
{
    "code":0,
    "data":[
        {
            "username":"王大海",
            "points":[
                {
                    "id":"1",
                    "lat":31.13753,
                    "lon":121.092758,
                    "updatetime":"2018-03-04 06:00:30",
                    "speed":7
                },
                {
                    "id":"2",
                    "lat":31.13753,
                    "lon":121.092758,
                    "updatetime":"2018-03-04 06:00:30",
                    "speed":15
                }
            ]
        }
    ]
}
 */
function a() {
	return;
}
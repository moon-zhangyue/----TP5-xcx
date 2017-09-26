//请求方法基类
import { Config} from '../utils/config.js';
class Base{
	constructor(){
		this.baseRequestUrl = Config.restUrl;
	}

	request(params){
		var url = this.baseRequestUrl + params.url;
		if(!params.type){
			params.type = 'GET';
		}
		wx.request({
			url: url,
			method:params.type,
			// data: null,
			header:{
				'content-type':'application/json',
				'token':wx.getStorageSync('token')
			},
			success:function(res){
				params.sCallBack && params.sCallBack(res.data);
				// if(params.sCallBack){
				// 	params.sCallBack(res);
				// }
			},
			fail:function(err){
				console.log(err);
			}
		})
	}

	/*获得元素上绑定的值*/
	getDataSet(event,key){
		return event.currentTarget.dataset[key];
	};
}
export {Base};
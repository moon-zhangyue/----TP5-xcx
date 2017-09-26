
import {Base} from '../../utils/base.js';

class Home extends Base{
	constructor(){
		super();
	}
	getBannerData(id,callback){
		var params = {
			url:'banner/'+id,
			sCallBack:function(res){
				callback&&callback(res.items);
			}
		}
		this.request(params);
	}
	/*首页主题*/
	getThemeData(callback) {
		var params = {
			url: 'theme?ids=1,2,3',
			sCallBack: function (data) {
				callback && callback(data);
			}
		}
		this.request(params);
	}

	/*首页部分商品*/
	getProductorData(callback) {
		var params = {
			url: 'product/recent?1',
			sCallback: function (result) {
				callback && callback(result);
			}
		};
		this.request(params);
	}
}
export {Home};
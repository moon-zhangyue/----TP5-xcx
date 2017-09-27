import { Base } from '../../utils/base.js';

class Theme extends Base{
	constructor() {
		super();
	}


	/*获取主题的商品列表--主题id*/
	getProductorData(id, callback) {
		var param = {
			url: 'theme/' + id,
			sCallback: function (data) {
				callback && callback(data);
			}
		};
		this.request(param);
	}
}
export {Theme};
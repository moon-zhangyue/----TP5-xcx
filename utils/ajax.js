import { Config } from '../utils/config.js';

console.log(Config.restUrl)
export default {
	get: (url, data) => {

		wx.showLoading({
			title: '加载中..',
			mask: true
		})
		return new Promise((resolve, reject) => {
			wx.request({
				url: Config.restUrl+url,
				method: 'GET',
				data: data,
				header: {
					'content-type': 'application/json' // 默认值
				},
				success: (res) => {
					wx.hideLoading();
					resolve(res);
				},
				fail: (err) => {
					reject(err);
					console.log(err);
				}
			})
		})

	},
}
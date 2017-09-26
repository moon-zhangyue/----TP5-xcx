// pages/home/home.js
import {Home} from 'home-model.js';
import ajax from '../../utils/ajax.js';

var home = new Home();
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  productsArr:[]
  },

  onLoad:function(){
	this._loadData();
  },

  _loadData:function(){
	    var id = 1;
		// 获得bannar信息
	    home.getBannerData(id, (res) => {
		    this.setData({
			   'bannerArr': res
		    });
		    // console.log(res)
	    });

		home.getThemeData((data)=>{
			this.setData({
				'themeArr': data
			});
		});

		/*获取单品信息*/
		ajax.get('product/recent?1').then((res)=>{
			this.setData({
				'productsArr': res.data
			})
		})
  },

})
// pages/home/home.js
import {Home} from 'home-model.js';
var home = new Home();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
			console.log(data);
			this.setData({
				'themeArr': data
			});
		})
  },

})
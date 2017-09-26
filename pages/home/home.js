// pages/home/home.js
import {Home} from 'home-model.js';
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
		console.log(home)
		home.getProductorData((result)=>{
			this.setData({
				'productsArr': [
					{ id: 1, name: "芹菜 半斤", price: "0.01", stock: 998 },
					{ id: 2, name: "梨花带雨 3个", price: "0.01", stock: 984}
				]
			});
		});
		
  },

})
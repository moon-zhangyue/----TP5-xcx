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
	    var data = home.getBannerData(id, (res) => {
		    this.setData({
			  'bannerArr': res
		    });
		    console.log(res)
	    });
	//   console.log(data);
      //不操作dom,数据绑定
      
  },

  callBcak:function(res){
	  console.log(res);
  }

})
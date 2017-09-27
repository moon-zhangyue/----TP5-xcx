// pages/theme/theme.js
import { Theme } from 'theme-model.js';
import ajax from '../../utils/ajax.js';

var theme = new Theme();
Page({

  /**
   * 页面的初始数据
   */
  data: {
	
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
	var id =  option.id;
	var name = option.name;
	this.data.name = name;
	this.data.id   = id;
	console.log(option)
	this._loadData();
  },

  /*加载所有数据*/
  _loadData:function(){
	  ajax.get('theme/'+this.data.id).then((res) => {
		  this.setData({
			  'themeInfo': res.data
		  })
		  console.log(res)
	  })
  }
})
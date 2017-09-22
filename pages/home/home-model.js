class   Home 
{
	constructor(){

	}
      getBannerData(id,callBack){
		  return new Promise((resolve,reject)=>{
			  
			  wx.request({
				  url: "http://www.tp-xcx.com/index.php/api/v1/banner/" + id,
				  method: 'GET',
				  success: function (res) {
					  // console.log(res);
					  resolve(res)
				  }
			  })

		  })
            
      }
}
export {Home};
var $ = require("jquery");
var Vue=require('./vue.min.js' );
var path={
	init:function(){
		this.initdata();
	},
	initdata:function(){
		var args = "communication",
		datalist = null;
		$.ajax({
			async: true,
			url: "//127.0.0.1:1000/"+args,
			success: function(data) {
				datalist = data;
				$.each(datalist.posts, function(i, k) {
					new Vue({
						el: '#myapp',
						data: {
							numList: datalist.posts
						}
					})
				})
			}
		})
	},	
}
path.init();

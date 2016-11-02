module.exports = {
	insert(name,value,hours,path,domain,secure){
		let len = arguments.length;
		var data = name + "=" + value;

	  	if(hours){
	  		var d = new Date();
	  		d.setHours(d.getHours() + hours);
	  		data += "; expires=" + d.toGMTString();
	  	}
	  	data += path ? ("; path=" + path) : "" ;
	  	data += domain ? ("; domain=" + domain) : "" ;
	  	data += secure ? ("; secure=" + secure) : "" ;

	  	document.cookie = data;
	},

	query(name){
		let len = arguments.length;
		if(len == 0){
			var cs = document.cookie,
				arr = [],
				arr2 = [],
				obj = {};
			arr = cs.split(';');  
			// console.log(arr);
			for(var i=0; i<arr.length; i++){
				var a = arr[i].split('=');
				var a1 = [a[0].trim(),a[1]];
				arr2.push(a1);
			}
			return JSON.stringify(arr2);
		}else if(len == 1){
			var reg = eval("/(?:^|;\\s*)" + name + "=([^=]+)(?:;|$)/"); 
	      	return reg.test(document.cookie) ? RegExp.$1 : "";
		}
	},

	remove(name,path,domain){
		if(arguments.length == 0){
			var all = query();
			for(var i=0; i<all.length; i++){
				insert(all[i][0],"",-1);
			}
		}

		insert(name,"",-1,path,domain);
	}
}
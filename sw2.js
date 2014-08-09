	var coe = function(){
		for (var i=1; i<101 ; i++){
			var str = "";
			str = (i%3==0)?"Computer":"";
			str = (i%5==0)?str+"Engineering":str;
			console.log(str || i);
		}
	}
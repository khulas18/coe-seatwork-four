var countBs = function(str){
	var count=0;
	for (var i=0;i<str.length;i++){
		if(str.charAt(i)=="B")
			count++;
	}
	return count;
}

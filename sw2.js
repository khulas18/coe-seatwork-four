var coe = function(){
	var string="";
	for (var i=1; i<101 ; i++){
		
		if (i%3==0){
			str = "Computer"
		}
		if (i%5==0){
			str = str +"Engineering";
		}
		if (i%5>0 && i%3>0){
			str = i;
		}
		console.log(str);
		str="";
	}
}
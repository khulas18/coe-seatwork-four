var coe = function(){
	for (var i=1; i<101 ; i++){
		if(i%3==0 && i %5==0){
			console.log("ComputerEngineering");
		}else if(i%5==0){
			console.log("Engineering")
		}else if(i%3==0){
			console.log("Computer")
		}else{
			console.log(i);
		}
	}
}
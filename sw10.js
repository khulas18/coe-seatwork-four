function convertFirstLetter(str){
	var arr = str.split(" ");
	var out="";
	for(var i = 0;i<arr.length; i++){
		if(i<arr.length-1)
			out = out + arr[i].charAt(0).toUpperCase()+ arr[i].substring(1,arr[i].length)+ " ";
		else
			out = out + arr[i].charAt(0).toUpperCase()+ arr[i].substring(1,arr[i].length);
	}
	console.log(out);
	return out;
}
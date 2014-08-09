function reverseString(str){
	var out = "";
	for (var i=0;i<str.length;i++){
		out = out+ str.charAt(str.length-1-i);
	}
	return out;

}
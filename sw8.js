function joinArray(inputArray, seperator){
	var out = "";
	for (var i=0;i<inputArray.length;i++){
		if (i<inputArray.length-1)
			out = out +inputArray[i]+ seperator;
		else
			out = out + inputArray[i];
	}
	console.log(out);
	return out;
}
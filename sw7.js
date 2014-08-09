function countElement(arr,elem){
	var count=0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]==elem)
			count++;
	}
	return count
}
function mostFrequent(a){
	a.sort();
	var out = new Array();
	var counts = new Array();
	var highest=0;
	var index=0;
	for (var i=0; i<a.length;i++){
		if(i==0){
			out.push(a[i]);
		}else{
			if(out.indexOf(a[i])<0)
				out.push(a[i])
		} 
	}
	for(var i=0;i<out.length;i++){
		counts[i] = countElement(a,out[i])
		if(counts[i]>highest){
			highest = counts[i];
			index = i;
		}
	}
	var str = out[index]+" ( "+counts[index]+" times )"
	console.log(str);
	return str;
}

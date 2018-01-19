var array1 = [1,6,3]
var array2 = [6,1,3]


var total = 0;

for (i=0; i<array1.length; i++) {
	total = total + Math.abs(array1[i] - array2[i])
}

console.log(total);
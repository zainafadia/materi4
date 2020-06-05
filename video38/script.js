// var arr = ['fadia', 'laila', 'hidayati'];

// //splice
// //splice(indexAwal, mauHapusBerapa, elemenBaru, elemenBaru, ..)
// arr.splice(0,0, 'zaina');
// console.log(arr.join(' - '));

//5. Slice
// Slice(awal, akhir);
// var arr = ['zaina','fadia', 'laila', 'hidayati'];
// var arr2 = arr.slice(0,3);
// console.log(arr2.join(' - '));

//6. foreach
// var angka = [1,2,3,4,5,6,7,8];
// var name = ['zaina','fadia', 'laila', 'hidayati'];
// for (var i = 0; i < angka.length; i++) {
// 	console.log(angka[i]);
// }

// angka.foreach(function(e){
// 	console.log(e);
// });

// name.foreach(function(e, i ) {
// 	console.log('Mahasiswa ke- ' + (i + 1) + ' adalah ' + e);
// });

//7. Map
// var angka = [2,4,5,3,1,8,6,9,7];
// var angka2 = angka.map(function(e){
// 	return e * 2;
// });

// console.log(angka2.join(' - '));

// 8. Sort
// var angka = [2,4,5,3,1,8,6,9,7, 10, 30];
// angka.sort(function(a,b) {
// 	return a-b;
// });
// console.log(angka.join(' - '));

//9. Filter

var angka = [2,4,5,3,1,8,6,9,7, 10, 30];
var angka2 = angka.filter(function(x) {
	return x == 7;
});

console.log(angka2);
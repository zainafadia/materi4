// Manipulasi Array
// 1. menambah isi array
// var arr = [];
// arr[0] = "fadia";
// arr[1] = "laila";

// console.log(arr);

// 2. menghapus elemen array
// var arr = ["fadia", "laila", "hidayati"];
// arr[0] = undefined;

// console.log(arr);

//3. Menampilkan isi array

// var arr = ["fadia", "laila", "hidayati"];

// for (var i = 0; i < arr.length; i++) {
// console.log('Mahasiswa ke- ' + (i + 1) + ' : ' + arr[i]);
// }

//method pada array
var arr = ['fadia', 'laila', 'hidayati'];
//1. join
// console.log(arr.join(''));

//2. push & pop
// arr.push('zaina');
// console.log(arr.join(' - '));

//3. unshift & shift
// arr.unshift('zaina');
arr.shift();
console.log(arr.join(' - '));

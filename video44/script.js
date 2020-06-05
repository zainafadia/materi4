//membuat object Angkot

function Angkot(sopir, trayek, penumpang, kas){
	this sopir = sopir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik = function(namaPenumpang){
	this.penumpang.push(namaPenumpang);
	return this.penumpang;
	}

	this.penumpangTurun = function(namaPenumpang, bayar){
		if (this.penumpang.length === 0) {
			alert('angkot masih kosong!');
			return false;
		}

		for(var i = 0; i < this.penumpang.length; i++){
			if(this.penumpang[i] == namaPenumpang){
				this.penumpang[i] = undefined;
				this.kas += bayar;
				return this.penumpang;
			}
		}
	}
}

var angkot1 = new Angkot('Ye Dam', ['Haruto', 'Jeongwoo'], [], 0);
var angkot2 = new Angkot('Jin', ['V', 'JK'], [], 0);





var penumpang = ['Fadia', undefined, 'Laila'];

var tambahPenumpang = function(namaPenumpang, penumpang) {
	// jika angkot kosong
	if(penumpang.length == 0){
		//tambah penumpang di awal array
		penumpang.push(namaPenumpang);
		//kembalikan isi array & keluar fari function
		return penumpang;
	}else{
		//telusuri seluruh kursi dari awal
		for(var i = 0; i < penumpang.length; i++){
			if (penumpang[i] == undefined) {
				//tambah penumpang dikursi tersebut
				penumpang[i] = namaPenumpang;
				return penumpang;
			}
			// jika sudah ada nama yang sama
			else if(i == namaPenumpang){
				// tampilkan pesan kesalahannya
				console.log(namaPenumpang + 'Sudah ada di dalam angkot');
				//kembalikan isi array dan keluar dari function
				return penumpang;
			}
				
			//jika seluruh kursi terisi
			else if(i == penumpang.length - 1){
				//tambah penupang di akhir array
				penumpang.push(namaPenumpang);
				//kembalikan isi array dan keluar dari function
				return penumpang;
			}
		}
	}
}

var hapusPenumpang = function(namaPenumpang, penumpang){
	if (penumpang.length == 0) {
		console.log('angkot masih kosong.');
		return penumpang;
	}else {
		for(var i = 0; i < penumpang.length; i++){
			if (penumpang[i] == namaPenumpang) {
				penumpang[i] = undefined;
			}else if (i == penumpang.length - 1) {
				console.log(namaPenumpang + 'tidak ada di dalam angkot.');
			}
		}
	}
	return penumpang;
}







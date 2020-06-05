var penumpang = [];

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








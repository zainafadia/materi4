var tanya = true;

while( tanya){
	var pilih = prompt('kamu memilih : (gajah, semut, atau orang)');

	var comp = Math.random();

	if(comp < 0.34 ) {
		comp = 'gajah';
	}else if (comp >= 0.34 && comp <= 0.67) {
		comp = 'orang';
	}else{
		comp = 'semut';
	}

	var hasil = '';

	if (pilih == comp) {
		hasil = 'SERI!';
	}else if (pilih == 'gajah') {
			hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
	}else if( pilih == 'orang'){
			hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
	}else if (comp == 'semut') {
			hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
	}else{
		hasil = 'memasukkan pilihan yang salah!!';
	}

	alert('Kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\nMaka hasilnya : kamu ' + hasil);

	tanya = confirm('lagi ?');

}

alert('terimakasih sudah bermain.');
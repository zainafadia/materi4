var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;


for(noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++){
	if ( noAngkot === 5|| noAngkot === 8 || noAngkot === 10) {
		console.log("Angkot No. " + noAngkot + " sedang lembur");
	} else if (noAngkot <= 6) {
		console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
	} else {
		console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
	}
}
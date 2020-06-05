//membuat Object
// Object Literal
var mahasiwa = {
	nama : "Fadia Laila",
	umur : 19,
	alamat : "Banjarbaru"
};

var mahasiwa2 = {
	nama : "Ica Rabiatun",
	umur : 19,
	alamat : "Tanah Bumbu"
};

//Function Declaration
function buatObjectMahasiawa(nama, umur, alamat){
	var mhs = {};
	mhs.nama = nama;
	mhs.umur = umur;
	mhs.alamat = alamat;

	return mhs;
}

var mhs3 = buatObjectMahasiawa('ridha Afifa', 19, 'Dahlina Raya');

//constructor
function mahasiswa(nama, umur, alamat){
	this.nama = nama;
	this.umur = umur;
	this.alamat = alamat;
}

var mhs4 = new mahasiswa('Hartati', 20, 'Tamiang Layang');
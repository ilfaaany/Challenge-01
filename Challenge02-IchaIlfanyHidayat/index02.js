//Jawaban No.1
// function changeWord (selectedText, changedText, text){
//     ubah = text.replace(selectedText, changedText); //replace berfungsi untuk merubah parameter text
//     return ubah;
// }

// const kalimat1 ='Andini sangat mencintai kamu selamanya';
// const kalimat2 ='Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

// console.log(changeWord('mencintai','membenci', kalimat1)); //hasil memunculkan 'andini sangat membenci kamu selamanya'
// console.log(changeWord('bromo','semeru',kalimat2)); //hasil memunculkan 'gunung semeru....'

//Jawaban No.2
// let checkTypeNumber = (givenNumber) => { //menggunakan arrow function
//   let result = givenNumber % 2;  //modulus 2 (sisa 2) untuk menghasilkan hasil genap
//   if (givenNumber == null) {     //== menjelaskan kondisi kalau kondisinya null = kosong maka akan memunculkan hasil tidak ada parameter
//     result = 'Bro where is the parameter?';
//   } else if (typeof givenNumber !== 'number') {    //!== tidak sama/bukan, typeof menjelaskan tipe parameternya jika bukan number maka error
//     result = 'Error : Invalid data type';
//   } else {
//     if (result == 0) {           //jika sisa bagi nya 0 maka genap
//         result = 'GENAP';
//     } else if (result == 1) {    //jika sisa baginya 1 maka ganjil
//        result = 'GANJIL';
//     } else if ((result = 'null')) {
//         result = 'Error : Invalid data type';
//     }
//   }
//   return result;
// };

// console.log(checkTypeNumber(10));
// console.log(checkTypeNumber(3));
// console.log(checkTypeNumber("3")); //hasilnya error
// console.log(checkTypeNumber({})); //hasilnya error
// console.log(checkTypeNumber([])); //hasilnya error
// console.log(checkTypeNumber()); //hasilnya bro : where is the parameter


//Jawaban No.3
// function checkEmail(email) {
//   if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email))
//     return "VALID";
//   } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+$/.test(email)) {
//     return "INVALID";
//   } else {
//     if (/^\w+([\.-]?\w+)+$/.test(email)) {
//       if (typeof email === "undefined") {
//         return "ERROR : Parameter is empty";
//       }
//       return "ERROR : Don't forget to take @ on your input";
//     } else {
//       return "ERROR : Not String";
//     }
//   }
// }

// console.log(checkEmail("apranata@binar.co.id")); //VALID
// console.log(checkEmail("apranata@binar.com")); //VALID
// console.log(checkEmail("apranata@binar")); //INVALID
// console.log(checkEmail("apranata")); //ERROR
// console.log(checkEmail(checkEmail(3322))); //ERROR
// console.log(checkEmail()); //ERROR

//Jawaban No.4
// function isValidPassword(email) {
//   let regex = new RegExp("[A-Z]+[a-z0-9]{8}"); ////{8} adalah minimal kata yang bisa diinputkan untuk menjadi password
//   let mailResult;
//     if (typeof email !== "string"){ //jika bukan string maka hasilnya error
//         return 'ERROR : Invalid Parameter Entered';
//     } else{
//     if (regex.test(email)) {
//         mailResult = "TRUE";
//     } else if (!regex.test(email)) { //jika bukan regex maka false
//         mailResult = "FALSE";
//     } else {
//         mailResult = "ERROR";
//     }
//     return mailResult;
// }
// }

// console.log(isValidPassword("Meong2021")); //TRUE
// console.log(isValidPassword("meong2021")); //FALSE
// console.log(isValidPassword("@eong")); //FALSE
// console.log(isValidPassword("Meong2")); //FALSE
// console.log(isValidPassword(0)); //ERROR
// console.log(isValidPassword()); //ERROR

//Jawaban No.5
// function getSplitName(personName) {
//   let name = personName;
//   let result = [];

//   if (typeof name !== "string") {
//     return "ERROR : Parameter is not string";
//   }

//   if (name.match(/(\w+)/g).length === 1) {   //(\w+) semua kondisi string A-Z a-z g = global/ngecek keseluruhan
//     result.push({
//       firstName: name.split(" ")[0],   //nama hanya terdiri dari 1 kata/karakter
//       middleName: name.split === "null",
//       lastName: name.split === "null",
//     });
//     return result;
//   }
//   if (name.match(/(\w+)/g).length === 2) {   //terdiri dari 2 kata/karakter
//     result.push({
//       firstName: name.split(" ")[0],
//       middleName: name.split === "null",
//       lastName: name.split(" ")[1],
//     });
//     return result;
//   }
//   if (name.match(/(\w+)/g).length === 3) {   //terdiri dari 3 kata/karakter
//     result.push({
//       firstName: name.split(" ")[0],
//       middleName: name.split(" ")[1],
//       lastName: name.split(" ")[2],
//     });
//     return result;
//   }

//   if (name.match(/(\w+)/g).length > 3) { //jika nama lebih panjang dari 3 kata/karakter maka hasilnya error
//     return "ERROR : This function only for 3 characters";
//   }
// }

// console.log(getSplitName("Aldi Daniela Pranata"));
// console.log(getSplitName("Dwi Kuncoro"));
// console.log(getSplitName("Aurora"));
// console.log(getSplitName("Dwi Aureliya Sukma Darma"));
// console.log(getSplitName(0));

//Jawaban No.6
// function getAngkaTerbesarKedua(personName) {
//   if (typeof personName === "undefined") {   //undefined bernilai kosong
//     return "ERROR : Parameter is empty";
//   } else if (typeof personName === "number") {
//     return "ERROR : Parameter is a number";
//   }

//   var angka = personName.sort(function (a, b) { //.sort untuk mengurutkan dari kecil ke besar
//     return b - a; //mengembalikan nilai dari besar ke terkecil
//   });
//   return angka[1]; //index 1 untuk memanggil data yg ada di array, karena angka terbesar kedua dari array adalah 1. karna array dimulai dari angka 0
// }

// const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
// console.log(getAngkaTerbesarKedua(dataAngka)); //8
// console.log(getAngkaTerbesarKedua(0)); //ERROR
// console.log(getAngkaTerbesarKedua()); //ERROR

//Jawaban No.7
// const dataPenjualanPakAldi = [
//   {
//     namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
//     hargaSatuan: 760000,
//     kategori: "Sepatu Sport",
//     totalTerjual: 90,
//   },
//   {
//     namaProduct: "Sepatu Warrior Tristan Black Brown High",
//     hargaSatuan: 960000,
//     kategori: "Sepatu Sneakers",
//     totalTerjual: 37,
//   },
//   {
//     namaProduct: "Sepatu Warrior Tristan Maroon High",
//     kategori: "Sepatu Sneaker",
//     hargaSatuan: 360000,
//     totalTerjual: 90,
//   },
//   {
//     namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
//     hargaSatuan: 120000,
//     kategori: "Sepatu Sneaker",
//     totalTerjual: 90,
//   },
// ];

// function hitungTotalPenjualan(dataPenjualan) {
//   let terjual = dataPenjualan[0].totalTerjual + dataPenjualan[1].totalTerjual + dataPenjualan[2].totalTerjual + dataPenjualan[3].totalTerjual;
//   return terjual;  //menampilkan hasil dari data penjualan yang telah terjual
// }

// console.log(hitungTotalPenjualan(dataPenjualanPakAldi)); //hasilnya muncul 307

//Jawaban No.8
// const dataPenjualanNovel = [
//   {
//     idProduct: "BOOK002421",
//     namaProduk: "Pulang - Pergi",
//     penulis: "Tere Liye",
//     hargaBeli: 60000,
//     hargaJual: 86000,
//     totalTerjual: 150,
//     sisaStok: 17,
//   },
//   {
//     idProduct: "BOOK002351",
//     namaProduk: "Selamat Tinggal",
//     penulis: "Tere Liye",
//     hargaBeli: 75000,
//     hargaJual: 103000,
//     totalTerjual: 171,
//     sisaStok: 20,
//   },
//   {
//     idProduct: "BOOK002941",
//     namaProduk: "Garis Waktu",
//     penulis: "Fiersa Besari",
//     hargaBeli: 67000,
//     hargaJual: 99000,
//     totalTerjual: 213,
//     sisaStok: 5,
//   },
//   {
//     idProduct: "BOOK002941",
//     namaProduk: "Laskar Pelangi",
//     penulis: "Andrea Hirata",
//     hargaBeli: 55000,
//     hargaJual: 68000,
//     totalTerjual: 20,
//     sisaStok: 56,
//   },
// ];

// function getInfoPenjualan(dataPenjualan) {
//   let infoPenjualan = {};
//   let totalKeuntungan = 0; //total keuntungan
//   let totalModal = 0; //total modal
//   let presentasiKeuntungan = 0; //presentasi keuntungan
//   let terjual = 0; //parameter mencari terlaris
//   let penulisTerlaris = ""; //nama produk terlaris
//   let penulis = []; //parameter mencari penulis

//   for (let i = 0; i < dataPenjualan.length; i++) {
//     //total keuntungan
//     totalKeuntungan += (dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli) * dataPenjualan[i].totalTerjual;
//     //total modal
//     totalModal += dataPenjualan[i].hargaBeli * dataPenjualan[i].totalTerjual;
//     //cari produk terjual terbanyak
//     if (dataPenjualan[i].totalTerjual > terjual) {
//       bukuterlaris = dataPenjualan[i].namaProduk;
//       terjual = dataPenjualan[i].totalTerjual;
//     }
//    //array penulis
//     if (!penulis.includes(dataPenjualan[i].penulis)) {
//       penulis.push(dataPenjualan[i].penulis);
//     }
//   }

//    //penulis terlaris
//   let a = [];
//   for (let j = 0; j < penulis.length; j++) {
//     let b = {};
//     b["nama"] = penulis[j];
//     let c = 0;
//     for (let k = 0; k < dataPenjualan.length; k++) {
//       if (penulis[j] === dataPenjualan[k].penulis) {
//         c += dataPenjualan[k].totalTerjual;
//       }
//     }
//     b["total"] = c;
//     a.push(b);
//   }
//   let c = 0;
//   for (let l = 0; l < penulis.length; l++) {
//     if (a[l].total > c) {
//       c = a[l].total;
//       penulisTerlaris = a[l].nama;
//     }
//   }

//   presentasiKeuntungan = Math.trunc((totalKeuntungan / totalModal) * 100);
//   infoPenjualan.totalKeuntungan = totalKeuntungan;
//   infoPenjualan.totalModal = totalModal;
//   infoPenjualan.presentasiKeuntungan = `${presentasiKeuntungan}%`;
//   infoPenjualan.produkBukuTerlaris = bukuterlaris;
//   infoPenjualan.penulisTerlaris = penulisTerlaris;
//   return infoPenjualan;
// }

// console.log(getInfoPenjualan(dataPenjualanNovel));

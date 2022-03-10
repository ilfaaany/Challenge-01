//Jawaban No.1
// function changeWord (selectedText, changedText, text){
//     ubah = text.replace(selectedText, changedText); //relace berfungsi untuk merubah parameter text
//     return ubah;
// }

// const kalimat1 ='Andini sangat mencintai kamu selamanya';
// const kalimat2 ='Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu';

// console.log(changeWord('mencintai','membenci', kalimat1)); //hasil memunculkan 'andini sangat membenci kamu selamanya'
// console.log(changeWord('bromo','semeru',kalimat2)); //hasil memunculkan 'gunung semeru....'

//Jawaban No.2
// let checkTypeNumber = (givenNumber) => { //menggunakan arrow function
//   let result = givenNumber % 2; //modulus 2 (sisa 2) untuk menghasilkan hasil genap
//   if (givenNumber == null) { //== menjelaskan kondisi kalau kondisinya null = kosong maka akan memunculkan hasil tidak ada parameter
//     result = 'Bro where is the parameter?';
//   } else if (typeof givenNumber !== 'number') { //!== tidak sama/bukan, typeof menjelaskan tipe parameternya jika bukan number maka error
//     result = 'Error : Invalid data type';
//   } else {
//     if (result == 0) { //jika sisa bagi nya 0 maka genap
//         result = 'GENAP';
//     } else if (result == 1) { //jika sisa baginya 1 maka ganjil
//        result = 'GANJIL';
//     } else if ((result = 'null')) {
//         result = 'Error : Invalid data type';
//     }
//   }
//   return result;
// };

// console.log(checkTypeNumber(10));
// console.log(checkTypeNumber(3));
// console.log(checkTypeNumber("3")); //error
// console.log(checkTypeNumber({})); //error
// console.log(checkTypeNumber([])); //error
// console.log(checkTypeNumber()); //bro


//Jawaban No.3 masih ada yg error 
// function checkEmail(email) {
//   let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z].+.[a-z]{2,3}"); //pola untuk menentukan suatu string kombinasi
//   let notRegex = new RegExp("[]"); //jika hasilnya bukan regex maka diinputkan ke dalam array
//   let mailResult;

//   if (typeof email !== "string") {
//     return "ERROR : Parameter kosong";
//   } else if (notRegex.test(email)) {
//     mailResult = "INVALID";
//   } else {
//     if (regex.test(email)) {
//       mailResult = "VALID";
//     } else if (notRegex.test(email)) {
//       mailResult = "INVALID";
//     } else {
//       mailResult = "ERROR : email tidak sesuai";
//     }
//     return mailResult;
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
//         return 'ERROR : Parameter yang dimasukkan tidak sesuai';
//     } else{
//     if (regex.test(email)) {
//         mailResult = "TRUE";
//     } else if (!regex.test(email)) { //jik bukan regex maka false
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
//     return "ERROR : Parameter bukan string";
//   }

//   if (name.match(/(\w+)/g).length === 1) { //(\w+) semua kondisi string A-Z a-z g = global/ngecek keseluruhan
//     result.push({
//       firstName: name.split(" ")[0], //nama hanya terdiri dari 1 kata
//       middleName: name.split === "null",
//       lastName: name.split === "null",
//     });
//     return result;
//   }
//   if (name.match(/(\w+)/g).length === 2) { //terdiri dari 2 kata
//     result.push({
//       firstName: name.split(" ")[0],
//       middleName: name.split === "null",
//       lastName: name.split(" ")[1],
//     });
//     return result;
//   }
//   if (name.match(/(\w+)/g).length === 3) { //terdiri dari 3 kata
//     result.push({
//       firstName: name.split(" ")[0],
//       middleName: name.split(" ")[1],
//       lastName: name.split(" ")[2],
//     });
//     return result;
//   }

//   if (name.match(/(\w+)/g).length > 3) { //jika nama lebih panjang dari 3 kata maka hasilnya error
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
//   if (typeof personName === "undefined") { //undefined bernilai kosong
//     return "ERROR : Parameter Kosong";
//   } else if (typeof personName === "number") {
//     return "ERROR : Parameter bertipe number";
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
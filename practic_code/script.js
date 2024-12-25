// ===== manipulasi atribut dengan setAttribute =====
// const img = document.getElementById('gambar'); // Mengambil elemen gambar

// img.setAttribute('width', 300); //menanipulasi atribut dengan setAttribute
// img.setAttribute('height', 215);

// const btns = document.querySelectorAll('.button'); // Mengambil semua elemen button
// const playBtn = btns[3]; // Mengambil elemen div button play
// const playBtnElement = playBtn.children[0]; // Mengambil elemen button play

// playBtnElement.setAttribute('type', 'submit');
// ==== end =====

// ===== manipulasi konten dengan innerText dan innerHTML =====
// const dicoding = document.getElementById("link1");
// dicoding.innerText = "belajar di dicoding"; // manipulasi teks dengan innerText\
// dicoding.innerHTML = "<i>belajar di dicoding</i>"; // manipulasi elemet dengan innerHTML

// const google = document.getElementById("link2");
// google.innerText = "cari di google";
// google.innerHTML = "<i>cari di google</i>";
// ==== end =====

// ===== manipulasi style dengan style.property =====
// const buttons = document.getElementsByClassName("button");
// for (const button of buttons) {
//   button.children[0].style.borderRadius = "7px"; // manipulasi style dengan style.property
// }
// ==== end =====

// ===== Menambahkan Elemen dengan appendChild() =====
const listBaru = document.createElement("li"); // Membuat elemen baru
listBaru.innerHTML = "<a href='#'>Belajar Javascript</a>"; // Menambahkan teks ke elemen baru

 const daftarLink = document.getElementById("linkList"); // Mengambil elemen daftar link

 daftarLink.appendChild(listBaru); // Menambahkan elemen baru ke dalam daftar link

// ==== Menambahkan Elemen dengan insertBefore() ====
const ListAwal = document.createElement("li"); // Membuat elemen baru
ListAwal.innerHTML = "<a href='#'>Whatsapp</a>"; // Menambahkan teks ke elemen baru

const itemAwal = document.getElementById("list1"); // Mengambil elemen daftar link
daftarLink.insertBefore(ListAwal, itemAwal); // Menambahkan elemen baru ke dalam daftar link.
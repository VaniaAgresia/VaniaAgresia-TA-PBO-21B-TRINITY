// Nav bar start
const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
const bgSidebar = document.querySelector('.bg-sidebar')

burger.addEventListener('click', function() {
  this.classList.toggle('change')
  sidebar.classList.toggle('change')
  bgSidebar.classList.toggle('change')
})

bgSidebar.addEventListener('click', function() {
  this.classList.remove('change')
  sidebar.classList.remove('change')
  burger.classList.remove('change')
})
// Nav bar end


function klikKotak(element) {
  alert("Anda mengklik " + element.querySelector("p").innerText);
  // efek klik pada kotak
}

// Bagian Registrasi
// script.js

function validateName() {
  // Validasi dan pemrosesan input Nama Lengkap
  var fullNameInput = document.getElementById('fullName');
  fullNameInput.value = fullNameInput.value.replace(/[^A-Za-z ]/g, '');
}

function validatePhoneNumber() {
  // Validasi dan pemrosesan input Nomor HP
  var phoneNumberInput = document.getElementById('phoneNumber');
  phoneNumberInput.value = phoneNumberInput.value.replace(/\D/g, ''); // Hanya angka diizinkan
}

function validateForm() {
  // Validasi formulir saat tombol "Daftar" ditekan
  var fullName = document.getElementById('fullName').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Validasi input di sini
  // Misalnya, dapat ditambahkan logika validasi sesuai kebutuhan

  // Contoh sederhana: Nama tidak boleh kosong
  if (fullName.trim() === "") {
      alert("Nama Lengkap tidak boleh kosong.");
      return;
  }

  // Contoh sederhana: Nomor HP harus angka
  if (!/^\d+$/.test(phoneNumber)) {
      alert("Nomor HP hanya boleh diisi dengan angka.");
      return;
  }

  // Contoh sederhana: Email harus memiliki format yang benar
  if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Format Email tidak valid.");
      return;
  }

  // Contoh sederhana: Password harus memiliki panjang minimal 8 karakter
  if (password.length < 8) {
      alert("Password harus memiliki panjang minimal 8 karakter.");
      return;
  }

  // Jika semua validasi berhasil, Anda dapat melanjutkan dengan pengiriman formulir atau tindakan lainnya.
  alert("Formulir berhasil divalidasi. Data dapat diirim ke server.");
}
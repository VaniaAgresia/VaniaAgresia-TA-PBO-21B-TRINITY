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

  // Nama tidak boleh kosong
  if (fullName.trim() === "") {
      alert("Nama Lengkap tidak boleh kosong.");
      return;
  }

  // Nomor HP harus angka
  if (!/^\d+$/.test(phoneNumber)) {
      alert("Nomor HP hanya boleh diisi dengan angka.");
      return;
  }

  // Email harus memiliki format yang benar
  if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Format Email tidak valid.");
      return;
  }

  // Password harus memiliki panjang minimal 8 karakter
  if (password.length < 8) {
      alert("Password harus memiliki panjang minimal 8 karakter.");
      return;
  }

  // Jika semua validasi berhasil, melanjutkan dengan pengiriman formulir atau tindakan lainnya.
  alert("Formulir berhasil divalidasi. Data dapat diirim ke server.");
}

// bagian berita
document.addEventListener('DOMContentLoaded', function () {
  const readMoreLinks = document.querySelectorAll('.read-more');

  readMoreLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          alert('Baca lebih lanjut: ' + this.previousElementSibling.textContent);
      });
  });
});

// bagian galeri

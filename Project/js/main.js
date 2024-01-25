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
document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Dapatkan nilai dari input
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // validasi 
  console.log(`Nama: ${nama}, Email: ${email}, Password: ${password}`);
  // mengirim data ke server atau melakukan validasi lebih lanjut
<<<<<<< HEAD
});
=======
});
>>>>>>> c3b1ad71ae5b81da3ebf7688453acd23a8df720e

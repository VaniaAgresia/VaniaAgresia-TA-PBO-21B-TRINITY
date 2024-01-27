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
  // Tambahkan fungsi lain yang diinginkan di sini
}

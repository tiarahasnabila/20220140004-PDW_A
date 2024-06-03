// Ambil elemen
const greetingElement = document.getElementById('greeting');
const datetimeElement = document.getElementById('datetime');

// Fungsi untuk memperbarui salam
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour < 12) {
        greeting = 'Selamat pagi, Tiara Hasna Nabila !';
    } else if (hour < 18) {
        greeting = 'Selamat siang, Tiara Hasna Nabila !';
    } else {
        greeting = 'Selamat malam, Tiara Hasna Nabila !';
    }

    greetingElement.textContent = greeting;
}

// Fungsi untuk memperbarui tanggal dan waktu
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const datetimeString = now.toLocaleDateString('id-ID', options);
    datetimeElement.textContent = datetimeString;
}

// Memperbarui salam dan tanggal/waktu awal
updateGreeting();
updateDateTime();

// Memperbarui salam dan tanggal/waktu setiap detik
setInterval(() => {
    updateGreeting();
    updateDateTime();
}, 1000);

// Inisialisasi carousel
$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });
});

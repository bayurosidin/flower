// Dapatkan referensi ke elemen
const loadingScreen = document.getElementById("loadingScreen");
const openButton = document.getElementById("openButton");
const body = document.body;
const audio = document.getElementById("myAudio"); // Elemen audio

// Fungsi yang dijalankan saat tombol diklik
function openWebsite() {
    
    // 1. Coba putar musik
    if (audio) {
        audio.play().catch(error => {
            // Ini akan muncul jika browser memblokir (tapi seharusnya tidak, karena ada interaksi)
            console.error("Gagal memutar audio:", error);
        });
    }

    // 2. Sembunyikan loading screen (Menu Buka)
    loadingScreen.classList.add("hidden");

    // 3. Hapus kelas 'not-loaded' dari body setelah sedikit jeda (agar transisi CSS berjalan lancar)
    // Jeda ini (misal 50ms) memastikan animasi tumbuhan di halaman utama dimulai
    setTimeout(() => {
        body.classList.remove("not-loaded");
    }, 15);

    // 4. Hapus event listener agar fungsi tidak terpanggil berulang kali
    openButton.removeEventListener("click", openWebsite);
}

// Tambahkan event listener saat tombol "Buka Halaman" diklik
if (openButton) {
    openButton.addEventListener("click", openWebsite);
}


// Tambahkan kembali kode onload yang asli (hanya untuk memastikan semua script siap)
// Kode ini sekarang hanya menunggu *elemen* selesai dimuat, bukan untuk menyembunyikan layar.
onload = () => {
    // Pastikan tombol dan layar pemuatan sudah siap saat halaman dimuat
    console.log("Halaman dan elemen siap. Menunggu tombol diklik...");
};

// === LATIHAN DEBUGGING: JADWAL KULIAH ===
console.log("--- DEBUG JADWAL KULIAH ---");

let inputHari = prompt("[DEBUG] Masukkan hari (Senin/Kamis/Jumat):");
let hari = inputHari.toLowerCase(); // Mengubah huruf jadi kecil semua agar tidak case-sensitive

switch (hari) {
    case "senin":
        alert("Hari Senin: Kelas JavaScript Fundamental.");
        // BUG 1: Ada yang kurang di sini?
    case "kamis":
        alert("Hari Kamis: Kelas React.js Dasar.");
        // BUG 2: Ada yang kurang di sini?
    case "jumat":
        alert("Hari Jumat: Kelas Database SQL.");
        break;
    default:
        alert("Hari libur! Tidak ada jadwal kuliah.");
        break;
}
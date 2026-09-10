// === LATIHAN DEBUGGING: LOOPING ANGKA ===
console.log("--- DEBUG LOOPING ANGGA ---");

let i = 1;

// BUG 1: Cek kondisi berhentinya. i > 0 itu artinya selamanya TRUE!
// Bagaimana cara membuatnya berhenti saat i mencapai 5?
while (i > 0) {
    console.log("Angka saat ini: ", i);
    
    // BUG 2: Bagaimana cara supaya nilai i bertambah setiap kali loop berjalan?
    // Jika i tidak pernah berubah, kondisi di atas akan selamanya true!
}

console.log("Looping selesai!"); // Baris ini tidak akan pernah tercetak jika infinite loop
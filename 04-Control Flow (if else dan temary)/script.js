// === LATIHAN DEBUGGING ===
console.log("--- LATIHAN DEBUGGING ---");

let inputAngka = prompt("[DEBUG] Masukkan sebuah angka:");
let angka = Number(inputAngka);

// BUG 1: Cek sintaks penulisan if-nya
// BUG 2: Cek logika operator matematikanya
if(angka % 2 = 0) {
    console.log("Angka " + angka + " adalah GENAP");
} else {
    console.log("Angka " + angka + " adalah GANJIL");
}

// BUG 3: Cek kenapa status selalu "Ganjil" padahal angkanya 4?
let status = angka = 4 ? "Angka empat" : "Bukan angka empat";
console.log(`Status: ${status}`);
import { index, store, destroy } from "./controller.js";

// tampilkan data awal
console.log("=== DATA AWAL ===");

index().forEach(data => {
    console.log(data);
});


// tambah 2 data baru
store([
    {
        nama: "Kevin Maulana",
        umur: 21,
        alamat: "Jl. Melati",
        email: "kevin@gmail.com"
    },
    {
        nama: "Lia Anggraini",
        umur: 20,
        alamat: "Jl. Flamboyan",
        email: "lia@gmail.com"
    }
]);


// tampilkan data setelah ditambah
console.log("\n=== SETELAH TAMBAH DATA ===");

index().forEach(data => {
    console.log(data);
});


// hapus satu data
destroy("Joko Setiawan");


// tampilkan data setelah dihapus
console.log("\n=== SETELAH HAPUS DATA ===");

index().forEach(data => {
    console.log(data);
});
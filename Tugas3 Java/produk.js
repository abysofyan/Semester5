// Array daftar produk toko
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length > 0
        ? produkToko[produkToko.length - 1].id + 1
        : 1;

    let produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };

    produkToko.push(produkBaru);

    console.log("Produk berhasil ditambahkan!");
}

// Fungsi untuk menghapus produk berdasarkan id
function hapusProduk(id) {
    let index = produkToko.findIndex(function(produk) {
        return produk.id === id;
    });

    if (index !== -1) {
        produkToko.splice(index, 1);
        console.log("Produk berhasil dihapus!");
    } else {
        console.log("Produk dengan id tersebut tidak ditemukan.");
    }
}

// Fungsi untuk menampilkan daftar produk
function tampilkanProduk() {
    console.log("=== DAFTAR PRODUK TOKO ===");

    produkToko.forEach(function(produk) {
        console.log(
            "ID: " + produk.id +
            " | Nama: " + produk.nama +
            " | Harga: Rp" + produk.harga +
            " | Stok: " + produk.stok
        );
    });
}
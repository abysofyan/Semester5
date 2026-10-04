
// Class Pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    // Method untuk mencatat transaksi penyewaan kendaraan
    catatPenyewaan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
        console.log(
            `${this.nama} berhasil menyewa kendaraan ${kendaraan}.`
        );
    }
}

// Membuat daftar pelanggan
const daftarPelanggan = [];

// Membuat beberapa objek pelanggan
const pelanggan1 = new Pelanggan("Aby Sofyan", "081234567890");
const pelanggan2 = new Pelanggan("Budi Santoso", "082345678901");
const pelanggan3 = new Pelanggan("Andi Wijaya", "083456789012");
const pelanggan4 = new Pelanggan("Siti Aminah", "084567890123");

// Mencatat transaksi penyewaan kendaraan
pelanggan1.catatPenyewaan("Toyota Avanza");
pelanggan2.catatPenyewaan("Honda Vario");
pelanggan3.catatPenyewaan("Mitsubishi Pajero");

// Memasukkan pelanggan ke dalam daftar
daftarPelanggan.push(
    pelanggan1,
    pelanggan2,
    pelanggan3,
    pelanggan4
);

// Method untuk menampilkan pelanggan yang sedang menyewa
function tampilkanDaftarPelanggan() {
    console.log("\n===== DAFTAR PELANGGAN YANG SEDANG MENYEWA =====");

    const pelangganMenyewa = daftarPelanggan.filter(
        pelanggan => pelanggan.kendaraanDisewa !== null
    );

    if (pelangganMenyewa.length === 0) {
        console.log("Belum ada pelanggan yang menyewa kendaraan.");
        return;
    }

    pelangganMenyewa.forEach((pelanggan, index) => {
        console.log(`\nPelanggan ke-${index + 1}`);
        console.log(`Nama            : ${pelanggan.nama}`);
        console.log(`Nomor Telepon   : ${pelanggan.nomorTelepon}`);
        console.log(`Kendaraan Disewa: ${pelanggan.kendaraanDisewa}`);
    });
}

// Menampilkan daftar pelanggan yang sedang menyewa
tampilkanDaftarPelanggan();

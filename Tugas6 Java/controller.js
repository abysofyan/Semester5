import users from "./data.js";

// buat lihat semua data
const index = () => {
    return users.map((user, i) => {
        return `${i + 1}. ${user.nama} | ${user.umur} tahun | ${user.alamat} | ${user.email}`;
    });
};

// buat nambah data
const store = (data) => {
    users.push(...data);

    console.log("Data baru berhasil ditambahkan.");
};

// buat hapus data
const destroy = (nama) => {
    const posisi = users.findIndex(user => user.nama === nama);

    if (posisi !== -1) {
        users.splice(posisi, 1);
        console.log(`Data ${nama} berhasil dihapus.`);
    } else {
        console.log(`Data ${nama} tidak ditemukan.`);
    }
};

export { index, store, destroy };
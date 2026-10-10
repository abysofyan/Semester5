
export const services = [
  {
    id: 1,
    icon: "fa-solid fa-book-open",
    title: "Beragam Pilihan Buku",
    description:
      "Jelajahi buku pendidikan, novel, teknologi, dan pengembangan diri.",
  },
  {
    id: 2,
    icon: "fa-solid fa-tags",
    title: "Harga Terjangkau",
    description:
      "Temukan bacaan pilihan dengan harga yang bersahabat.",
  },
  {
    id: 3,
    icon: "fa-solid fa-truck-fast",
    title: "Pengiriman Cepat",
    description:
      "Pesanan dapat diproses untuk dikirim ke alamat tujuan.",
  },
  {
    id: 4,
    icon: "fa-solid fa-headset",
    title: "Bantuan Pelanggan",
    description:
      "Hubungi tim Bookstore jika kamu membutuhkan informasi.",
  },
  {
    id: 5,
    icon: "fa-solid fa-bookmark",
    title: "Rekomendasi Bacaan",
    description:
      "Temukan inspirasi bacaan untuk menemani waktu luangmu.",
  },
  {
    id: 6,
    icon: "fa-solid fa-heart",
    title: "Pengalaman Membaca",
    description:
      "Nikmati pengalaman menjelajahi koleksi buku dengan mudah.",
  },
];

const USERS_KEY = "bookstore_demo_users";
const SESSION_KEY = "bookstore_demo_session";

function readUsers() {
  try {
    const data = localStorage.getItem(USERS_KEY);
    const users = data ? JSON.parse(data) : [];
    return Array.isArray(users) ? users : [];
  } catch {
    return [];
  }
}

export function registerUser({ name, email, password }) {
  if (typeof window === "undefined") {
    return {
      success: false,
      message: "Pendaftaran hanya bisa dilakukan di browser.",
    };
  }

  const cleanName = String(name ?? "").trim();
  const cleanEmail = String(email ?? "").trim().toLowerCase();
  const cleanPassword = String(password ?? "");

  if (!cleanName || !cleanEmail || !cleanPassword) {
    return {
      success: false,
      message: "Semua kolom wajib diisi.",
    };
  }

  if (cleanPassword.length < 8) {
    return {
      success: false,
      message: "Password harus memiliki minimal 8 karakter.",
    };
  }

  const users = readUsers();
  const alreadyExists = users.some(
    (user) => user.email === cleanEmail
  );

  if (alreadyExists) {
    return {
      success: false,
      message: "Email sudah terdaftar. Silakan login.",
    };
  }

  users.push({
    name: cleanName,
    email: cleanEmail,
    password: cleanPassword,
  });

  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    return {
      success: true,
      message: "Pendaftaran berhasil.",
    };
  } catch {
    return {
      success: false,
      message: "Data tidak dapat disimpan di browser.",
    };
  }
}

export function loginUser(email, password) {
  if (typeof window === "undefined") {
    return {
      success: false,
      message: "Login hanya bisa dilakukan di browser.",
    };
  }

  const cleanEmail = String(email ?? "").trim().toLowerCase();
  const cleanPassword = String(password ?? "");

  const user = readUsers().find(
    (item) =>
      item.email === cleanEmail &&
      item.password === cleanPassword
  );

  if (!user) {
    return {
      success: false,
      message: "Email atau password tidak sesuai.",
    };
  }

  try {
    sessionStorage.setItem(
      SESSION_KEY,
      JSON.stringify({
        name: user.name,
        email: user.email,
      })
    );

    return {
      success: true,
      message: "Login berhasil.",
      user: {
        name: user.name,
        email: user.email,
      },
    };
  } catch {
    return {
      success: false,
      message: "Sesi login tidak dapat disimpan.",
    };
  }
}

export function getCurrentUser() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const data = sessionStorage.getItem(SESSION_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function logoutUser() {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(SESSION_KEY);
  }
}

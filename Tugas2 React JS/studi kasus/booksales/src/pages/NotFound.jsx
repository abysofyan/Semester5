
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container py-5 text-center">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="fw-bold">Halaman Tidak Ditemukan</h2>
      <p className="text-secondary">
        Maaf, halaman yang kamu cari tidak tersedia.
      </p>
      <Link to="/" className="btn btn-primary mt-3">
        Kembali ke Home
      </Link>
    </main>
  );
}

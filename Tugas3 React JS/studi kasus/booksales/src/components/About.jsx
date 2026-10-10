
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <main className={`container py-5 ${styles.aboutPage}`}>
      <section className="text-center mb-5">
        <span className="badge bg-primary mb-3">About Bookstore</span>
        <h1 className="fw-bold">Cerita di Balik Bookstore</h1>
        <p className="text-secondary mx-auto">
          Kami percaya setiap buku menyimpan cerita, pengetahuan,
          dan inspirasi yang bisa mengubah cara pandang seseorang.
        </p>
      </section>

      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=80"
            alt="Rak buku di perpustakaan"
            className={`img-fluid rounded-4 shadow ${styles.aboutImage}`}
          />
        </div>

        <div className="col-lg-6">
          <h2 className="fw-bold mb-3">Lebih dari Sekadar Buku</h2>
          <p className="text-secondary">
            Bookstore hadir untuk membantu pembaca menemukan buku
            yang sesuai dengan minat dan kebutuhan mereka.
          </p>
          <p className="text-secondary">
            Mulai dari novel, pendidikan, teknologi, sampai
            pengembangan diri, kami ingin membuat pengalaman
            membaca terasa mudah dan menyenangkan.
          </p>

          <div className="row g-3 mt-3">
            <div className="col-6">
              <div className={styles.infoCard}>
                <h3 className="fw-bold text-primary">100+</h3>
                <p className="mb-0 text-secondary">Pilihan bacaan</p>
              </div>
            </div>
            <div className="col-6">
              <div className={styles.infoCard}>
                <h3 className="fw-bold text-primary">24/7</h3>
                <p className="mb-0 text-secondary">Inspirasi membaca</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

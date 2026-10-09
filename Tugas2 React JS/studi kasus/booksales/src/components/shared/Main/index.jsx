      export default function Main() {
  return (
      <main>
        <section id="books" className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose Bookstore?</h2>
            <p className="text-secondary">
              Kami menyediakan berbagai pilihan buku untuk semua kebutuhan.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="fa-solid fa-book-open fa-2xl text-primary mb-4"></i>

                  <h5 className="card-title fw-bold">Banyak Pilihan</h5>

                  <p className="card-text text-secondary">
                    Pilihan buku yang beragam mulai dari pendidikan, novel,
                    teknologi, hingga pengembangan diri.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="fa-solid fa-tags fa-2xl text-primary mb-4"></i>

                  <h5 className="card-title fw-bold">Harga Terjangkau</h5>

                  <p className="card-text text-secondary">
                    Dapatkan buku berkualitas dengan harga yang bersahabat
                    untuk berbagai kalangan.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="fa-solid fa-truck-fast fa-2xl text-primary mb-4"></i>

                  <h5 className="card-title fw-bold">Pengiriman Cepat</h5>

                  <p className="card-text text-secondary">
                    Pesanan buku kamu akan diproses dengan cepat dan aman
                    sampai ke tujuan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}

export default function Contact() {
  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <span className="badge bg-primary mb-3">
          Get In Touch
        </span>
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-secondary">
          Punya pertanyaan? Silakan hubungi tim Bookstore.
        </p>
      </div>

      <div className="row g-5">
        <div className="col-md-5">
          <h3 className="fw-bold mb-4">Get In Touch</h3>

          <div className="mb-4">
            <i className="fa-solid fa-location-dot text-primary me-3"></i>
            Jakarta, Indonesia
          </div>

          <div className="mb-4">
            <i className="fa-solid fa-envelope text-primary me-3"></i>
            bookstore@example.com
          </div>

          <div className="mb-4">
            <i className="fa-solid fa-phone text-primary me-3"></i>
            +62 812-3456-7890
          </div>

          <p className="text-secondary">
            Kami siap membantu kamu mengenai produk,
            pemesanan, dan informasi lainnya.
          </p>
        </div>

        <div className="col-md-7">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <form onSubmit={(event) => event.preventDefault()}>
                <div className="mb-3">
                  <label className="form-label">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan nama"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Masukkan email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Pesan</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Tulis pesan kamu..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

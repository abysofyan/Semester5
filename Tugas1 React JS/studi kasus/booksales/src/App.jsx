import "./App.css";

function App() {
  const path = window.location.pathname;

  if (path === "/team") {
    return <Team />;
  }

  if (path === "/contact") {
    return <Contact />;
  }

  return <Home />;
}

function Navbar() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
          >
            <i
              className="fa-solid fa-book fa-2xl"
              style={{ color: "#74C0FC" }}
            ></i>
            <span className="ms-2 fs-4">bookstore</span>
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="/" className="nav-link px-2">
              Home
            </a>
          </li>

          <li>
            <a href="/team" className="nav-link px-2">
              Team
            </a>
          </li>

          <li>
            <a href="/contact" className="nav-link px-2">
              Contact
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>

          <button type="button" className="btn btn-primary">
            Sign-up
          </button>
        </div>
      </header>
    </div>
  );
}

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold">
                Find Your Next Favorite Book
              </h1>

              <p className="lead text-secondary mt-3">
                Temukan berbagai buku menarik untuk menambah pengetahuan,
                inspirasi, dan menemani waktu santai kamu.
              </p>

              <div className="mt-4">
                <a href="#books" className="btn btn-primary btn-lg me-2">
                  Explore Books
                </a>

                <a href="/contact" className="btn btn-outline-primary btn-lg">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80"
                alt="Books"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </section>

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
    </>
  );
}

function Team() {
  return (
    <>
      <Navbar />

      <main className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Our Team</h1>

          <p className="text-secondary">
            Kenalan dengan tim yang bekerja di balik Bookstore.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center">
              <img
                src="https://i.pravatar.cc/400?img=12"
                className="card-img-top team-image"
                alt="Team member"
              />

              <div className="card-body">
                <h5 className="fw-bold">Aby Sofyan</h5>
                <p className="text-primary mb-2">Founder</p>
                <p className="text-secondary">
                  Mengembangkan Bookstore agar menjadi tempat yang nyaman
                  untuk menemukan buku.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center">
              <img
                src="https://i.pravatar.cc/400?img=47"
                className="card-img-top team-image"
                alt="Team member"
              />

              <div className="card-body">
                <h5 className="fw-bold">Sarah Putri</h5>
                <p className="text-primary mb-2">Book Manager</p>
                <p className="text-secondary">
                  Bertugas memilih dan mengatur koleksi buku yang tersedia.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center">
              <img
                src="https://i.pravatar.cc/400?img=33"
                className="card-img-top team-image"
                alt="Team member"
              />

              <div className="card-body">
                <h5 className="fw-bold">Rizky Maulana</h5>
                <p className="text-primary mb-2">Customer Support</p>
                <p className="text-secondary">
                  Membantu pelanggan mendapatkan pengalaman berbelanja yang
                  terbaik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function Contact() {
  return (
    <>
      <Navbar />

      <main className="container py-5">
        <div className="text-center mb-5">
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
              Kami siap membantu kamu mengenai produk, pemesanan, dan
              informasi lainnya.
            </p>
          </div>

          <div className="col-md-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nama</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Masukkan nama"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Masukkan email"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Pesan</label>

                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Tulis pesan kamu..."
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
    </>
  );
}

export default App;
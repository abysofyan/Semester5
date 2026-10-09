
export default function Team() {
  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <span className="badge bg-primary mb-3">
          Meet Our Team
        </span>
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
              className="team-image"
              alt="Aby Sofyan"
            />
            <div className="card-body p-4">
              <h5 className="fw-bold">Aby Sofyan</h5>
              <p className="text-primary mb-2">Founder</p>
              <p className="text-secondary">
                Mengembangkan Bookstore agar menjadi tempat
                yang nyaman untuk menemukan buku.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm text-center">
            <img
              src="https://i.pravatar.cc/400?img=47"
              className="team-image"
              alt="Sarah Putri"
            />
            <div className="card-body p-4">
              <h5 className="fw-bold">Sarah Putri</h5>
              <p className="text-primary mb-2">Book Manager</p>
              <p className="text-secondary">
                Bertugas memilih dan mengatur koleksi buku
                yang tersedia.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm text-center">
            <img
              src="https://i.pravatar.cc/400?img=33"
              className="team-image"
              alt="Rizky Maulana"
            />
            <div className="card-body p-4">
              <h5 className="fw-bold">Rizky Maulana</h5>
              <p className="text-primary mb-2">Customer Support</p>
              <p className="text-secondary">
                Membantu pelanggan mendapatkan pengalaman
                berbelanja yang terbaik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

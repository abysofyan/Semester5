export default function Hero() {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-6">
          <span className="badge bg-primary mb-3">
            Welcome to Bookstore
          </span>

          <h1 className="display-4 fw-bold">
            Find Your Next Favorite Book
          </h1>

          <p className="lead text-secondary mt-3">
            Temukan buku favoritmu, jelajahi cerita baru, dan
            dapatkan inspirasi dari setiap halaman.
          </p>

          <a href="#products" className="btn btn-primary btn-lg mt-2">
            Explore Books
          </a>
        </div>

        <div className="col-lg-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80"
            alt="Koleksi buku"
            className="img-fluid rounded-4 shadow"
          />
        </div>
      </div>
    </section>
  );
}
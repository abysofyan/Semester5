import books from "../../../Utils/books";

export default function ProductList() {
  return (
    <section id="products" className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Popular Books</h2>
        <p className="text-secondary">
          Temukan buku pilihan yang cocok untuk menemani harimu.
        </p>
      </div>

      <div className="row g-4">
        {books.map((book) => (
          <div className="col-12 col-sm-6 col-lg-4" key={book.id}>
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={book.image}
                className="card-img-top"
                alt={book.title}
                style={{
                  height: "280px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body d-flex flex-column">
                <span className="badge bg-light text-primary align-self-start mb-2">
                  {book.year}
                </span>

                <h5 className="card-title fw-bold">
                  {book.title}
                </h5>

                <p className="text-secondary mb-2">
                  Penulis: {book.author}
                </p>

                <p className="text-secondary">
                  {book.description}
                </p>

                <button
                  type="button"
                  className="btn btn-outline-primary w-100 mt-auto"
                  onClick={() =>
                    window.alert(
                      `${book.title}\nPenulis: ${book.author}\nTahun: ${book.year}\n\n${book.description}`
                    )
                  }
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
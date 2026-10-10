import { useState } from "react";
import booksData from "../Utils/books";

export default function Book() {
  const [books, setBooks] = useState(booksData);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  function handleAddBook(event) {
    event.preventDefault();

    const newBook = {
      id: Date.now(),
      title: title.trim(),
      author: author.trim(),
      year: Number(year),
      description: description.trim(),
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
    };

    setBooks((previousBooks) => [...previousBooks, newBook]);

    setTitle("");
    setAuthor("");
    setYear("");
    setDescription("");
    setShowForm(false);
  }

  return (
    <main className="container py-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h1 className="fw-bold">Book Collection</h1>
          <p className="text-secondary mb-0">
            Koleksi buku pilihan untuk menambah pengetahuanmu.
          </p>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Batal" : "+ Tambah Buku"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleAddBook}
          className="card border-0 shadow-sm p-4 mb-5"
        >
          <h2 className="h5 fw-bold mb-3">Tambah Buku Baru</h2>

          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="bookTitle" className="form-label">
                Judul Buku
              </label>
              <input
                id="bookTitle"
                className="form-control"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="bookAuthor" className="form-label">
                Nama Penulis
              </label>
              <input
                id="bookAuthor"
                className="form-control"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="bookYear" className="form-label">
                Tahun Terbit
              </label>
              <input
                id="bookYear"
                type="number"
                min="1000"
                max="9999"
                className="form-control"
                value={year}
                onChange={(event) => setYear(event.target.value)}
                required
              />
            </div>

            <div className="col-12">
              <label htmlFor="bookDescription" className="form-label">
                Deskripsi
              </label>
              <textarea
                id="bookDescription"
                className="form-control"
                rows="3"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-3 align-self-start">
            Simpan Buku
          </button>
        </form>
      )}

      <p className="text-secondary">
        Total buku: <strong>{books.length}</strong>
      </p>

      <div className="row g-4">
        {books.map((book) => (
          <div className="col-12 col-sm-6 col-lg-4" key={book.id}>
            <div className="card h-100 border-0 shadow-sm">
              <img
                src={book.image}
                alt={book.title}
                className="card-img-top"
                style={{ height: "280px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">
                <span className="badge bg-light text-primary align-self-start mb-2">
                  {book.year}
                </span>

                <h2 className="h5 card-title fw-bold">{book.title}</h2>

                <p className="text-secondary mb-2">
                  Penulis: {book.author}
                </p>

                <p className="text-secondary mb-0">
                  {book.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
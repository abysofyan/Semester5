
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSuccess("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSuccess(
      `Terima kasih, ${form.name}! Pesan kamu berhasil diproses di demo ini.`
    );

    setForm({ name: "", email: "", message: "" });
  }

  return (
    <main className="container py-5">
      <section className="text-center mb-5">
        <span className="badge bg-primary mb-3">Get In Touch</span>
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-secondary">
          Ada pertanyaan? Tim Bookstore siap mendengarkan kamu.
        </p>
      </section>

      <div className="row g-5">
        <div className="col-lg-5">
          <h3 className="fw-bold mb-4">Hubungi Kami</h3>
          <p>
            <i className="fa-solid fa-location-dot text-primary me-3"></i>
            Jakarta, Indonesia
          </p>
          <p>
            <i className="fa-solid fa-envelope text-primary me-3"></i>
            bookstore@example.com
          </p>
          <p>
            <i className="fa-solid fa-phone text-primary me-3"></i>
            +62 812-3456-7890
          </p>
          <p className="text-secondary">
            Kirim pertanyaan atau saran untuk membantu kami
            memberikan pengalaman membaca yang lebih baik.
          </p>
        </div>

        <div className="col-lg-7">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
              {success && (
                <div className="alert alert-success" role="status">
                  {success}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="contact-name" className="form-label">
                    Nama
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="contact-email" className="form-label">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Masukkan email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="contact-message" className="form-label">
                    Pesan
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-control"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan kamu..."
                    required
                  />
                </div>

                <button className="btn btn-primary" type="submit">
                  <i className="fa-solid fa-paper-plane me-2"></i>
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


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../Utils/Services";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  function handleChange(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Konfirmasi password tidak sama.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password harus memiliki minimal 8 karakter.");
      return;
    }

    const result = registerUser({
      name: form.name,
      email: form.email,
      password: form.password,
    });

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/login", {
      state: { message: "Pendaftaran berhasil. Silakan login." },
    });
  }

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-7 col-lg-5">
          <div className="card border-0 shadow rounded-4">
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-4">
                <i className="fa-solid fa-user-plus text-primary fa-2xl mb-3"></i>
                <h1 className="h3 fw-bold">Create Account</h1>
                <p className="text-secondary">
                  Buat akun untuk mulai menjelajahi Bookstore.
                </p>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="signup-name" className="form-label">
                    Nama lengkap
                  </label>
                  <input
                    id="signup-name"
                    name="name"
                    className="form-control"
                    placeholder="Masukkan nama"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="signup-email" className="form-label">
                    Email
                  </label>
                  <input
                    id="signup-email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="nama@email.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="signup-password" className="form-label">
                    Password
                  </label>
                  <input
                    id="signup-password"
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Minimal 8 karakter"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                    minLength={8}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="signup-confirm" className="form-label">
                    Konfirmasi password
                  </label>
                  <input
                    id="signup-confirm"
                    name="confirmPassword"
                    type="password"
                    className="form-control"
                    placeholder="Ulangi password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Create Account
                </button>
              </form>

              <p className="text-center text-secondary mt-4 mb-0">
                Sudah punya akun? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

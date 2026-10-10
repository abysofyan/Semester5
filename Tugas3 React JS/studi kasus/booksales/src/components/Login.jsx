
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Utils/Services";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
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

    const result = loginUser(form.email, form.password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    navigate("/");
  }

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-7 col-lg-5">
          <div className="card border-0 shadow rounded-4">
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-4">
                <i className="fa-solid fa-book-open text-primary fa-2xl mb-3"></i>
                <h1 className="h3 fw-bold">Welcome Back</h1>
                <p className="text-secondary">
                  Login untuk melanjutkan ke Bookstore.
                </p>
              </div>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="login-email" className="form-label">
                    Email
                  </label>
                  <input
                    id="login-email"
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

                <div className="mb-4">
                  <label htmlFor="login-password" className="form-label">
                    Password
                  </label>
                  <input
                    id="login-password"
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Masukkan password"
                    value={form.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>

              <p className="text-center text-secondary mt-4 mb-0">
                Belum punya akun?{" "}
                <Link to="/signup">Daftar sekarang</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

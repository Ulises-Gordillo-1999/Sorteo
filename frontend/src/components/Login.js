import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logoUnca from "../images/logo_unca.jpg";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/auth/login",
        form
      );
      localStorage.setItem("token", data.token);
      alert("Login exitoso");
      navigate("/admin");
    } catch (error) {
      alert("Credenciales inválidas");
    }
  };

  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light">
        <div className="col-md-4">
          <div className="card p-4 shadow border rounded-4 bg-white">
            <div className="text-center mb-4">
              <img
                src={logoUnca}
                alt="Logo UNCA"
                className="img-fluid"
                style={{ height: "40px" }}
              />
              <h2 className="mt-3">Inicia sesion en tu cuenta</h2> 
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Usuario
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  required
                  autoComplete="username"
                  value={form.username}
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="d-flex justify-content-between align-items-center">
                  <small>
                    <a href="#">Forgot password?</a>
                  </small>
                </div>
                <input
                  type="password"
                  className="form-control mt-1"
                  id="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

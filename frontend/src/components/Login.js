import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/auth/login', form);
      localStorage.setItem('token', data.token);
      alert('Login exitoso');
      navigate('/admin')
    } catch (error) {
      alert('Credenciales inválidas');
    }
  };

  return (
    <>
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="col-md-4">
        <div className="text-center mb-4">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
            className="img-fluid"
            style={{ height: '40px' }}
          />
          <h2 className="mt-4">Sign in to your account</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              required
              autoComplete="username"
              value={form.username}
              onChange={e => setForm({ ...form, username: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="d-flex justify-content-between align-items-center">
              <small><a href="#">Forgot password?</a></small>
            </div>
            <input
              type="password"
              className="form-control mt-1"
              id="password"
              name="password"
              required
              autoComplete="current-password"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign in
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
/*
<form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" onChange={e => setForm({...form, username: e.target.value})} required />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} required />
      <button type="submit">Login</button>
    </form>
*/
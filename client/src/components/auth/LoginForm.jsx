import { useState } from 'react';

function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", form);
    // 🔜 backend call here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="email" name="email" placeholder="Email"
        className="w-full p-2 border rounded" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password"
        className="w-full p-2 border rounded" onChange={handleChange} />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
        Login
      </button>
    </form>
  );
}

export default LoginForm;

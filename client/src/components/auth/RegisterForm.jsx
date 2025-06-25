import { useState } from 'react';

function RegisterForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register form submitted:", form);
    // 🔜 backend call here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Full Name"
        className="w-full p-2 border rounded" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email"
        className="w-full p-2 border rounded" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password"
        className="w-full p-2 border rounded" onChange={handleChange} />
      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;

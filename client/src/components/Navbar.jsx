import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">SecureNotes</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/auth" className="hover:underline">Login/Register</Link>
        <Link to="/notes" className="hover:underline">My Notes</Link>
      </div>
    </nav>
  );
}

export default Navbar;

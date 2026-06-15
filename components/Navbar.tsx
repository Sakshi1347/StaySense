export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
      <h1 className="text-2xl font-bold">StaySense AI</h1>

      <ul className="hidden md:flex gap-6">
        <li>Home</li>
        <li>About</li>
        <li>Dashboard</li>
        <li>Login</li>
      </ul>

      <div className="text-2xl">
        
      </div>
    </nav>
  );
}
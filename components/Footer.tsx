export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="flex flex-col md:flex-row justify-between">
        <p>© 2026 StaySense AI</p>

        <div className="flex gap-4">
          <a href="#">About</a>
          <a href="#">Privacy</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
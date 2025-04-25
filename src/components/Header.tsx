export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">
          <span className="text-green-500">Pitch</span>
          <span className="text-muted-foreground">Mint</span>
        </div>
        <a
          href="#waitlist"
          className="text-sm px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition"
        >
          Join Waitlist
        </a>
      </div>
    </header>
  );
}

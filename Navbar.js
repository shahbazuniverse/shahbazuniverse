import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/shahbaz-bg.jpeg" alt="Royal Hawk" className="w-9 h-9 rounded-full ring-2 ring-yellow-400" />
          <span className="text-2xl font-extrabold gold-gradient">SHAHBAZ Univers</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/login" className="nav-link">Login</Link>
          <Link href="/dashboard" className="nav-link">Dashboard</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/store" className="nav-link">Store</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/gallery" className="nav-link">Gallery</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

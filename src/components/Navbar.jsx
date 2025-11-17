import { Menu, Trophy, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-indigo-500 grid place-items-center text-white shadow-lg shadow-fuchsia-500/30">
            <Trophy size={18} />
          </div>
          <span className="text-lg font-bold tracking-tight text-gray-900">QuizMaster</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#how" className="hover:text-gray-900 transition-colors">How it works</a>
          <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">
            <User size={16} /> Sign in
          </button>
          <button className="inline-flex md:hidden p-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">
            <Menu size={18} />
          </button>
          <a href="#cta" className="hidden md:inline-flex px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-medium shadow hover:shadow-md transition-shadow">Join now</a>
        </div>
      </div>
    </header>
  );
}

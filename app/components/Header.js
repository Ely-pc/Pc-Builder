"use client"

import { useState } from "react"

export default function Header() {
  const [menuOuvert, setMenuOuvert] = useState(false)

  const liens = [
    { href: "/configurations", label: "Configurations" },
    { href: "/bon-plans", label: "Bon Plans" },
    { href: "/montage", label: "Montage" },
    { href: "/a-propos", label: "A propos" },
  ]

  return (
    <header className="border-b border-gray-800 sticky top-0 z-50 bg-gray-950/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        <a href="/" className="text-xl font-bold tracking-tight">
          Ely<span className="text-blue-500">PC</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          {liens.map((lien) => (
            <a key={lien.href} href={lien.href} className="hover:text-white transition-colors">
              {lien.label}
            </a>
          ))}
        </nav>

        <a href="/montage" className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
          Demander un montage
        </a>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOuvert(!menuOuvert)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOuvert ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOuvert ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOuvert ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </div>

      {menuOuvert && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950 px-4 py-4 flex flex-col gap-4">
          {liens.map((lien) => (
            <a
              key={lien.href}
              href={lien.href}
              className="text-gray-400 hover:text-white transition-colors py-1"
              onClick={() => setMenuOuvert(false)}
            >
              {lien.label}
            </a>
          ))}
          <a href="/montage" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors text-center mt-2">
            Demander un montage
          </a>
        </div>
      )}
    </header>
  )
}

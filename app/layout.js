import "./globals.css"
import Header from "./components/Header"

export const metadata = {
  title: "ElyPC — Configs & Montage PC sur mesure a Lyon",
  description: "Configurations PC optimisees par budget, conseils personnalises et service de montage a domicile dans la region lyonnaise.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-950 text-white antialiased">

        <Header />

        {children}

        <footer className="border-t border-gray-800 mt-20 py-8 text-center text-gray-600 text-sm">
          <p>2025 ElyPC - Configurations et Montage PC a Lyon</p>
        </footer>

      </body>
    </html>
  )
}

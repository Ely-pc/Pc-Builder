import { Geist } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"

const geist = Geist({ subsets: ["latin"] })

export const metadata = {
  title: "ElyPC — Configs & Montage PC sur mesure à Lyon",
  description: "Configurations PC optimisées par budget, conseils personnalisés et service de montage à domicile dans la région lyonnaise.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geist.className} bg-gray-950 text-white`}>

        <Header />

        {children}

        <footer className="border-t border-gray-800 mt-20 py-8 text-center text-gray-600 text-sm">
          <p>© 2025 ElyPC — Configurations & Montage PC à Lyon</p>
        </footer>

      </body>
    </html>
  )
}